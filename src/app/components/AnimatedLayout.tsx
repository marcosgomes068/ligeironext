'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { fadeIn, transitions } from '../utils/animations';

export default function AnimatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        initial="initial"
        animate="animate"
        exit="exit"
        variants={fadeIn}
        transition={transitions.slow}
        className="min-h-screen"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
