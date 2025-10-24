'use client';

import React, { Component, ReactNode } from 'react';
import Button from '@/app/common/Button';
import { ErrorReporter } from '@/lib/errorReporting';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    
    // Report error using our error reporting utility
    ErrorReporter.report(error, errorInfo.componentStack || undefined);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      // Use fallback UI if provided, otherwise use default
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-softBG flex items-center justify-center p-4" role="alert" aria-live="assertive">
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-border max-w-md w-full text-center">
            <div className="mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-red-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">Something went wrong</h2>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              We're sorry, but an unexpected error occurred. Please try again.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button onClick={this.handleRetry} className="w-full">
                Try Again
              </Button>
              <Button variant="secondary" onClick={() => window.location.reload()} className="w-full">
                Refresh Page
              </Button>
            </div>
            
            {/* Only show error details in development */}
            {process.env.NODE_ENV !== 'production' && this.state.error && (
              <details className="bg-gray-100 p-3 sm:p-4 rounded-lg mt-4 text-left">
                <summary className="font-medium text-gray-700 cursor-pointer text-sm">Error details</summary>
                <pre className="mt-2 text-xs sm:text-sm text-red-500 overflow-auto max-h-32">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;