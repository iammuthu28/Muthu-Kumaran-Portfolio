import { motion } from 'framer-motion';

export default function Experience() {
  const education = [
    {
      degree: 'M.Sc. Data Analytics',
      institution: 'Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology',
      period: '2023 – 2025',
      grade: 'CGPA: 7.7',
      description: 'Specialized in data analysis, machine learning, and statistical modeling.'
    },
    {
      degree: 'BCA',
      institution: 'Vel Tech Ranga Sanku Arts College Chennai',
      period: '2020 - 2023',
      grade: 'Percentage: 71%',
      description: 'Bachelor of Computer Applications with focus on programming and software development.'
    }
  ];

  const certifications = [
    {
      title: 'IEEE Research Paper Presentation',
      issuer: 'ICCCNT 2025, IIT Indore',
      year: '2025'
    },
    {
      title: 'Principles of Management',
      issuer: 'Professional Certification',
      year: '2024'
    },
    {
      title: 'Business English',
      issuer: 'Language Proficiency',
      year: '2024'
    },
    {
      title: 'E-Business',
      issuer: 'Digital Business Certification',
      year: '2024'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My academic background and professional certifications that shape my expertise.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8 flex items-center gap-3">
              <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">
                🎓
              </span>
              Education
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="relative pl-10 before:absolute before:left-0 before:top-2 before:w-6 before:h-6 before:bg-blue-600 before:rounded-full before:flex before:items-center before:justify-center before:text-white before:text-xs before:content-['✓']"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {edu.period}
                      </span>
                      <span className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full">
                        {edu.grade}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8 flex items-center gap-3">
              <span className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-sm">
                📜
              </span>
              Certifications
            </h3>
            
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="text-sm bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-3 py-1 rounded-full">
                      {cert.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievements */}
            <motion.div
              className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 className="text-xl font-semibold mb-4">Achievements</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-sm">• Published IEEE research paper on blockchain crowdfunding</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sm">• Developed and published Python package - Passguard Assistant</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sm">• Active open-source contributor on GitHub</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sm">• Presented at academic conferences and tech meetups</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}