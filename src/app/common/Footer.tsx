'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-softBG py-8 px-6 border-t border-border">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-gray-600 mb-2">
            &copy; {new Date().getFullYear()} Krishi Shield. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Empowering Indian oilseed farmers with innovative financial tools
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;