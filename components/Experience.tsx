
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { EXPERIENCE, EDUCATION } from '../constants';

const Experience: React.FC = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-16 scroll-mt-32" ref={containerRef}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400 hover:text-[#C05621] transition-colors">Career Path</span>
          <h2 className="text-4xl font-outfit font-bold mt-4 mb-8">Professional Journey</h2>
          <p className="text-stone-500 font-light leading-relaxed">
            Consistently delivering value through human-centric strategies and operational excellence across various IT organizations.
          </p>

          <div className="mt-12 p-8 bg-stone-900 rounded-[2rem] text-white">
            <h4 className="text-lg font-outfit font-medium mb-4">Core Philosophy</h4>
            <p className="text-stone-400 text-sm font-light italic">
              "Recruitment is more than filling roles; it's about architectural growth through the right cultural fit."
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 relative">
          {/* Animated path line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-0 top-0 w-[2px] h-full bg-black origin-top hidden md:block"
          />
          <div className="absolute left-0 top-0 w-[2px] h-full bg-stone-100 -z-10 hidden md:block" />

          <div className="space-y-20">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div
                key={exp.company + idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="relative md:pl-12"
              >
                {/* Timeline node */}
                <div className="hidden md:block absolute left-[-6px] top-0 w-3 h-3 bg-stone-900 rounded-full border-4 border-[#faf9f6]" />

                <div className="flex flex-col mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2 hover:text-[#C05621] transition-colors">{exp.period}</span>
                  <h3 className="text-3xl font-outfit font-bold text-stone-900">{exp.role}</h3>
                  <div className="flex items-center text-stone-500 mt-1 font-medium">
                    <span className="text-lg hover:text-[#C05621] transition-colors">{exp.company}</span>
                    <span className="mx-3 w-1 h-1 bg-stone-300 rounded-full"></span>
                    <span className="text-sm font-normal">{exp.location}</span>
                  </div>
                </div>

                <ul className="grid grid-cols-1 gap-4">
                  {exp.achievements.map((ach, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 + (i * 0.1) }}
                      className="text-stone-500 font-light leading-relaxed flex items-start group hover:text-[#C05621] transition-colors"
                    >
                      <span className="mr-3 mt-2.5 w-1.5 h-[1px] bg-stone-300 group-hover:w-4 group-hover:bg-stone-900 transition-all duration-300"></span>
                      {ach}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-24 pt-12 border-t border-stone-100 md:pl-12"
          >
            <h4 className="text-3xl font-outfit font-bold mb-10 text-stone-900">Education</h4>
            <div className="space-y-12">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="flex flex-col md:flex-row justify-between gap-4">
                  <div>
                    <h5 className="text-xl font-outfit font-semibold text-stone-900">{edu.degree}</h5>
                    <p className="text-stone-500">{edu.institution}</p>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-stone-400 bg-stone-50 px-3 py-1 rounded-full h-fit self-start hover:text-[#C05621] transition-colors">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;