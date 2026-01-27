
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm font-medium tracking-tight text-stone-400 uppercase">
          &copy; {currentYear} {PERSONAL_INFO.name.toUpperCase()}
        </div>

        <div className="flex space-x-8">
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-stone-400 hover:text-stone-900 transition-colors">LinkedIn</a>
        </div>

        <div className="text-xs text-stone-300">
          Built with React & Framer Motion
        </div>
      </div>
    </footer>
  );
};

export default Footer;
