'use client';

import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
}

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false,
  ariaLabel
}: ButtonProps) => {
  const baseClasses = "px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm sm:text-base";
  
  const variantClasses = 
    variant === 'primary' 
      ? "bg-primary text-white hover:bg-highlight focus:ring-primary shadow-md" 
      : "bg-secondary text-white hover:bg-orange-600 focus:ring-secondary shadow-sm";
      
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <motion.button
      whileHover={disabled ? {} : { 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={disabled ? {} : { 
        scale: 0.95,
        transition: { duration: 0.1 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`${baseClasses} ${variantClasses} ${disabledClasses} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

export default Button;