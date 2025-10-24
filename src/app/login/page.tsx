import type { Metadata } from 'next';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../common/Button';
import SectionTitle from '../common/SectionTitle';
import { useAuth } from '@/contexts/AuthContext';

export const metadata: Metadata = {
  title: 'Login - Krishi Shield',
  description: 'Login to your Krishi Shield account to access farming tools, market insights, and price protection features.',
  keywords: 'krishi shield login, farmer login, agriculture platform login, oilseed farming tools',
};

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const router = useRouter();
  const { login, loading } = useAuth();

  const demoCredentials = [
    { email: 'farmer@krishishield.com', password: 'farmer123', name: 'Rajesh Kumar' },
    { email: 'admin@krishishield.com', password: 'admin123', name: 'Admin User' }
  ];

  const validateForm = () => {
    let isValid = true;
    
    // Reset errors
    setEmailError('');
    setPasswordError('');
    setError('');
    
    // Validate email
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    }
    
    // Validate password
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      isValid = false;
    }
    
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setSuccess(false);
    const loginSuccess = await login(email, password);

    if (loginSuccess) {
      setSuccess(true);
      // Redirect after a short delay to show success message
      setTimeout(() => {
        router.push('/dashboard');
      }, 1000);
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleDemoLogin = (email: string, password: string) => {
    setEmail(email);
    setPassword(password);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) setEmailError('');
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (passwordError) setPasswordError('');
  };

  return (
    <div className="min-h-screen bg-softBG py-8 sm:py-12 px-4">
      <div className="container mx-auto max-w-md">
        <SectionTitle 
          title="Welcome to Krishi Shield" 
          subtitle="Login to access your farming dashboard"
        />
        
        <div className="bg-white rounded-xl p-6 shadow-lg border border-border">
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm" role="alert" aria-live="assertive">
              {error}
            </div>
          )}
          
          {success && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm" role="alert" aria-live="polite">
              Login successful! Redirecting to dashboard...
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4" aria-label="Login form">
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2 text-sm">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 text-sm ${
                  emailError ? 'border-red-500 focus:ring-red-500' : 'border-border focus:ring-primary'
                }`}
                placeholder="your.email@example.com"
                required
                aria-invalid={!!emailError}
                aria-describedby={emailError ? "email-error" : undefined}
              />
              {emailError && (
                <p id="email-error" className="text-red-500 text-xs mt-1" role="alert">
                  {emailError}
                </p>
              )}
            </div>
            
            <div>
              <label htmlFor="password" className="block text-gray-700 mb-2 text-sm">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 text-sm ${
                  passwordError ? 'border-red-500 focus:ring-red-500' : 'border-border focus:ring-primary'
                }`}
                placeholder="••••••••"
                required
                aria-invalid={!!passwordError}
                aria-describedby={passwordError ? "password-error" : undefined}
              />
              {passwordError && (
                <p id="password-error" className="text-red-500 text-xs mt-1" role="alert">
                  {passwordError}
                </p>
              )}
            </div>
            
            <div className="pt-4">
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </Button>
            </div>
          </form>
          
          <div className="mt-6 pt-6 border-t border-border">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Demo Credentials</h3>
            <div className="space-y-3">
              {demoCredentials.map((cred, index) => (
                <div 
                  key={index}
                  className="p-3 bg-accent rounded-lg cursor-pointer hover:bg-secondary transition-colors"
                  onClick={() => handleDemoLogin(cred.email, cred.password)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleDemoLogin(cred.email, cred.password);
                    }
                  }}
                  role="button"
                  aria-label={`Use demo credentials for ${cred.name}`}
                >
                  <p className="font-medium text-gray-800 text-sm">{cred.name}</p>
                  <p className="text-gray-600 text-xs">Email: {cred.email}</p>
                  <p className="text-gray-600 text-xs">Password: {cred.password}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Don&apos;t have an account?{' '}
              <button 
                className="text-primary font-medium hover:underline focus:outline-none"
                onClick={() => alert('Registration is not implemented in this demo.')}
                aria-label="Register for an account"
              >
                Register
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}