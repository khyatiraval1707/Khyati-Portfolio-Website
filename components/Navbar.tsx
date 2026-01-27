
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Initiatives', href: '#initiatives' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 px-6 sm:px-12 ${isScrolled ? 'pt-4' : 'pt-10'
        }`}
    >
      <div className={`max-w-7xl mx-auto px-8 py-4 flex justify-between items-center transition-all duration-500 rounded-full border border-transparent ${isScrolled ? 'bg-white/80 backdrop-blur-xl border-stone-100 shadow-[0_8px_32px_rgba(0,0,0,0.03)]' : ''
        }`}>
        <motion.a
          href="#"
          className="text-lg font-outfit font-bold tracking-tighter"
          whileHover={{ scale: 1.05 }}
        >
          {PERSONAL_INFO.name.toUpperCase()}
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <div key={link.name} className="relative px-4 py-2 group">
              <a
                href={link.href}
                className="text-[13px] font-semibold text-stone-500 hover:text-stone-900 transition-colors"
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.name}
              </a>
              {hoveredLink === link.name && (
                <motion.div
                  layoutId="nav-glow"
                  className="absolute inset-0 bg-stone-100/50 rounded-full -z-10"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </div>
          ))}
          <div className="pl-4 flex items-center space-x-3">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-stone-900 text-white text-[13px] font-bold rounded-full shadow-lg shadow-stone-200 hover:bg-[#C05621] transition-colors"
            >
              Contact
            </motion.a>

            <motion.a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 bg-stone-100 text-stone-900 rounded-full hover:bg-[#C05621] hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </motion.a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-stone-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-6 right-6 mt-4 bg-white rounded-3xl p-8 flex flex-col space-y-6 md:hidden shadow-2xl border border-stone-100 overflow-hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-outfit font-bold text-stone-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col space-y-4">
              <a
                href="#contact"
                className="text-center px-6 py-4 bg-stone-900 text-white rounded-2xl font-bold hover:bg-[#C05621] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 text-center px-6 py-4 bg-[#0077b5]/10 text-[#0077b5] rounded-2xl font-bold hover:bg-[#C05621] hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Linkedin size={20} />
                <span>LinkdIn</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;