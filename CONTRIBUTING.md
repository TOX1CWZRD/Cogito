# Contributing to Cogito

Thank you for your interest in contributing to Cogito! This document provides guidelines and instructions for contributing.

> **Note**: Cogito is a hobby project maintained in my spare time. While I appreciate all contributions and will do my best to review them, please understand that response times may vary and there may be periods where I'm not actively working on the project. Your contributions help make this project better for everyone!

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Be open to different perspectives

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://https://github.com/TOX1CWZRD/Cogito/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment details (OS, Node version, etc.)
   - Screenshots if applicable

### Suggesting Features

1. Check existing feature requests
2. Create a new issue with:
   - Clear description of the feature
   - Use case and benefits
   - Potential implementation approach (if you have ideas)

### Pull Requests

1. **Fork the repository**
   ```bash
   git clone https://github.com/TOX1CWZRD/cogito.git
   cd cogito
   ```

2. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

3. **Make your changes**
   - Follow the existing code style
   - Add comments for complex logic
   - Update documentation if needed
   - Add tests if applicable

4. **Test your changes**
   ```bash
   npm install
   npm run build
   npm run server  # In one terminal
   npm run dev     # In another terminal
   ```

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```
   
   Use clear, descriptive commit messages:
   - Start with a verb (Add, Fix, Update, Remove)
   - Keep it concise but descriptive
   - Reference issue numbers if applicable

6. **Push and create Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```
   
   Then create a Pull Request on GitHub with:
   - Clear title and description
   - Reference related issues
   - Screenshots for UI changes

## Development Setup

1. **Clone and install**
   ```bash
   git clone https://github.com/TOX1CWZRD/cogito.git
   cd cogito
   npm install
   ```

2. **Set up environment**
   ```bash
   cp .env.example .env
   # Edit .env and set JWT_SECRET
   ```

3. **Run development servers**
   ```bash
   # Terminal 1: Backend
   npm run server
   
   # Terminal 2: Frontend
   npm run dev
   ```

## Code Style

- Use consistent indentation (2 spaces for JS/JSX)
- Follow existing naming conventions
- Use meaningful variable and function names
- Keep functions focused and small
- Add JSDoc comments for complex functions

## Project Structure

- `server/` - Backend Express server
- `src/` - Frontend React application
- `public/` - Static assets
- `docker/` - Docker configuration
- `proxmox/` - Proxmox deployment scripts

## Testing

- Test your changes thoroughly
- Test in both development and production modes
- Test edge cases and error conditions
- Ensure backward compatibility when possible

## Documentation

- Update README.md if adding new features
- Add comments for complex code
- Update API documentation if changing endpoints
- Update deployment docs if changing setup process

## Questions?

Feel free to open an issue for questions or discussions. We're happy to help!

Thank you for contributing to Cogito! 🎉

