import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@/styles/animations.css';
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import { AuthProvider } from "@/contexts/AuthContext";
import ErrorBoundary from "@/components/ErrorBoundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: false, // Disable preloading to prevent unused resource warnings
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: false, // Disable preloading to prevent unused resource warnings
});

export const metadata: Metadata = {
  title: {
    template: '%s | Krishi Shield - Protecting Farmers',
    default: 'Krishi Shield - Protecting Farmers',
  },
  description: "Empowering Indian oilseed farmers with virtual hedging simulations, AI-powered market insights, and blockchain-inspired trust.",
  keywords: ['farming', 'agriculture', 'hedging', 'blockchain', 'market insights', 'oilseeds', 'farmers'],
  authors: [{ name: 'Krishi Shield Team' }],
  creator: 'Krishi Shield',
  publisher: 'Krishi Shield',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://krishishield.com',
    title: 'Krishi Shield - Protecting Farmers',
    description: 'Empowering Indian oilseed farmers with virtual hedging simulations, AI-powered market insights, and blockchain-inspired trust.',
    siteName: 'Krishi Shield',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krishi Shield - Protecting Farmers',
    description: 'Empowering Indian oilseed farmers with virtual hedging simulations, AI-powered market insights, and blockchain-inspired trust.',
  },
  alternates: {
    canonical: 'https://krishishield.com',
  },
  verification: {
    // Add verification codes for search engines if needed
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#4caf50' },
    { media: '(prefers-color-scheme: dark)', color: '#2e7d32' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ErrorBoundary>
          <AuthProvider>
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </AuthProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}