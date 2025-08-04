import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { FiDownload, FiCalendar, FiMapPin, FiMail } from 'react-icons/fi';

const About = () => {
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

  const experiences = [
    {
      year: '2023 - Present',
      title: 'Senior Full Stack Developer',
      company: 'Tech Company',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies.',
    },
    {
      year: '2021 - 2023',
      title: 'Full Stack Developer',
      company: 'Startup Inc',
      description: 'Built and maintained multiple web applications, focusing on user experience and performance optimization.',
    },
    {
      year: '2019 - 2021',
      title: 'Frontend Developer',
      company: 'Digital Agency',
      description: 'Developed responsive websites and web applications using modern JavaScript frameworks.',
    },
  ];

  return (
    <>
      <Head>
        <title>About - Yaasiin Dev</title>
        <meta name="description" content="Learn more about Yaasiin Dev, a passionate full-stack developer with expertise in modern web technologies." />
      </Head>

      <div className="section-padding pt-24">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                About Me
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Passionate about creating innovative digital solutions and pushing the boundaries of web technology.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Personal Info */}
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Who I Am
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    I&apos;m a dedicated full-stack developer with over 4 years of experience in creating 
                    exceptional digital experiences. My journey in web development started with a curiosity 
                    about how things work on the internet, which has evolved into a passion for building 
                    innovative solutions.
                  </p>
                  <p>
                    I specialize in modern web technologies including React, Node.js, and cloud platforms. 
                    My approach combines technical expertise with creative problem-solving, ensuring that 
                    every project not only meets functional requirements but also delivers an outstanding user experience.
                  </p>
                  <p>
                    When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source 
                    projects, or sharing knowledge with the developer community. I believe in continuous learning 
                    and staying up-to-date with the latest industry trends.
                  </p>
                </div>

                {/* Personal Details */}
                <div className="mt-8 space-y-3">
                  <div className="flex items-center space-x-3">
                    <FiMapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    <span className="text-gray-600 dark:text-gray-400">Mogadishu, Somalia</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FiMail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    <span className="text-gray-600 dark:text-gray-400">yaasiinmohamed990@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FiCalendar className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    <span className="text-gray-600 dark:text-gray-400">Available for new opportunities</span>
                  </div>
                </div>

                {/* Download CV Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary mt-8"
                >
                  <FiDownload className="mr-2 w-5 h-5" />
                  Download CV
                </motion.button>
              </motion.div>

              {/* Experience Timeline */}
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Experience
                </h2>
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-700"
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
                      <div className="mb-2">
                        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                          {exp.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                        {exp.company}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {exp.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Skills Preview */}
            <motion.div variants={itemVariants} className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                What I Do
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-white dark:bg-dark-800 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Frontend Development
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Creating responsive and interactive user interfaces with modern frameworks and tools.
                  </p>
                </div>
                
                <div className="text-center p-6 bg-white dark:bg-dark-800 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Backend Development
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Building robust APIs and server-side applications with scalable architectures.
                  </p>
                </div>
                
                <div className="text-center p-6 bg-white dark:bg-dark-800 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    DevOps & Deployment
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Managing cloud infrastructure and implementing CI/CD pipelines for seamless deployments.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;