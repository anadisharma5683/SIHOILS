// Simple error reporting utility for production

export interface ErrorReport {
  message: string;
  stack?: string;
  url?: string;
  userAgent?: string;
  timestamp: string;
  componentStack?: string;
}

export class ErrorReporter {
  static report(error: Error, componentStack?: string) {
    // In production, send to monitoring service
    if (process.env.NODE_ENV === 'production') {
      const errorReport: ErrorReport = {
        message: error.message,
        stack: error.stack,
        url: typeof window !== 'undefined' ? window.location.href : undefined,
        userAgent: typeof window !== 'undefined' ? navigator.userAgent : undefined,
        timestamp: new Date().toISOString(),
        componentStack,
      };

      // Simple console reporting for now
      // In a real app, you would send this to a service like Sentry
      console.error('Error Report:', errorReport);
      
      // Example of how you might send to an API:
      // fetch('/api/error-report', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(errorReport),
      // }).catch(console.error);
    } else {
      // In development, just log the error
      console.error('Error occurred:', error);
      if (componentStack) {
        console.error('Component stack:', componentStack);
      }
    }
  }

  static reportMessage(message: string, metadata?: Record<string, any>) {
    if (process.env.NODE_ENV === 'production') {
      const report = {
        message,
        metadata,
        url: typeof window !== 'undefined' ? window.location.href : undefined,
        userAgent: typeof window !== 'undefined' ? navigator.userAgent : undefined,
        timestamp: new Date().toISOString(),
      };

      console.warn('Warning Report:', report);
    } else {
      console.warn('Warning:', message, metadata);
    }
  }
}