import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = ({ 
  message = "Hello Yaasiin! I found your portfolio and would like to connect.",
  className = "",
  size = "md",
  variant = "primary"
}) => {
  const phoneNumber = '252684447931';
  
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variantClasses = {
    primary: "bg-green-500 hover:bg-green-600 text-white",
    outline: "border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white",
    ghost: "text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20"
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        inline-flex items-center justify-center space-x-2 rounded-lg font-medium 
        transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
        ${sizeClasses[size]} ${variantClasses[variant]} ${className}
      `}
    >
      <FaWhatsapp className="w-5 h-5" />
      <span>WhatsApp</span>
    </motion.button>
  );
};

export default WhatsAppButton;