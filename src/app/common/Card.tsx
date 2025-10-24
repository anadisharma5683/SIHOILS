'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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
      role="article"
      aria-labelledby={`card-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
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
          <Image 
            src={icon} 
            alt={title} 
            width={64} 
            height={64} 
            className="w-16 h-16"
            aria-hidden="true"
          />
        </motion.div>
      )}
      <motion.h3 
        id={`card-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
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