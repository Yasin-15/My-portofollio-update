import React, { useState, useEffect, useMemo } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import Link from 'next/link';

const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = useMemo(() => [
    'Full Stack Developer',
    'Software Engineer',
    'Web Developer',
    'UI/UX Designer'
  ], []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isDeleting) {
        if (currentCharIndex > 0) {
          setCurrentCharIndex(currentCharIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      } else {
        if (currentCharIndex < texts[currentTextIndex].length) {
          setCurrentCharIndex(currentCharIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentCharIndex, isDeleting, currentTextIndex, texts]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <>
      <Head>
        <title>Yaasiin Dev - Full Stack Developer</title>
        <meta name="description" content="Professional full-stack developer specializing in React, Next.js, and modern web technologies. View my portfolio and projects." />
      </Head>

      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="container-custom max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* Left Side - Profile Image (Large screens) / Bottom (Small screens) */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start order-1 lg:order-1"
            >
              <div className="relative">
                {/* Professional Header Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-600 dark:text-gray-400 shadow-professional border border-gray-200 dark:border-gray-700">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                    Available for opportunities
                  </div>
                </div>

                {/* Profile Image */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 shadow-professional-lg">
                  <Image
                    src="/profile.jpg"
                    alt="Yaasiin Dev"
                    fill
                    sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-600 rounded-full opacity-20"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary-400 rounded-full opacity-20"></div>
              </div>
            </motion.div>

            {/* Right Side - Content (Large screens) / Top (Small screens) */}
            <motion.div
              variants={itemVariants}
              className="text-center lg:text-left order-2 lg:order-2"
            >
              {/* Greeting */}
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 dark:text-gray-400 font-medium mb-4"
              >
                Hello, I&apos;m
              </motion.p>

              {/* Name */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              >
                Yaasiin <span className="text-primary-600 dark:text-primary-400">Dev</span>
              </motion.h1>

              {/* Professional Title */}
              <motion.h2
                variants={itemVariants}
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-8 min-h-[3rem] flex items-center justify-center lg:justify-start"
              >
                <span className="text-primary-600 dark:text-primary-400">
                  {texts[currentTextIndex].substring(0, currentCharIndex)}
                </span>
                <span className="animate-pulse text-primary-600">|</span>
              </motion.h2>

              {/* Professional Description */}
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl lg:max-w-none leading-relaxed"
              >
                Experienced full-stack developer with expertise in modern web technologies. 
                I specialize in building scalable, high-performance applications that drive business value.
              </motion.p>

              {/* Professional Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-6 mb-12 max-w-2xl lg:max-w-none"
              >
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">4+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
              >
                <Link href="/projects">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary text-base px-8 py-3"
                  >
                    View Portfolio
                    <FiArrowRight className="ml-2 w-5 h-5" />
                  </motion.button>
                </Link>
                
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-secondary text-base px-8 py-3"
                  >
                    Contact Me
                  </motion.button>
                </Link>
              </motion.div>

              {/* Professional Social Links */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center lg:justify-start space-x-6"
              >
                <motion.a
                  href="https://github.com/Yaasiin-15"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="social-link p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <FiGithub className="w-6 h-6" />
                </motion.a>
                
                <motion.a
                  href="https://www.linkedin.com/in/yaasiin-mohamuud-3a30622b3"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="social-link p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-6 h-6" />
                </motion.a>
                
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="social-link p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900 transition-all duration-200"
                  aria-label="Twitter"
                >
                  <FiTwitter className="w-6 h-6" />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;