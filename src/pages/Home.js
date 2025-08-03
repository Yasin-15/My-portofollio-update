import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter, FiCode, FiDatabase, FiSmartphone, FiGlobe } from 'react-icons/fi';
import { Link } from 'react-router-dom';
// Import your profile image - replace 'profile.jpg' with your actual image filename
import profileImage from '../assets/profile.jpg';

const Home = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = ['Full Web Stack Developer', 'React Specialist', 'Node.js Expert', 'UI/UX Designer'];
  const currentFullText = texts[currentIndex];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText === currentFullText) {
          setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
        setCurrentText(currentFullText.slice(0, currentText.length + 1));
      } else {
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          return;
        }
        setCurrentText(currentFullText.slice(0, currentText.length - 1));
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentFullText, currentIndex, texts]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: FiCode },
    { number: '3+', label: 'Years Experience', icon: FiDatabase },
    { number: '100%', label: 'Client Satisfaction', icon: FiSmartphone },
    { number: '24/7', label: 'Support Available', icon: FiGlobe },
  ];

  const skills = [
    'React', 'Node.js', 'JavaScript', 'TypeScript', 'Python', 'MongoDB', 'PostgreSQL', 'AWS'
  ];

  return (
    <>
      <Helmet>
        <title>Yaasiin - Full Stack Developer</title>
        <meta name="description" content="Professional full-stack developer specializing in React, Node.js, and modern web technologies. View my portfolio and projects." />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto"
          >
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
              {/* Image Section */}
              <motion.div
                variants={itemVariants}
                className="flex-shrink-0"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="relative"
                >
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-500 dark:border-primary-400 shadow-2xl relative">
                    <img
                      src={profileImage}
                      alt="Yaasiin Mohamuud - Full Stack Developer"
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  {/* Enhanced decorative elements */}
                  <motion.div 
                    className="absolute -top-2 -right-2 w-6 h-6 bg-primary-500 dark:bg-primary-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                  <motion.div 
                    className="absolute -bottom-2 -left-2 w-4 h-4 bg-cyan-500 dark:bg-cyan-400 rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  ></motion.div>
                  {/* Floating elements */}
                  <motion.div 
                    className="absolute top-4 -left-4 w-3 h-3 bg-yellow-400 rounded-full"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  ></motion.div>
                </motion.div>
              </motion.div>

              {/* Text Content Section */}
              <motion.div
                variants={containerVariants}
                className="text-center lg:text-left flex-1"
              >
                {/* Greeting */}
                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-primary-600 dark:text-primary-400 font-medium mb-4"
                >
                  Hello, I'm
                </motion.p>

                {/* Name */}
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
                >
                  Yaasiin <span className="text-cyan-500 dark:text-primary-400">Dev</span>
                </motion.h1>

                {/* Animated Title */}
                <motion.h2
                  variants={itemVariants}
                  className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-8 min-h-[3rem] flex items-center justify-center lg:justify-start"
                >
                  <span className="text-primary-600 dark:text-primary-400">
                    {currentText}
                    <span className="animate-pulse">|</span>
                  </span>
                </motion.h2>

                {/* Description */}
                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed"
                >
                  I build exceptional digital experiences that combine beautiful design with powerful functionality. 
                  Passionate about creating innovative solutions that make a difference in people's lives.
                </motion.p>

                {/* Skill Badges */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start"
                >
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium border border-primary-200 dark:border-primary-700"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
                >
                  <Link to="/projects">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary group"
                    >
                      View My Work
                      <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                  
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-secondary group"
                    >
                      Get In Touch
                    </motion.button>
                  </Link>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  variants={itemVariants}
                  className="flex justify-center lg:justify-start space-x-6"
                >
                  <motion.a
                    href="https://github.com/Yaasiin-15"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="social-link group"
                    aria-label="GitHub"
                  >
                    <FiGithub className="w-6 h-6 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
                  </motion.a>
                  
                  <motion.a
                    href="https://linkedin.com/in/yaasiin-mohamuud"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="social-link group"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin className="w-6 h-6 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>

            {/* Statistics Section */}
            <motion.div
              variants={itemVariants}
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex justify-center mb-3">
                    <stat.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home; 