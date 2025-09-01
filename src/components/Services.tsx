import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      icon: '🔗',
      title: 'Blockchain Development',
      description: 'Smart contracts, dApps, and decentralized solutions built with Solidity, Ethereum, and Web3 technologies.',
      features: ['Smart Contracts', 'dApps', 'DeFi', 'NFTs']
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Data-driven insights and visualizations using Python, SQL, and machine learning algorithms.',
      features: ['Data Visualization', 'Machine Learning', 'Statistical Analysis', 'Business Intelligence']
    },
    {
      icon: '🤖',
      title: 'AI Integration',
      description: 'Artificial intelligence solutions including fraud detection, predictive analytics, and automation.',
      features: ['AI Fraud Detection', 'Predictive Models', 'Process Automation', 'Chatbots']
    },
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Modern web applications built with React, Node.js, and cutting-edge technologies.',
      features: ['React Applications', 'Node.js Backend', 'Responsive Design', 'API Integration']
    },
    {
      icon: '🔒',
      title: 'KYC/AML Solutions',
      description: 'Secure identity verification and anti-money laundering systems for financial applications.',
      features: ['Identity Verification', 'Compliance', 'Risk Assessment', 'Security Protocols']
    },
    {
      icon: '⚡',
      title: 'Technical Consulting',
      description: 'Expert guidance on technology stack, architecture, and implementation strategies.',
      features: ['Tech Stack Advice', 'Architecture Design', 'Code Review', 'Best Practices']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            What I Do
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I offer comprehensive solutions in blockchain development, data analytics, 
            and modern web applications with a focus on innovation and quality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}