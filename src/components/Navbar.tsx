import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 shadow-lg backdrop-blur-md py-3'
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          <span className="text-xl font-bold text-gray-800 dark:text-white">
            Sathish<span className="text-blue-600">.</span>
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={800}
              offset={-100}
              spy={true}
              className={`relative cursor-pointer font-medium transition-all duration-300 group ${
                activeSection === link.id
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
              onSetActive={() => setActiveSection(link.id)}
            >
              {link.label}
              <motion.div
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full ${
                  activeSection === link.id ? 'w-full' : ''
                }`}
                layoutId="nav-underline"
              />
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <motion.a
          href="#contact"
          className="hidden md:block px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Talk
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="text-2xl">{isMobileMenuOpen ? "✕" : "☰"}</span>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden bg-white dark:bg-gray-900 shadow-xl ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-6 py-4 space-y-4">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={800}
              offset={-100}
              spy={true}
              className={`block py-3 font-medium transition-all duration-300 ${
                activeSection === link.id
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
              onClick={() => {
                setActiveSection(link.id);
                setIsMobileMenuOpen(false);
              }}
              onSetActive={() => setActiveSection(link.id)}
            >
              {link.label}
            </Link>
          ))}
          <motion.a
            href="#contact"
            className="block w-full py-3 bg-blue-600 text-white text-center rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Let's Talk
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  );
}