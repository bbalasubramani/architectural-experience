'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
}

const floatVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: 'easeOut',
    },
  },
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center pt-20">
      <motion.div
        className="text-center z-20 pointer-events-none"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Main Title */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-7xl md:text-8xl font-light text-beige tracking-widest mb-4">
            LUXURY
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-beige-dark tracking-widest">
            REIMAGINED
          </h2>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-2 mb-12"
        >
          <div className="w-12 h-px bg-beige"></div>
          <div className="w-2 h-px bg-beige-dark"></div>
          <div className="w-12 h-px bg-beige"></div>
        </motion.div>

        {/* Description */}
        <motion.div variants={itemVariants} className="max-w-2xl mx-auto mb-16">
          <p className="text-beige-light text-lg font-light tracking-wide leading-relaxed">
            Experience architecture in motion. A cinematic journey through luxury design
            where every element tells a story of precision and elegance.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div variants={itemVariants}>
          <motion.button
            className="px-12 py-4 border border-beige text-beige hover:bg-beige hover:text-charcoal transition-all duration-500 font-light tracking-widest text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            EXPLORE EXPERIENCE
          </motion.button>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute bottom-20 left-10 text-beige-dark text-sm font-light tracking-widest"
          variants={floatVariants}
          initial="hidden"
          whileInView="visible"
          animate="animate"
          viewport={{ once: true }}
        >
          ↓ SCROLL TO EXPLORE
        </motion.div>
      </motion.div>
    </section>
  )
}
