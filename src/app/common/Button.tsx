'use client';

import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '',
  type = 'button'
}: ButtonProps) => {
  const baseClasses = "px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = 
    variant === 'primary' 
      ? "bg-primary text-white hover:bg-opacity-90 focus:ring-primary" 
      : "bg-secondary text-gray-700 hover:bg-opacity-80 focus:ring-secondary";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </motion.button>
  );
};

export default Button;