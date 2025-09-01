import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const projects = [
    { 
      title: "CryptoLink", 
      desc: "A decentralized crypto payment dApp with ERC-20 rewards, QR payments, wallet integration, and subscriptions.",
      tags: ["Blockchain", "React", "Solidity", "Web3"],
      link: "#"
    },
    { 
      title: "Crowdfunding Platform", 
      desc: "Blockchain-based crowdfunding platform with KYC integration and AI-powered fraud detection system.",
      tags: ["Blockchain", "KYC/AML", "AI", "Smart Contracts"],
      link: "#"
    },
    { 
      title: "Supply Chain Tracker", 
      desc: "Blockchain-based system ensuring transparency, automation, and traceability in supply chains.",
      tags: ["Blockchain", "Supply Chain", "Smart Contracts"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <motion.h2 
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            onHoverStart={() => setHoveredProject(i)}
            onHoverEnd={() => setHoveredProject(null)}
          >
            <div className="h-40 bg-gradient-to-r from-blue-500 to-emerald-400 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, j) => (
                  <span 
                    key={j} 
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <motion.a 
                href={project.link}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                whileHover={{ x: 5 }}
              >
                View Project
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </div>
            
            {/* Hover effect overlay */}
            {hoveredProject === i && (
              <motion.div 
                className="absolute inset-0 bg-blue-600/10 border-2 border-blue-500 rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}