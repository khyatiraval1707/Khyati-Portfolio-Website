
import React from 'react';
import { motion } from 'framer-motion';
import { INITIATIVES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Initiatives: React.FC = () => {
  return (
    <section id="initiatives" className="py-24 scroll-mt-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400">Impact</span>
          <h2 className="text-3xl font-outfit font-semibold mt-4">Selected Initiatives</h2>
        </div>
        <p className="text-stone-500 font-light max-w-sm">Strategic projects focused on enhancing organizational health and employee growth.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {INITIATIVES.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative aspect-square bg-white border border-stone-100 rounded-3xl p-10 flex flex-col justify-between overflow-hidden cursor-default"
          >
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 transition-transform">
              <ArrowUpRight className="text-stone-300 w-8 h-8" />
            </div>

            <div className="mb-6 bg-stone-50 w-fit p-4 rounded-2xl">
              {item.icon}
            </div>

            <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 bg-stone-50 px-3 py-1.5 rounded-full w-fit">
              {item.tag}
            </span>

            <div>
              <h3 className="text-2xl font-outfit font-semibold text-stone-900 mb-4 group-hover:text-stone-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-stone-500 font-light leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-stone-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Initiatives;