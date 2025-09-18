'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { projects } from '@/data/projects';

export default function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 2);
  return (
    <section 
      id="projects" 
      className="section-padding bg-gray-800 transition-colors duration-300"
      aria-label="Featured projects section"
    >
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Featured Projects
          </h2>
          <p className="section-subtitle">
            Here are some of the projects I&apos;ve worked on. Each one represents a unique challenge and learning experience.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)"
              }}
              className="card card-hover overflow-hidden cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.currentTarget.style.display = 'none';
                      const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
                      if (placeholder) placeholder.style.display = 'block';
                    }}
                  />
                ) : null}
                <div 
                  className={`text-6xl opacity-20 ${project.image ? 'hidden' : 'block'}`} 
                  aria-hidden="true"
                >
                  🖼️
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Technologies used">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full font-medium"
                      role="listitem"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-700 text-white text-center py-3 px-4 rounded-lg hover:bg-gray-600 transition-colors duration-300 font-medium focus-ring"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-purple-600 text-white text-center py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors duration-300 font-medium focus-ring"
                      aria-label={`View ${project.title} live demo`}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Toggle Projects Button */}
        {projects.length > 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              onClick={() => setShowAllProjects(!showAllProjects)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              aria-label={showAllProjects ? 'Show fewer projects' : 'Show all projects'}
            >
              {showAllProjects ? 'Show Less' : `View All Projects (${projects.length})`}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
