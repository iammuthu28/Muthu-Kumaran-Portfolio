import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
      <motion.h2 
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-500 to-emerald-400 rounded-full flex items-center justify-center shadow-xl">
            <div className="w-60 h-60 bg-gray-800 rounded-full flex items-center justify-center text-white text-4xl font-bold">
              SJ
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            I am a passionate <span className="text-blue-600 font-medium">Blockchain Developer</span> and{' '}
            <span className="text-blue-600 font-medium">Data Analyst</span> with hands-on experience in 
            building decentralized applications, smart contracts, and KYC/AML integration.
          </p>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            My research on blockchain-powered crowdfunding with fraud detection was published in IEEE 
            and presented at ICCCNT 2025, IIT Indore. I focus on creating secure, scalable, and innovative 
            solutions that bridge the gap between blockchain technology and practical applications.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300">
              Blockchain Development
            </div>
            <div className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full text-emerald-700 dark:text-emerald-300">
              Data Analytics
            </div>
            <div className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-700 dark:text-purple-300">
              Research
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}