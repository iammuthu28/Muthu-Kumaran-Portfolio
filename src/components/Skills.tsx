import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: "Blockchain",
      skills: ["Solidity", "Ethereum", "Smart Contracts", "dApps", "ERC-20", "Web3.js", "Ethers.js"]
    },
    {
      title: "Programming",
      skills: ["Python", "JavaScript", "TypeScript", "SQL", "React", "Node.js"]
    },
    {
      title: "Data Analytics",
      skills: ["Data Cleaning", "Data Visualization", "Statistical Analysis", "Machine Learning", "Deep Learning"]
    },
    {
      title: "Tools & Others",
      skills: ["AWS", "Git", "Docker", "Digital Marketing", "Problem Solving", "Technical Blogging"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
      <motion.h2 
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, i) => (
          <motion.div 
            key={i}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-600">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, j) => (
                <motion.span
                  key={j}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium shadow-sm"
                  whileHover={{ scale: 1.05, backgroundColor: "#3b82f6", color: "#fff" }}
                  transition={{ duration: 0.2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}