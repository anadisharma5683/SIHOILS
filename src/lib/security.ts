// Security utilities for production

export const securityHeaders = {
  // Prevent clickjacking
  'X-Frame-Options': 'DENY',
  
  // Prevent MIME type sniffing
  'X-Content-Type-Options': 'nosniff',
  
  // Control referrer information
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  
  // Limit browser features
  'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
  
  // Enforce HTTPS
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  
  // Basic Content Security Policy
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none';",
};

export const getCspDirectives = () => {
  // Adjust CSP based on environment
  if (process.env.NODE_ENV === 'development') {
    // More permissive CSP for development
    return "default-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none';";
  }
  
  // Stricter CSP for production
  return "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none';";
};

export const applySecurityHeaders = (headers: Headers) => {
  Object.entries(securityHeaders).forEach(([key, value]) => {
    if (key === 'Content-Security-Policy') {
      headers.set(key, getCspDirectives());
    } else {
      headers.set(key, value);
    }
  });
  
  return headers;
};