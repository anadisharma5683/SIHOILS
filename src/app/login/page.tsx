'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../common/Button';
import SectionTitle from '../common/SectionTitle';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const demoCredentials = [
    { email: 'farmer@krishishield.com', password: 'farmer123', name: 'Rajesh Kumar' },
    { email: 'admin@krishishield.com', password: 'admin123', name: 'Admin User' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      const user = demoCredentials.find(
        cred => cred.email === email && cred.password === password
      );

      if (user) {
        // Store user info in localStorage (for demo purposes only)
        const userInfo = { 
          name: user.name, 
          email: user.email,
          role: user.email === 'admin@krishishield.com' ? 'admin' : 'farmer'
        };
        
        localStorage.setItem('user', JSON.stringify(userInfo));
        
        // Also set a cookie for middleware authentication
        document.cookie = `authToken=${btoa(JSON.stringify(userInfo))}; path=/; max-age=86400`;
        
        router.push('/dashboard');
      } else {
        setError('Invalid credentials. Please try again.');
      }
      setLoading(false);
    }, 1000);
  };

  const handleDemoLogin = (email: string, password: string) => {
    setEmail(email);
    setPassword(password);
  };

  return (
    <div className="min-h-screen bg-softBG py-12 px-4">
      <div className="container mx-auto max-w-md">
        <SectionTitle 
          title="Welcome to Krishi Shield" 
          subtitle="Login to access your farming dashboard"
        />
        
        <div className="bg-white rounded-xl p-6 shadow-lg border border-border">
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="••••••••"
                required
              />
            </div>
            
            <div className="pt-4">
              <Button type="submit" className="w-full">
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
                >
                  <p className="font-medium text-gray-800">{cred.name}</p>
                  <p className="text-sm text-gray-600">Email: {cred.email}</p>
                  <p className="text-sm text-gray-600">Password: {cred.password}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <button 
                className="text-primary font-medium hover:underline focus:outline-none"
                onClick={() => alert('Registration is not implemented in this demo.')}
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