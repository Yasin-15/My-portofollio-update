import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12 border-4 border-primary-200 dark:border-primary-700 border-t-primary-600 dark:border-t-primary-400 rounded-full"
      />
    </div>
  );
};

export default LoadingSpinner; 