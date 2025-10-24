// Performance optimization utilities

// Image optimization helper
export const optimizeImage = (src: string, width?: number, quality?: number) => {
  // In a real implementation, this would connect to your image optimization service
  // For now, we return the src with optional query parameters
  const params = new URLSearchParams();
  if (width) params.append('w', width.toString());
  if (quality) params.append('q', quality.toString());
  
  return params.toString() ? `${src}?${params.toString()}` : src;
};

// Performance monitoring helper
export const measurePerformance = (metric: string, value: number) => {
  if (process.env.NODE_ENV === 'production') {
    // In production, you might send this to a monitoring service
    console.debug(`Performance Metric [${metric}]: ${value}`);
    // Example: sendToAnalyticsService({ metric, value });
  }
};

// Memory usage monitoring
export const monitorMemoryUsage = () => {
  if (typeof window !== 'undefined' && 'memory' in performance) {
    // Cast to any to avoid TypeScript issues with browser-specific APIs
    const memory: any = (performance as any).memory;
    if (memory) {
      measurePerformance('memoryUsedMB', Math.round(memory.usedJSHeapSize / 1048576));
      measurePerformance('memoryTotalMB', Math.round(memory.totalJSHeapSize / 1048576));
    }
  }
};

// Navigation performance monitoring
export const monitorNavigationPerformance = () => {
  if (typeof window !== 'undefined' && 'getEntriesByType' in performance) {
    setTimeout(() => {
      const navigationEntries = performance.getEntriesByType('navigation');
      if (navigationEntries.length > 0) {
        // Cast to any to avoid TypeScript issues with browser-specific APIs
        const entry: any = navigationEntries[0];
        measurePerformance('pageLoadTime', entry.loadEventEnd - entry.loadEventStart);
        measurePerformance('dnsLookupTime', entry.domainLookupEnd - entry.domainLookupStart);
        measurePerformance('tcpConnectionTime', entry.connectEnd - entry.connectStart);
      }
    }, 0);
  }
};