// Simple caching utility for production

class SimpleCache<T = any> {
  private cache: Map<string, { data: T; timestamp: number }> = new Map();
  private defaultTtl: number;

  constructor(defaultTtl: number = 5 * 60 * 1000) { // 5 minutes default
    this.defaultTtl = defaultTtl;
  }

  set(key: string, data: T, ttl?: number): void {
    const expirationTime = Date.now() + (ttl || this.defaultTtl);
    this.cache.set(key, { data, timestamp: expirationTime });
  }

  get(key: string): T | null {
    const cached = this.cache.get(key);
    
    if (!cached) {
      return null;
    }

    if (Date.now() > cached.timestamp) {
      // Expired
      this.cache.delete(key);
      return null;
    }

    return cached.data;
  }

  has(key: string): boolean {
    return this.get(key) !== null;
  }

  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

  size(): number {
    return this.cache.size;
  }
}

// Create a default cache instance
export const cache = new SimpleCache();

// Export the class for creating custom cache instances
export default SimpleCache;