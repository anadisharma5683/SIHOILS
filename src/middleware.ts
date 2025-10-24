import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define protected routes
const protectedRoutes = ['/dashboard'];
const publicRoutes = ['/', '/features', '/about', '/contact', '/learn'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if user is logged in by checking for an auth token in cookies
  const authToken = request.cookies.get('authToken')?.value;
  const isLoggedIn = !!authToken;
  
  // If accessing public routes, allow access
  if (publicRoutes.includes(pathname) || pathname.startsWith('/_next') || pathname.startsWith('/images') || pathname.startsWith('/icons')) {
    return NextResponse.next();
  }
  
  // If accessing protected routes without being logged in, create a demo user and redirect to dashboard
  if (protectedRoutes.some(route => pathname.startsWith(route)) && !isLoggedIn) {
    // Create demo user data
    const demoUser = {
      name: 'Rajesh Kumar',
      email: 'farmer@krishishield.com',
      role: 'farmer'
    };
    
    // Create response and set auth token cookie
    const response = NextResponse.redirect(new URL('/dashboard', request.url));
    response.cookies.set('authToken', btoa(JSON.stringify(demoUser)), {
      path: '/',
      maxAge: 86400, // 24 hours
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    });
    
    // Also set user data in localStorage (will be used by client-side)
    response.cookies.set('userData', JSON.stringify(demoUser), {
      path: '/',
      maxAge: 86400,
      httpOnly: false, // Allow client-side access
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    });
    
    return response;
  }
  
  // For all other routes, redirect to dashboard
  if (!isLoggedIn && !publicRoutes.includes(pathname)) {
    // Create demo user data
    const demoUser = {
      name: 'Rajesh Kumar',
      email: 'farmer@krishishield.com',
      role: 'farmer'
    };
    
    // Create response and set auth token cookie
    const response = NextResponse.redirect(new URL('/dashboard', request.url));
    response.cookies.set('authToken', btoa(JSON.stringify(demoUser)), {
      path: '/',
      maxAge: 86400, // 24 hours
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    });
    
    // Also set user data in localStorage (will be used by client-side)
    response.cookies.set('userData', JSON.stringify(demoUser), {
      path: '/',
      maxAge: 86400,
      httpOnly: false, // Allow client-side access
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    });
    
    return response;
  }
  
  return NextResponse.next();
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};