import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { ConversationForm } from './ConversationForm';

export const Contact: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 relative overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CABCA1]/5 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.h2
            variants={itemVariants}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#CABCA1] mb-6 tracking-tight"
          >
            Have an idea?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-secondary text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Let's build something extraordinary together. I'm available for freelance projects and open to new opportunities.
          </motion.p>

          <AnimatePresence>
            {!isFormOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                className="flex justify-center"
              >
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#CABCA1] text-black rounded-full text-lg font-medium hover:bg-[#d8cbb3] transition-all duration-300 hover:scale-105 shadow-xl group"
                >
                  Start a Conversation
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <ConversationForm />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};