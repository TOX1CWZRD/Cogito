# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Which versions are eligible for receiving such patches depends on the CVSS v3.0 Rating:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability, please **do not** open a public issue. Instead, please report it via one of the following methods:

1. **Email**: toxicwzrd@protonmail.com
2. **GitHub Security Advisory**: Use the "Report a vulnerability" button on the repository's Security tab

### What to Include

When reporting a vulnerability, please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if you have one)
- Your contact information

### Response Timeline

- **Initial Response**: Within 48 hours
- **Status Update**: Within 7 days
- **Resolution**: Depends on severity and complexity

### Disclosure Policy

- We will acknowledge receipt of your report
- We will work with you to understand and resolve the issue
- We will notify you when the vulnerability is fixed
- We will credit you in the security advisory (if desired)

## Security Best Practices

### For Users

1. **Keep JWT_SECRET secure**: Never commit it to version control
2. **Use strong passwords**: For both application users and database
3. **Enable MFA**: Use multi-factor authentication for admin accounts
4. **Keep updated**: Regularly update to the latest version
5. **Use HTTPS**: Always use HTTPS in production
6. **Regular backups**: Back up your database regularly
7. **Review logs**: Monitor activity logs for suspicious activity

### For Developers

1. **Never commit secrets**: Use environment variables
2. **Validate input**: Always validate and sanitize user input
3. **Use parameterized queries**: Prevent SQL injection
4. **Keep dependencies updated**: Regularly update npm packages
5. **Follow security headers**: Use Helmet and security best practices
6. **Rate limiting**: Implement rate limiting for sensitive endpoints

## Known Security Considerations

- **Client-side Encryption**: The password vault uses client-side encryption. For production, consider implementing server-side encryption for enhanced security.
- **SQLite Database**: The default database is SQLite. For high-security environments, consider using PostgreSQL or MySQL with proper access controls.
- **File Uploads**: Uploaded files are stored on the server. Ensure proper file validation and access controls.

## Security Updates

Security updates will be released as patch versions (e.g., 1.0.1, 1.0.2). Critical security fixes may be released as hotfixes.

Subscribe to security advisories by watching the repository or checking the [Security Advisories](https://github.com/TOX1CWZRD/cogito/security/advisories) page.

