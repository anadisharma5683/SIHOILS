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
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.03, boxShadow: "0 4px 24px 0 rgba(37,99,235,0.08)" }}
      whileTap={{ scale: 0.97 }}
      className={`bg-softBG border border-border rounded-2xl shadow-md px-4 py-5 sm:px-6 sm:py-6 flex flex-col items-center gap-3 sm:gap-6 min-w-0 w-full max-w-xs mx-auto focus-within:ring-2 focus-within:ring-primary transition-all duration-300 ${className}`}
      role="article"
      aria-labelledby={`card-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
      tabIndex={0}
    >
      {icon && (
        <motion.div 
          className="mb-2 sm:mb-3 flex justify-center items-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent/10"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.15 }}
        >
          <Image 
            src={icon} 
            alt={title + ' icon'} 
            width={56} 
            height={56} 
            className="w-10 h-10 sm:w-14 sm:h-14 object-contain"
            aria-hidden="true"
            priority
          />
        </motion.div>
      )}
      <motion.h3 
        id={`card-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
        className="text-base sm:text-lg font-bold text-primary text-center mb-1 sm:mb-2 leading-tight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.22 }}
      >
        {title}
      </motion.h3>
      <motion.p 
        className="text-textSecondary text-xs sm:text-sm text-center mb-1 sm:mb-2 leading-normal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.28 }}
      >
        {description}
      </motion.p>
      {children && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Card;