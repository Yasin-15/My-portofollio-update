import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi';

const Projects = () => {
  const [filter, setFilter] = useState('all');

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

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, payment integration, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      category: 'fullstack',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      github: 'https://github.com/Yaasiin-15/ecommerce-platform',
      live: 'https://ecommerce-demo.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      category: 'frontend',
      tech: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/Yaasiin-15/task-manager',
      live: 'https://task-manager-demo.com',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application that displays current weather conditions, forecasts, and interactive maps with location-based services.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      category: 'frontend',
      tech: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation API'],
      github: 'https://github.com/Yaasiin-15/weather-app',
      live: 'https://weather-dashboard.com',
      featured: false,
    },
    {
      id: 4,
      title: 'Blog CMS',
      description: 'A content management system for blogs with rich text editing, SEO optimization, and analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      category: 'fullstack',
      tech: ['Next.js', 'PostgreSQL', 'Prisma', 'AWS S3', 'Vercel'],
      github: 'https://github.com/Yaasiin-15/blog-cms',
      live: 'https://blog-cms-demo.com',
      featured: false,
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with dark mode, animations, and SEO optimization.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8b6a40?w=600&h=400&fit=crop',
      category: 'frontend',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'React Router'],
      github: 'https://github.com/Yaasiin-15/portfolio',
      live: 'https://your-portfolio.com',
      featured: false,
    },
    {
      id: 6,
      title: 'API Gateway',
      description: 'A microservices API gateway with authentication, rate limiting, and request/response transformation.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      category: 'backend',
      tech: ['Node.js', 'Express', 'Redis', 'Docker', 'JWT'],
      github: 'https://github.com/Yaasiin-15/api-gateway',
      live: 'https://api-gateway-docs.com',
      featured: false,
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <>
      <Head>
        <title>Projects - Yaasiin Dev</title>
        <meta name="description" content="Explore my latest projects showcasing web development skills and innovative solutions." />
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
                My Projects
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                A collection of projects that showcase my skills and passion for creating innovative digital solutions.
              </p>
            </motion.div>

            {/* Filter Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    filter === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="wait">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="project-card group"
                  >
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <div className="relative w-full h-48">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      {project.featured && (
                        <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                          Featured
                        </div>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, index) => (
                          <span
                            key={index}
                            className="skill-badge"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Project Links */}
                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                        >
                          <FiGithub className="w-5 h-5 mr-2" />
                          Code
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                        >
                          <FiExternalLink className="w-5 h-5 mr-2" />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Call to Action */}
            <motion.div variants={itemVariants} className="text-center mt-16">
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Interested in working together? Let&apos;s discuss your project!
              </p>
              <a
                href="/contact"
                className="btn-primary"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Projects;