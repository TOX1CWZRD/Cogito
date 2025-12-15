const sqlite3 = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

// Database paths
const localDbPath = process.env.DB_PATH || path.join(__dirname, 'data/cogito.db');
const serverDbPath = process.env.SERVER_DB_PATH || '/opt/cogito/data/cogito.db';

console.log('=== Database Sync Tool ===\n');
console.log(`Local database: ${localDbPath}`);
console.log(`Server database: ${serverDbPath}\n`);

// Check which databases exist
const localExists = fs.existsSync(localDbPath);
const serverExists = fs.existsSync(serverDbPath);

if (!localExists && !serverExists) {
  console.error('❌ Neither database file found!');
  process.exit(1);
}

// Function to get users from a database
function getUsers(dbPath) {
  if (!fs.existsSync(dbPath)) {
    return null;
  }
  try {
    const db = sqlite3(dbPath);
    const users = db.prepare('SELECT id, username, email, role, created_at FROM users ORDER BY created_at DESC').all();
    db.close();
    return users;
  } catch (error) {
    console.error(`Error reading ${dbPath}:`, error.message);
    return null;
  }
}

// Function to copy database
function copyDatabase(source, destination) {
  try {
    const dbDir = path.dirname(destination);
    if (!fs.existsSync(dbDir)) {
      fs.mkdirSync(dbDir, { recursive: true });
    }
    fs.copyFileSync(source, destination);
    console.log(`✓ Copied database from ${source} to ${destination}`);
    return true;
  } catch (error) {
    console.error(`Error copying database:`, error.message);
    return false;
  }
}

// Get users from both databases
console.log('Checking local database...');
const localUsers = localExists ? getUsers(localDbPath) : [];
console.log(`Local users: ${localUsers ? localUsers.length : 0}`);

console.log('\nChecking server database...');
const serverUsers = serverExists ? getUsers(serverDbPath) : [];
console.log(`Server users: ${serverUsers ? serverUsers.length : 0}\n`);

// Show users from each
if (localUsers && localUsers.length > 0) {
  console.log('=== Local Database Users ===');
  localUsers.forEach(u => {
    console.log(`  - ${u.username} (${u.email}) [${u.role}]`);
  });
  console.log('');
}

if (serverUsers && serverUsers.length > 0) {
  console.log('=== Server Database Users ===');
  serverUsers.forEach(u => {
    console.log(`  - ${u.username} (${u.email}) [${u.role}]`);
  });
  console.log('');
}

// Check if they're different
if (localUsers && serverUsers) {
  const localUsernames = new Set(localUsers.map(u => u.username));
  const serverUsernames = new Set(serverUsers.map(u => u.username));
  
  const onlyLocal = localUsers.filter(u => !serverUsernames.has(u.username));
  const onlyServer = serverUsers.filter(u => !localUsernames.has(u.username));
  
  if (onlyLocal.length > 0 || onlyServer.length > 0) {
    console.log('⚠️  Databases are out of sync!\n');
    
    if (onlyLocal.length > 0) {
      console.log('Users only in local database:');
      onlyLocal.forEach(u => console.log(`  - ${u.username} (${u.email})`));
      console.log('');
    }
    
    if (onlyServer.length > 0) {
      console.log('Users only in server database:');
      onlyServer.forEach(u => console.log(`  - ${u.username} (${u.email})`));
      console.log('');
    }
    
    // Ask which direction to sync
    const args = process.argv.slice(2);
    if (args[0] === 'copy-to-local' && serverExists) {
      console.log('Copying server database to local...');
      if (copyDatabase(serverDbPath, localDbPath)) {
        console.log('✓ Sync complete! Local database now matches server.');
      }
    } else if (args[0] === 'copy-to-server' && localExists) {
      console.log('Copying local database to server...');
      if (copyDatabase(localDbPath, serverDbPath)) {
        console.log('✓ Sync complete! Server database now matches local.');
      }
    } else {
      console.log('To sync databases, run:');
      if (serverExists && onlyServer.length > 0) {
        console.log(`  node sync-database.js copy-to-local  (copy server → local)`);
      }
      if (localExists && onlyLocal.length > 0) {
        console.log(`  node sync-database.js copy-to-server (copy local → server)`);
      }
    }
  } else {
    console.log('✓ Databases are in sync!');
  }
} else if (localUsers && localUsers.length === 0 && serverUsers && serverUsers.length > 0) {
  console.log('⚠️  Local database is empty but server has users.');
  const args = process.argv.slice(2);
  if (args[0] === 'copy-to-local' && serverExists) {
    console.log('Copying server database to local...');
    copyDatabase(serverDbPath, localDbPath);
  } else {
    console.log('Run: node sync-database.js copy-to-local');
  }
} else if (serverUsers && serverUsers.length === 0 && localUsers && localUsers.length > 0) {
  console.log('⚠️  Server database is empty but local has users.');
  const args = process.argv.slice(2);
  if (args[0] === 'copy-to-server' && localExists) {
    console.log('Copying local database to server...');
    copyDatabase(localDbPath, serverDbPath);
  } else {
    console.log('Run: node sync-database.js copy-to-server');
  }
} else {
  console.log('Both databases are empty or one is missing.');
}
