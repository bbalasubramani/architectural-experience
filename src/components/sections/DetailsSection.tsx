'use client'

import { motion } from 'framer-motion'

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
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

export default function DetailsSection() {
  const details = [
    {
      number: '01',
      title: 'SPATIAL HARMONY',
      description: 'Carefully orchestrated proportions create visual balance and spatial flow',
    },
    {
      number: '02',
      title: 'MATERIAL PALETTE',
      description: 'Premium textures rendered with cinematic lighting precision',
    },
    {
      number: '03',
      title: 'ENVIRONMENTAL CONTEXT',
      description: 'Ambient occlusion and indirect lighting create depth and atmosphere',
    },
    {
      number: '04',
      title: 'INTERACTIVE EXPERIENCE',
      description: 'Smooth parallax and scroll-driven camera movements guide exploration',
    },
  ]

  return (
    <section className="min-h-screen py-32 px-8 md:px-16 relative z-20 bg-charcoal">
      <motion.div
        className="max-w-5xl mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-20">
          <h2 className="text-6xl md:text-7xl font-light text-beige tracking-widest mb-8">
            DESIGN DETAILS
          </h2>
          <div className="w-16 h-px bg-beige"></div>
        </motion.div>

        {/* Details Grid */}
        <div className="space-y-16">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex gap-8 md:gap-12 pb-8 border-b border-beige-dark/20 hover:border-beige-dark/50 transition-colors duration-300"
            >
              {/* Number */}
              <div className="flex-shrink-0 pt-1">
                <span className="text-4xl font-light text-beige-dark group-hover:text-beige transition-colors duration-300">
                  {detail.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-2xl font-light text-beige tracking-wider mb-4">
                  {detail.title}
                </h3>
                <p className="text-beige-dark font-light leading-relaxed">
                  {detail.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="my-20 h-px bg-beige-dark/30"
        />

        {/* Performance Note */}
        <motion.div
          variants={itemVariants}
          className="text-center py-12"
        >
          <p className="text-beige-dark font-light text-sm tracking-widest mb-4">
            OPTIMIZED FOR
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs font-light tracking-widest text-beige-dark">
            <span>• DESKTOP BROWSERS</span>
            <span>• MOBILE ADAPTIVE</span>
            <span>• GPU ACCELERATED</span>
            <span>• 60 FPS TARGET</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
