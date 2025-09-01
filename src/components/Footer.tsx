import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">Sathish J</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Blockchain Developer & Data Analyst creating innovative solutions for the digital world.
            </p>
          </motion.div>

          <div className="flex justify-center gap-6 mb-8">
            {[
              { href: "mailto:jsathish587@gmail.com", icon: "📧", label: "Email" },
              { href: "https://www.linkedin.com/in/sathish-j-b70b2a28b", icon: "💼", label: "LinkedIn" },
              { href: "https://github.com/sathishkevinmitnick", icon: "🐙", label: "GitHub" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl">{social.icon}</span>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border-t border-gray-800 pt-8"
          >
            <p className="text-gray-400">
              © {currentYear} Sathish J. All rights reserved. | Built with React & Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}