'use client';

import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  icon?: string;
  className?: string;
}

const Card = ({ title, description, icon, className = '' }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className={`bg-accent rounded-xl p-6 shadow-md border border-border ${className}`}
    >
      {icon && (
        <div className="mb-4 flex justify-center">
          <img src={icon} alt={title} className="w-16 h-16" />
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default Card;