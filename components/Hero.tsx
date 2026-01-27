
import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 pt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="space-y-8 order-2 lg:order-1"
        >
          <motion.div variants={item} className="flex items-center space-x-3">
            <span className="w-12 h-[1px] bg-stone-400"></span>
            <span className="text-stone-500 font-medium tracking-[0.3em] text-[12px] uppercase hover:text-[#C05621] transition-colors">
              Human Resources Executive
            </span>
          </motion.div>

          <div className="space-y-2">
            <motion.h1
              variants={item}
              className="text-6xl md:text-8xl lg:text-9xl font-outfit font-bold tracking-tight leading-[0.9] text-stone-900"
            >
              Khyati <br />
              <span className="text-[#b1b1b1ff] italic font-serif font-light hover:text-[#C05621] transition-colors">Raval</span>
            </motion.h1>
          </div>

          <motion.div variants={item} className="max-w-2xl mt-12">
            <p className="text-xl md:text-2xl text-stone-600 leading-relaxed font-light">
              Designing workplace cultures where <span className="text-stone-900 font-medium hover:text-[#C05621] transition-colors">talent meets opportunity</span>. With 4 years of strategic HR experience, I build teams that drive lasting success.
            </p>
          </motion.div>

          <motion.div variants={item} className="pt-10 flex flex-wrap gap-6 items-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-stone-900 text-white rounded-full font-semibold transition-all shadow-xl hover:shadow-2xl hover:bg-[#C05621] flex items-center group"
            >
              Start a Conversation
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </motion.a>
            <motion.a
              href="#experience"
              className="text-stone-500 hover:text-[#C05621] font-medium transition-colors flex items-center"
            >
              Explore my journey
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column: Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative h-[50vh] lg:h-[80vh] w-full order-1 lg:order-2"
        >
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#faf9f6] to-transparent z-10"></div>
          <img
            src="./media/images/hero_portrait.png"
            alt="Khyati Raval"
            className="w-full h-full object-cover object-[center_top]"
          />
        </motion.div>
      </div>

      {/* Modern Background Decorations */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-stone-200/40 rounded-full blur-[120px] -z-10"
      ></motion.div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-stone-300">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={24} strokeWidth={1.5} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
