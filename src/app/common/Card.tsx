'use client';

import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  icon?: string;
  className?: string;
  children?: React.ReactNode;
}

const Card = ({ title, description, icon, className = '', children }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
      className={`bg-neutral rounded-xl p-6 shadow-lg border border-border ${className}`}
    >
      {icon && (
        <motion.div 
          className="mb-4 flex justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: 0.2
          }}
        >
          <img src={icon} alt={title} className="w-16 h-16" />
        </motion.div>
      )}
      <motion.h3 
        className="text-xl font-semibold text-gray-800 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {title}
      </motion.h3>
      <motion.p 
        className="text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {description}
      </motion.p>
      {children && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Card;