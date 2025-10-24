import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define protected routes
const protectedRoutes = ['/dashboard'];
const authRoutes = ['/login'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Since we can't access localStorage in middleware, we'll use a cookie-based approach
  // Check if user is logged in by checking for an auth token in cookies
  const authToken = request.cookies.get('authToken')?.value;
  const isLoggedIn = !!authToken;
  
  // Redirect to login if trying to access protected routes without being logged in
  if (protectedRoutes.some(route => pathname.startsWith(route)) && !isLoggedIn) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }
  
  // Redirect to dashboard if logged in user tries to access auth routes
  if (authRoutes.some(route => pathname.startsWith(route)) && isLoggedIn) {
    const url = request.nextUrl.clone();
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
}

// Configure which routes the middleware should run on
export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};