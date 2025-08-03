import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FiGithub className="w-5 h-5" />,
      name: 'GitHub',
      url: 'https://github.com/Yaasiin-15',
    },
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yaasiin-mohamuud-3a30622b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ',
    },
    {
      icon: <FiTwitter className="w-5 h-5" />,
      name: 'Twitter',
      url: '#',
    },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h3 className="text-2xl font-bold gradient-text">Yaasiin <span className="text-cyan-500 dark:text-primary-400">Dev</span></h3>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Full-stack developer passionate about creating innovative digital solutions 
              and exceptional user experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="social-link"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h4>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p>yaasiinmohamed990@gmail.com</p>
              <p>+252 (615) 588696</p>
              <p>Mogadishu, Somalia</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Yaasiin Dev. All rights reserved.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center mt-4 md:mt-0">
            Made By <FiHeart className="w-4 h-4 mx-1 text-red-500" /> Yaasiin Dev
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 