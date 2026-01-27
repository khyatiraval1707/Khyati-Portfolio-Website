
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SERVICES, SKILLS } from '../constants';

// Fixed: Added React.FC type to handle standard React props like 'key' correctly
const SpotlightCard: React.FC<{ service: any, index: number }> = ({ service, index }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-10 bg-white border border-stone-100 rounded-[2.5rem] overflow-hidden group"
    >
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(45,42,38,0.03), transparent 40%)`
        }}
      />
      
      <div className="relative z-10">
        <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-900 mb-8 group-hover:scale-110 transition-transform duration-500">
          {service.icon}
        </div>
        <h3 className="text-2xl font-outfit font-semibold mb-4 text-stone-900">{service.title}</h3>
        <p className="text-stone-500 font-light text-base leading-relaxed">{service.description}</p>
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 scroll-mt-32">
      <div className="max-w-4xl mb-20">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400"
        >
          Capabilities
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-outfit font-bold mt-4 leading-tight"
        >
          A comprehensive approach to <br />
          <span className="text-stone-400">People & Culture.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <SpotlightCard key={service.title} service={service} index={index} />
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-24 flex flex-wrap gap-4 justify-center"
      >
        {SKILLS.map((skill, idx) => (
          <motion.span 
            key={skill.name}
            whileHover={{ y: -3, backgroundColor: '#1a1a1a', color: '#fff' }}
            className="px-6 py-3 bg-white border border-stone-100 text-stone-600 rounded-full text-sm font-medium transition-all shadow-sm cursor-default"
          >
            {skill.name}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;