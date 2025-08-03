import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Figma', level: 80 },
        { name: 'Next.js', level: 80 },
        { name: 'Bootstrap', level: 80 }
      ],
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'Python', level: 75 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'C#', level: 80 },
        { name: 'Java', level: 80 },

        { name: 'MongoDB', level: 75 },
        { name: 'REST APIs', level: 90 },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: '🚀',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'CI/CD', level: 80 },
        { name: 'Linux', level: 75 },
        { name: 'Nginx', level: 70 },
      ],
    },
    {
      title: 'Other Skills',
      icon: '🛠️',
      skills: [
        { name: 'GraphQL', level: 75 },
        { name: 'Redux', level: 85 },
        { name: 'Testing (Jest)', level: 80 },
        { name: 'Webpack', level: 70 },
        { name: 'Figma', level: 65 },
        { name: 'Agile/Scrum', level: 85 },
      ],
    },
  ];

  const technologies = [
    'React', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'MongoDB',
    'AWS', 'Docker', 'Git', 'Tailwind CSS', 'Next.js', 'GraphQL',
    'Redux', 'Jest', 'Express.js', 'Figma', 'Nginx', 'Linux'
  ];

  return (
    <>
      <Helmet>
        <title>Skills - Your Name</title>
        <meta name="description" content="Explore my technical skills and expertise in frontend, backend, and DevOps technologies." />
      </Helmet>

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
                Skills & Expertise
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                A comprehensive overview of my technical skills and the technologies I work with.
              </p>
            </motion.div>

            {/* Skill Categories */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  variants={itemVariants}
                  className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-md"
                >
                  <div className="flex items-center mb-6">
                    <span className="text-3xl mr-3">{category.icon}</span>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h2>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-sm text-primary-600 dark:text-primary-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Technologies Grid */}
            <motion.div variants={itemVariants} className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Technologies I Work With
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white dark:bg-dark-800 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Additional Skills */}
            <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white dark:bg-dark-800 rounded-xl shadow-md">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Problem Solving
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Strong analytical skills and ability to break down complex problems into manageable solutions.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white dark:bg-dark-800 rounded-xl shadow-md">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Team Collaboration
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Experience working in agile teams and collaborating with designers, product managers, and other developers.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white dark:bg-dark-800 rounded-xl shadow-md">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Continuous Learning
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Passionate about staying updated with the latest technologies and best practices in web development.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Skills; 