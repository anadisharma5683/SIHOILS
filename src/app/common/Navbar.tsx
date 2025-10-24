'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('user');
    // Use requestAnimationFrame to avoid setState during render
    const frame = requestAnimationFrame(() => {
      setIsLoggedIn(!!userData);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    // Also remove the auth cookie
    document.cookie = 'authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    setIsLoggedIn(false);
    router.push('/login');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Learn', path: '/learn' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-softBG py-4 px-6 shadow-md" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20,
            delay: 0.1
          }}
          className="text-2xl font-bold text-primary mb-4 md:mb-0"
        >
          <Link href="/" aria-label="Krishi Shield Home">
            Krishi Shield
          </Link>
        </motion.div>
        
        <motion.ul 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="flex flex-wrap justify-center gap-6"
          role="menubar"
        >
          {navLinks.map((link) => (
            <motion.li
              key={link.path}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ 
                y: -2,
                transition: { duration: 0.2 }
              }}
              role="none"
            >
              <Link 
                href={link.path}
                className={`font-medium transition-colors duration-300 ${
                  pathname === link.path 
                    ? 'text-highlight border-b-2 border-highlight' 
                    : 'text-gray-600 hover:text-primary'
                }`}
                role="menuitem"
                aria-current={pathname === link.path ? "page" : undefined}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
          
          {isLoggedIn ? (
            <motion.li
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ 
                y: -2,
                transition: { duration: 0.2 }
              }}
              role="none"
            >
              <Link 
                href="/dashboard"
                className={`font-medium transition-colors duration-300 ${
                  pathname === '/dashboard' 
                    ? 'text-highlight border-b-2 border-highlight' 
                    : 'text-gray-600 hover:text-primary'
                }`}
                role="menuitem"
                aria-current={pathname === '/dashboard' ? "page" : undefined}
              >
                Dashboard
              </Link>
            </motion.li>
          ) : (
            <motion.li
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ 
                y: -2,
                transition: { duration: 0.2 }
              }}
              role="none"
            >
              <Link 
                href="/login"
                className={`font-medium transition-colors duration-300 ${
                  pathname === '/login' 
                    ? 'text-highlight border-b-2 border-highlight' 
                    : 'text-gray-600 hover:text-primary'
                }`}
                role="menuitem"
                aria-current={pathname === '/login' ? "page" : undefined}
              >
                Login
              </Link>
            </motion.li>
          )}
        </motion.ul>
      </div>
    </nav>
  );
};

export default Navbar;