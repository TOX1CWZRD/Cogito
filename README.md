# Cogito

**Cloud-based IT documentation platform - single source of truth for self-hosted services and VMs**

Cogito is a comprehensive IT documentation and management platform designed to help teams, hobbyists, and self-hosters organize, document, and manage their infrastructure, services, configurations, and credentials in one centralized location.

> **Note**: This is a hobby project maintained in my spare time. While I'm open to contributions and will do my best to address issues and feature requests, there may be periods where I'm not actively working on it. Contributions from the community are very welcome and appreciated!

## Features

- 📚 **Documentation Management** - Organize documentation with projects, folders, and rich text editing
- 🔐 **Password Vault** - Securely store and manage passwords with client-side encryption
- ⚙️ **Configuration Management** - Track and version control configuration files
- 🖥️ **Service Management** - Document and monitor services, VMs, and infrastructure
- 🔗 **Relationship Mapping** - Visualize relationships between services and components
- ✅ **Task Management** - Track tasks and assignments
- 🔍 **Advanced Search** - Powerful search across all content types
- 👥 **User Management** - Multi-user support with role-based access control
- 🔒 **MFA Support** - Two-factor authentication for enhanced security
- 📊 **Activity Logging** - Track all changes and activities
- 🏷️ **Tagging System** - Organize content with custom tags
- 💾 **Export/Import** - Backup and restore your data

## Tech Stack

- **Frontend**: React 18, Vite, React Router
- **Backend**: Node.js, Express
- **Database**: SQLite (better-sqlite3)
- **Authentication**: JWT with bcrypt
- **Security**: Helmet, CORS, Rate Limiting

## Prerequisites

- Node.js 16+ and npm
- For production: A reverse proxy (nginx, Apache) is recommended

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TOX1CWZRD/cogito.git
   cd cogito
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and set at minimum:
   - `JWT_SECRET` - Generate a strong random secret:
     ```bash
     node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
     ```

4. **Start the development server**
   ```bash
   # Terminal 1: Start the backend server
   npm run server
   
   # Terminal 2: Start the frontend dev server
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:3000 (or the port shown in terminal)
   - Backend API: http://localhost:3001/api

## Production Deployment

1. **Build the frontend**
   ```bash
   npm run build
   ```

2. **Set production environment variables**
   ```bash
   NODE_ENV=production
   JWT_SECRET=<your-production-secret>
   BASE_URL=https://your-domain.com
   ALLOWED_ORIGINS=https://your-domain.com
   ```

3. **Configure SMTP (optional but recommended)**
   Add SMTP settings to `.env` for password reset emails:
   ```
   SMTP_HOST=smtp.example.com
   SMTP_PORT=587
   SMTP_USER=your-email@example.com
   SMTP_PASS=your-password
   SMTP_FROM=noreply@example.com
   ```

4. **Start the production server**
   ```bash
   npm start
   ```

5. **Set up reverse proxy** (recommended)
   Configure nginx or Apache to:
   - Serve static files from `dist/` directory
   - Proxy `/api/*` requests to `http://localhost:3001`

## Environment Variables

See `.env.example` for all available environment variables. Key variables:

### Required
- `JWT_SECRET` - Secret key for JWT token signing

### Optional Server Variables
- `PORT` - Server port (default: 3001)
- `NODE_ENV` - Environment mode (development/production)
- `DB_PATH` - Database file path (default: ./data/cogito.db)
- `BASE_URL` - Base URL for password reset emails
- `ALLOWED_ORIGINS` - Comma-separated list of allowed CORS origins
- `SMTP_*` - SMTP configuration for email sending

### Optional Client Variables (Vite)
- `VITE_API_URL` - API base URL (if different from default)
- `VITE_ENCRYPTION_KEY` - Client-side encryption key for password vault

## Project Structure

```
Cogito/
├── server/           # Backend Express server
│   ├── index.js     # Main server file
│   └── utils/       # Server utilities
├── src/              # Frontend React application
│   ├── components/  # React components
│   ├── contexts/    # React contexts (Auth, Theme)
│   ├── pages/       # Page components
│   └── utils/       # Frontend utilities
├── public/          # Static assets
├── uploads/         # User-uploaded files (gitignored)
├── data/            # Database files (gitignored)
└── dist/            # Production build output (gitignored)
```

## Security Notes

- **JWT_SECRET**: Must be set and kept secret. Never commit to version control.
- **Database**: The SQLite database contains sensitive data. Ensure proper file permissions.
- **Client-side Encryption**: The password vault uses client-side encryption. For production, consider implementing server-side encryption.
- **Environment Variables**: Never commit `.env` files. They are gitignored by default.

## Development

- **Frontend Dev Server**: `npm run dev` (runs on port 3000)
- **Backend Server**: `npm run server` (runs on port 3001)
- **Build**: `npm run build`
- **Production Preview**: `npm run preview`

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are very welcome! This is a hobby project, so community contributions help make it better for everyone. Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

**Note**: As this is maintained in my spare time, response times may vary, and there may be periods of inactivity. Your patience and contributions are greatly appreciated!

## Docker Deployment

For Docker users, see the [`docker/`](./docker/) directory for Docker deployment:

- **`Dockerfile`** - Multi-stage production image
- **`docker-compose.yml`** - Complete stack with Nginx
- **`docker-compose.override.yml.example`** - Environment configuration template

**Quick start:**
```bash
cp docker-compose.override.yml.example docker-compose.override.yml
# Edit docker-compose.override.yml with your settings
docker-compose up -d
```

See [docker/README.md](./docker/README.md) for detailed instructions.

## Proxmox Deployment

For Proxmox users, see the [`proxmox/`](./proxmox/) directory for automated deployment scripts:

- **`deploy-cogito.sh`** - Automated deployment script
- **`backup-cogito.sh`** - Backup script
- **`restore-cogito.sh`** - Restore from backup
- **`update-cogito.sh`** - Update to latest version

See [proxmox/README.md](./proxmox/README.md) for detailed instructions.

## Support

- **Issues**: Report bugs or request features on [GitHub Issues](https://github.com/TOX1CWZRD/cogito/issues)
- **Security**: Report security vulnerabilities via [GitHub Security Advisories](https://github.com/TOX1CWZRD/cogito/security/advisories) or see [SECURITY.md](SECURITY.md)

- [![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/I3I01Q7OA8)


