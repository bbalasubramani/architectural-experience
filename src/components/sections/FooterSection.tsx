'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

export default function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-20 px-8 md:px-16 relative z-20 bg-charcoal border-t border-beige-dark/20">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-beige text-lg font-light tracking-widest mb-6">
              ARCHITECTURAL
            </h3>
            <p className="text-beige-dark text-sm font-light leading-relaxed">
              Immersive WebGL experiences that redefine luxury architecture presentation.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-beige text-sm font-light tracking-widest mb-6">
              EXPLORE
            </h4>
            <ul className="space-y-3">
              {['Design', 'Experience', 'Technology', 'Process'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-beige-dark hover:text-beige transition-colors duration-300 text-sm font-light"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants}>
            <h4 className="text-beige text-sm font-light tracking-widest mb-6">
              CONNECT
            </h4>
            <ul className="space-y-3">
              {['Instagram', 'Twitter', 'LinkedIn', 'Email'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-beige-dark hover:text-beige transition-colors duration-300 text-sm font-light"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div variants={itemVariants} className="h-px bg-beige-dark/20 mb-8" />

        {/* Bottom Footer */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center text-beige-dark text-xs font-light tracking-widest"
        >
          <p>
            © {currentYear} ARCHITECTURAL EXPERIENCE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 mt-6 md:mt-0">
            <a href="#" className="hover:text-beige transition-colors">
              PRIVACY
            </a>
            <a href="#" className="hover:text-beige transition-colors">
              TERMS
            </a>
            <a href="#" className="hover:text-beige transition-colors">
              CREDITS
            </a>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-12 border-t border-beige-dark/20 text-center"
        >
          <p className="text-beige-dark text-xs font-light tracking-widest mb-6">
            BUILT WITH
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-xs font-light text-beige-dark/60">
            <span>Next.js 14</span>
            <span>•</span>
            <span>React Three Fiber</span>
            <span>•</span>
            <span>GSAP</span>
            <span>•</span>
            <span>Framer Motion</span>
            <span>•</span>
            <span>React Lenis</span>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
