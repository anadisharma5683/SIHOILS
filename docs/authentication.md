# Authentication System

## Overview

The Krishi Shield application uses a client-side authentication system with React Context for state management. User sessions are persisted using localStorage and cookies.

## Architecture

The authentication system is built using:

1. **React Context API** - For global state management
2. **localStorage** - For persisting user data
3. **Cookies** - For middleware authentication
4. **Protected Routes** - Using Next.js middleware

## AuthContext

The `AuthContext` provides the following functionality:

### State

- `user`: Current user object or null
- `loading`: Boolean indicating authentication status loading

### Methods

- `login(email, password)`: Authenticates user and sets session
- `logout()`: Clears session and redirects to login

### User Object Structure

```ts
{
  name: string;
  email: string;
  role: 'farmer' | 'admin';
}
```

## Implementation Details

### Login Flow

1. User submits credentials via login form
2. Credentials are validated against demo data
3. On success:
   - User object is stored in localStorage
   - Auth token is stored in cookie
   - Context state is updated
   - User is redirected to dashboard

### Session Persistence

- On app load, AuthProvider checks localStorage for user data
- If found, user state is restored
- If not found, user is redirected to login on protected routes

### Logout Flow

1. localStorage is cleared
2. Auth cookie is removed
3. Context state is reset
4. User is redirected to login page

## Protected Routes

Protected routes are implemented using Next.js middleware:

- `/dashboard/**` routes require authentication
- `/login` redirects to dashboard if already authenticated

## Demo Credentials

The system includes two demo accounts:

1. **Farmer Account**
   - Email: `farmer@krishishield.com`
   - Password: `farmer123`

2. **Admin Account**
   - Email: `admin@krishishield.com`
   - Password: `admin123`

## Security Considerations

This is a demo application with the following limitations:

- No real authentication backend
- Passwords are stored in plain text (demo only)
- localStorage is not secure for production use
- No password reset or registration functionality

For production, this system should be replaced with:

- A secure backend authentication service
- JWT tokens with proper expiration
- HTTPS-only cookies
- Password hashing
- CSRF protection