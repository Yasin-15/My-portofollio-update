import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const phoneNumber = '252615588696'; // Your WhatsApp number
  const defaultMessage = 'Hello Yaasiin! I found your portfolio and would like to connect.';

  const handleSendMessage = () => {
    const finalMessage = message.trim() || defaultMessage;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  const quickMessages = [
    "Hi! I'd like to discuss a project with you.",
    "Hello! I'm interested in your services.",
    "Hi Yaasiin! Let's talk about a collaboration.",
    "Hello! I have a question about your work.",
  ];

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-200"
          aria-label="Open WhatsApp chat"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaTimes className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="whatsapp"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaWhatsapp className="w-7 h-7" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Pulse animation */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 bg-green-500 rounded-full -z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </motion.div>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 w-80 bg-white dark:bg-dark-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-40 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-green-500 text-white p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <FaWhatsapp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Yaasiin Mohamed</h3>
                  <p className="text-sm opacity-90">Typically replies instantly</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="mb-4">
                <div className="bg-gray-100 dark:bg-dark-700 rounded-lg p-3 mb-3">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    👋 Hi there! How can I help you today?
                  </p>
                </div>
              </div>

              {/* Quick Messages */}
              <div className="mb-4">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                  Quick Messages
                </p>
                <div className="space-y-2">
                  {quickMessages.map((msg, index) => (
                    <button
                      key={index}
                      onClick={() => setMessage(msg)}
                      className="w-full text-left p-2 text-sm bg-gray-50 dark:bg-dark-700 hover:bg-gray-100 dark:hover:bg-dark-600 rounded-lg transition-colors duration-200 text-gray-700 dark:text-gray-300"
                    >
                      {msg}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Message */}
              <div className="mb-4">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white text-sm resize-none"
                  rows={3}
                />
              </div>

              {/* Send Button */}
              <motion.button
                onClick={handleSendMessage}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </div>

            {/* Footer */}
            <div className="px-4 pb-4">
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                You'll be redirected to WhatsApp
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppFloat;