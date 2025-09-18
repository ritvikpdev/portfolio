'use client';

import { motion } from 'framer-motion';
import { education, certifications } from '@/data/education';

export default function Education() {
  return (
    <section 
      id="education" 
      className="section-padding bg-gray-800 transition-colors duration-300"
      aria-label="Education and certifications section"
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
            Education & Certifications
          </h2>
          <p className="section-subtitle">
            My academic background and professional certifications that have shaped my career.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Academic Background
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" role="list" aria-label="Education history">
            {education.map((edu, index) => (
              <motion.article
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
                }}
                className="card card-hover p-6 cursor-pointer"
                role="listitem"
              >
                {/* Institution Header */}
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-white mb-2">
                    {edu.institution}
                  </h4>
                  {edu.institutionUrl && (
                    <a
                      href={edu.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 text-sm font-medium inline-flex items-center gap-1 focus-ring"
                      aria-label={`Visit ${edu.institution} website`}
                    >
                      Visit Website ↗
                    </a>
                  )}
                </div>

                {/* Degree Info */}
                <div className="mb-4">
                  <div className="text-lg font-semibold text-gray-200 mb-1">
                    {edu.degree} in {edu.field}
                  </div>
                  <div className="text-sm text-gray-400">
                    📅 {new Date(edu.startDate).getFullYear()} - {new Date(edu.endDate).getFullYear()}
                  </div>
                  <div className="text-sm text-gray-400">
                    📍 {edu.location}
                  </div>
                </div>

                {/* GPA */}
                {edu.gpa && (
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-2 bg-green-900/30 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                      🎯 GPA: {edu.gpa}
                    </div>
                  </div>
                )}

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {edu.description}
                </p>

                {/* Highlights */}
                <div>
                  <h5 className="font-semibold text-white mb-3">Key Highlights:</h5>
                  <ul className="space-y-2" role="list" aria-label="Key achievements">
                    {edu.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-2 text-sm text-gray-400" role="listitem">
                        <span className="text-purple-500 mt-1 flex-shrink-0">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-6 text-center"
          >
            Professional Certifications
          </motion.h3>

          {/* Inspirational Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-gray-400">
              Always learning and expanding my skills through continuous education.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Professional certifications">
            {certifications.map((cert, index) => (
              <motion.article
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 20px rgba(168, 85, 247, 0.2)"
                }}
                className="card card-hover p-6 cursor-pointer"
                role="listitem"
                onClick={() => cert.certificateUrl && window.open(cert.certificateUrl, '_blank')}
              >
                {/* Certification Header */}
                <div className="mb-4">
                  <h4 className="text-lg font-bold text-white mb-2">
                    {cert.name}
                  </h4>
                  <div className="text-sm text-purple-400 font-medium">
                    {cert.issuer}
                  </div>
                </div>

                {/* Dates */}
                <div className="mb-4">
                  <div className="text-sm text-gray-400">
                    📅 Issued: {new Date(cert.issueDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long' 
                    })}
                  </div>
                  {cert.expiryDate && (
                    <div className="text-sm text-gray-400">
                      ⏰ Expires: {new Date(cert.expiryDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long' 
                      })}
                    </div>
                  )}
                </div>

                {/* Credential ID */}
                {cert.credentialId && (
                  <div className="mb-4">
                    <div 
                      className="text-xs text-gray-400 font-mono bg-gray-700 px-2 py-1 rounded cursor-help"
                      title={cert.credentialId}
                    >
                      ID: {cert.credentialId.length > 10 ? `${cert.credentialId.substring(0, 10)}...` : cert.credentialId}
                    </div>
                  </div>
                )}

                {/* Certificate and Issuer Links */}
                <div className="space-y-2">
                  {cert.certificateUrl && (
                    <div className="inline-flex items-center gap-2 text-green-400 text-sm font-medium">
                      🏆 Click card to view certificate
                    </div>
                  )}
                  {cert.issuerUrl && (
                    <div>
                      <a
                        href={cert.issuerUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors focus-ring"
                        aria-label={`Visit ${cert.issuer} website`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Visit Issuer ↗
                      </a>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>


        </div>


      </div>
    </section>
  );
}
