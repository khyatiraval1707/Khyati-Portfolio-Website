import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, ArrowRight } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("xeegdaov");

  return (
    <section id="contact" className="py-12 md:py-16 scroll-mt-32">
      <div className="bg-stone-900 rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-stone-800 to-stone-900 -z-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-stone-800 rounded-full blur-[100px] opacity-50"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-outfit font-light tracking-tight leading-tight mb-8"
            >
              Let's create a <br />
              <span className="italic">lasting impact</span> together.
            </motion.h2>

            <div className="space-y-6">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center space-x-4 group text-stone-300 hover:text-white transition-colors"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-500 font-bold">Email</p>
                  <p className="text-lg">{PERSONAL_INFO.email}</p>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 group text-stone-300 hover:text-white transition-colors"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-500 font-bold">LinkedIn</p>
                  <p className="text-lg">Khyati Raval</p>
                </div>
              </a>

              <div className="flex items-center space-x-4 text-stone-300">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-500 font-bold">Location</p>
                  <p className="text-lg">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10"
          >
            <h3 className="text-2xl font-outfit mb-8">Send a message</h3>
            {state.succeeded ? (
              <div className="text-center py-12">
                <p className="text-2xl font-outfit font-bold text-white mb-4">Thank you!</p>
                <p className="text-stone-300">I've received your message and will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-stone-400 font-bold">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-stone-400 font-bold">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                    className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-all"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm mt-1" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-stone-400 font-bold">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="How can I help?"
                    className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-all resize-none"
                    required
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm mt-1" />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-4 bg-white text-stone-900 rounded-xl font-bold hover:bg-[#C05621] hover:text-white transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{state.submitting ? 'Sending...' : 'Send Message'}</span>
                  {!state.submitting && <ArrowRight className="w-4 h-4" />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;