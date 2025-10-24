'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-softBG py-4 px-4 sm:px-6 shadow-md" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20,
              delay: 0.1
            }}
            className="text-2xl font-bold text-primary"
          >
            <Link href="/" aria-label="Krishi Shield Home">
              Krishi Shield
            </Link>
          </motion.div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.ul 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden w-full mt-4 space-y-3 pb-4"
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
                  className={`block py-2 font-medium transition-colors duration-300 ${
                    pathname === link.path 
                      ? 'text-highlight border-l-4 border-highlight pl-4' 
                      : 'text-gray-600 hover:text-primary pl-4'
                  }`}
                  role="menuitem"
                  aria-current={pathname === link.path ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
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
                  className={`block py-2 font-medium transition-colors duration-300 ${
                    pathname === '/dashboard' 
                      ? 'text-highlight border-l-4 border-highlight pl-4' 
                      : 'text-gray-600 hover:text-primary pl-4'
                  }`}
                  role="menuitem"
                  aria-current={pathname === '/dashboard' ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
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
                  className={`block py-2 font-medium transition-colors duration-300 ${
                    pathname === '/login' 
                      ? 'text-highlight border-l-4 border-highlight pl-4' 
                      : 'text-gray-600 hover:text-primary pl-4'
                  }`}
                  role="menuitem"
                  aria-current={pathname === '/login' ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              </motion.li>
            )}
          </motion.ul>
        )}
        
        {/* Desktop menu */}
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
          className="hidden md:flex flex-wrap justify-center gap-6"
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