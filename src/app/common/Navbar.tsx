'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Learn', path: '/learn' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-softBG py-4 px-6 shadow-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-primary mb-4 md:mb-0"
        >
          Krishi Shield
        </motion.div>
        
        <motion.ul 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                href={link.path}
                className={`font-medium hover:text-primary transition-colors ${
                  pathname === link.path ? 'text-primary border-b-2 border-primary' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </motion.ul>
      </div>
    </nav>
  );
};

export default Navbar;