
import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-16 scroll-mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        <div className="lg:col-span-5">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-outfit font-semibold tracking-tight text-stone-900 sticky top-32"
          >
            A dedicated HR partner for modern IT organizations.
          </motion.h2>
        </div>

        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 text-lg text-stone-600 font-light leading-relaxed"
          >
            <p>
              With 4 years of specialized experience in IT recruitment, I have developed deep expertise in talent acquisition and process optimization. I thrive on meaningful connections and insightful discussions around talent management and career development.
            </p>
            <p>
              My experience spans managing diverse talent pools, refining HR operations, and mentoring professionals to unlock their full potential. I believe that a great workplace isn't just about the office, it's about the culture of innovation and collaboration we build together.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h4 className="text-black hover:text-[#C05621] transition-colors font-semibold text-3xl">4+</h4>
                <p className="text-sm text-stone-500 uppercase tracking-widest mt-1">Years Experience</p>
              </div>
              <div>
                <h4 className="text-black hover:text-[#C05621] transition-colors font-semibold text-3xl">IT</h4>
                <p className="text-sm text-stone-500 uppercase tracking-widest mt-1">Industry Focus</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;