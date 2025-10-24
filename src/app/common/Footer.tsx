'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-softBG py-8 px-6 border-t border-border">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6,
            ease: "easeOut"
          }}
          className="text-center"
        >
          <motion.p 
            className="text-gray-600 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            © 2025 Krishi Shield. All rights reserved.
          </motion.p>
          <motion.p 
            className="text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Empowering Indian oilseed farmers with innovative financial tools
          </motion.p>
          
          <motion.div 
            className="mt-6 flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white cursor-pointer"
                whileHover={{ 
                  y: -5,
                  backgroundColor: "#2e7d32",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;