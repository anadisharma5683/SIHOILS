// Configuration utility for Krishi Shield

export const config = {
  // Application settings
  appName: process.env.NEXT_PUBLIC_APP_NAME || 'Krishi Shield',
  appDescription: process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'Empowering Indian oilseed farmers',
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  
  // Environment
  environment: process.env.NEXT_PUBLIC_ENV || 'development',
  isProduction: process.env.NEXT_PUBLIC_ENV === 'production',
  
  // Feature flags
  enableMockData: process.env.NEXT_PUBLIC_ENABLE_MOCK_DATA === 'true',
  enableDemoMode: process.env.NEXT_PUBLIC_ENABLE_DEMO_MODE === 'true',
  
  // API settings (if you add backend APIs later)
  // apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api',
};

export default config;