'use client';

import { motion } from 'framer-motion';
import { companyExperiences } from '@/data/experience';

export default function Experience() {
  return (
    <section 
      id="experience" 
      className="section-padding bg-gray-900 transition-colors duration-300"
      aria-label="Work experience section"
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
            Work Experience
          </h2>
          <p className="section-subtitle">
            My professional journey in software development, from frontend specialist to full-stack developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-700" aria-hidden="true"></div>

          <div className="space-y-12" role="list" aria-label="Work experience timeline">
            {companyExperiences.map((company, index) => (
              <motion.article
                key={company.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
                role="listitem"
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-gray-800 shadow-lg z-10" aria-hidden="true"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 ${
                  index % 2 === 0 
                    ? 'md:w-5/12 md:pr-8' 
                    : 'md:w-5/12 md:ml-auto md:pl-8'
                }`}>
                  <div className="card p-6 text-left">
                    {/* Company header */}
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-white">
                        {company.company}
                      </h3>
                      <div className="flex items-center gap-2 text-purple-400 font-medium justify-start">
                        <span>{company.location}</span>
                        {company.companyUrl && (
                          <a
                            href={company.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple-300 transition-colors focus-ring"
                            aria-label={`Visit ${company.company} website`}
                          >
                            ↗
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Roles under the company */}
                    <div className="space-y-6">
                      {company.roles.map((role, roleIndex) => (
                        <div key={`${role.position}-${role.startDate}-${roleIndex}`} className="border-t border-gray-700 pt-4">
                          {/* Current badge */}
                          {role.current && (
                            <div className="inline-block bg-green-900/30 text-green-300 text-xs font-medium px-3 py-1 rounded-full mb-2">
                              Current Position
                            </div>
                          )}

                          {/* Role title */}
                          <div className="font-semibold text-white">
                            {role.position}
                          </div>

                          {/* Duration */}
                          <div className="text-sm text-gray-400 mb-2">
                            📅 {new Date(role.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })} - {role.current ? 'Present' : new Date(role.endDate!).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                          </div>

                          {/* Description */}
                          <p className="text-gray-300 mb-3 leading-relaxed">
                            {role.description}
                          </p>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2 mb-3 justify-start" role="list" aria-label="Technologies used">
                            {role.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full"
                                role="listitem"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Achievements */}
                          <div className="text-left">
                            <h4 className="font-semibold text-white mb-2">Key Achievements:</h4>
                            <ul className="space-y-1 text-sm text-gray-400" role="list" aria-label="Key achievements">
                              {role.achievements.map((achievement, achievementIndex) => (
                                <li key={achievementIndex} className="flex items-start gap-2" role="listitem">
                                  <span className="text-purple-500 mt-1 flex-shrink-0">•</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
