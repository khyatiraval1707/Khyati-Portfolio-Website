import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { INITIATIVES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const SpotlightCard: React.FC<{ item: any, index: number }> = ({ item, index }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
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

      <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 transition-transform z-20">
        <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 bg-stone-50 px-3 py-1.5 rounded-full w-fit">
          {item.tag}
        </span>
      </div>

      <div className="relative z-10">
        <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-900 mb-8 group-hover:scale-150 transition-transform duration-500">
          <span className="group-hover:text-[#C05621] transition-colors">{item.icon}</span>
        </div>

        <div>
          <h3 className="text-2xl font-outfit font-semibold text-stone-900 mb-4 group-hover:text-[#C05621] transition-colors">
            {item.title}
          </h3>
          <p className="text-stone-500 font-light leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Initiatives: React.FC = () => {
  return (
    <section id="initiatives" className="py-12 scroll-mt-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400">Impact</span>
          <h2 className="text-3xl font-outfit font-semibold mt-4">Selected Initiatives</h2>
        </div>
        <p className="text-stone-500 font-light max-w-sm">Strategic projects focused on enhancing organizational health and employee growth.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {INITIATIVES.map((item, idx) => (
          <SpotlightCard key={item.title} item={item} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default Initiatives;