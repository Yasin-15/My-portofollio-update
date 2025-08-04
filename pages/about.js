import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { FiDownload, FiCalendar, FiMapPin, FiMail, FiAward } from 'react-icons/fi';

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');

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
      company: 'Self Development',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB'],
    },
    {
      year: '2025 - 2025',
      title: 'Full Stack Developer Hospital Management System',
      company: 'Defence Final Project',
      description: 'Built and maintained multiple web applications, focusing on user experience and performance optimization. Collaborated with cross-functional teams.',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'Docker', 'Java','Spring Boot'],
    },
    {
      year: '2019 - 2021',
      title: 'Frontend Developer',
      company: 'Creative Web Agency',
      description: 'Developed responsive websites and web applications using modern JavaScript frameworks. Worked closely with designers to implement pixel-perfect designs.',
      technologies: ['JavaScript', 'React', 'CSS3', 'HTML5', 'Figma'],
    },
  ];

  const education = [
    {
      year: '2022 - 2026',
      degree: 'Bachelor of Computer Science',
      institution: 'Jamhuuriya University of Science and Technology',
      description: 'Specialized in Computer Application.',
      gpa: 'B+',
    },
    {
      year: '2018 - 2022',
      degree: 'High School Diploma',
      institution: 'Karaama Primary and Secondary School',
      description: 'Graduated',
      gpa: 'B+',
    },
  ];

  const skills = [
    { name: 'React', percentage: 95 },
    { name: 'Node.js', percentage: 90 },
    { name: 'JavaScript', percentage: 95 },
    { name: 'TypeScript', percentage: 85 },
    { name: 'Express.js', percentage: 80 },
    { name: 'Tailwind CSS', percentage: 80 },
    { name: 'Bootstrap', percentage: 80 },
    { name: 'Git', percentage: 80 },
    { name: 'GitHub', percentage: 80 },
    { name: 'Figma', percentage: 80 },
    { name: 'Adobe Photoshop', percentage: 80 },
    { name: 'Adobe Illustrator', percentage: 80 },
    { name: 'C#', percentage: 80 },
    { name: 'Java', percentage: 80 },
    { name: 'Python', percentage: 80 },
    { name: 'MongoDB', percentage: 85 },
    { name: 'PostgreSQL', percentage: 80 },
    { name: 'AWS', percentage: 75 },
  ];

  const achievements = [
    {
      icon: FiAward,
      title: 'Best Developer Award',
      description: 'Recognized for outstanding contributions to open-source projects',
      year: '2024',
    },
    {
      icon: FiAward,
      title: '10+ Projects Completed',
      description: 'Successfully delivered projects for clients worldwide',
      year: '2024',
    },
    {
      icon: FiAward,
      title: '100+ GitHub Stars',
      description: 'Open-source contributions and community recognition',
      year: '2024',
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
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                About Me
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Passionate about creating innovative digital solutions and pushing the boundaries of web technology.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Who I Am
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    I'm a dedicated full-stack developer with over 4 years of experience in creating 
                    exceptional digital experiences. My journey in web development started with a curiosity 
                    about how things work on the internet, which has evolved into a passion for building 
                    innovative solutions that make a real impact.
                  </p>
                  <p>
                    I specialize in modern web technologies including React, Node.js, and cloud platforms. 
                    My approach combines technical expertise with creative problem-solving, ensuring that 
                    every project not only meets functional requirements but also delivers an outstanding user experience.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                    projects, or sharing knowledge with the developer community. I believe in continuous learning 
                    and staying up-to-date with the latest industry trends.
                  </p>
                </div>

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

                <div className="mt-8 space-y-4">
                  <motion.a
                    href="https://drive.google.com/file/d/1EwbOVC9FERRxF8n-mIhVjiElwdKupK57/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary group inline-flex items-center"
                  >
                    <FiDownload className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                    Download CV (Google Drive)
                  </motion.a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="flex space-x-4 mb-6">
                  <button
                    onClick={() => setActiveTab('experience')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      activeTab === 'experience'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    Experience
                  </button>
                  <button
                    onClick={() => setActiveTab('education')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      activeTab === 'education'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    Education
                  </button>
                </div>

                {activeTab === 'experience' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Professional Experience
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
                          <p className="text-gray-600 dark:text-gray-400 mb-3">
                            {exp.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'education' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Education
                    </h2>
                    <div className="space-y-8">
                      {education.map((edu, index) => (
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
                              {edu.year}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                            {edu.institution}
                          </p>
                          <p className="text-gray-600 dark:text-gray-400 mb-2">
                            {edu.description}
                          </p>
                          <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                            GPA: {edu.gpa}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Technical Skills
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                      <span className="text-sm text-primary-600 dark:text-primary-400">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-primary-600 dark:bg-primary-400 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Achievements & Recognition
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      {achievement.description}
                    </p>
                    <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                      {achievement.year}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;