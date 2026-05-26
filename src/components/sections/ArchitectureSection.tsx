'use client'

import { motion } from 'framer-motion'

const sectionVariants = {
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
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

export default function ArchitectureSection() {
  const features = [
    {
      title: 'FORM',
      description: 'Geometrically precise structures that define spatial elegance',
    },
    {
      title: 'LIGHT',
      description: 'Ambient warmth through carefully orchestrated illumination',
    },
    {
      title: 'MATERIAL',
      description: 'Natural textures rendered with cinematic precision',
    },
  ]

  return (
    <section className="min-h-screen py-32 px-8 md:px-16 relative z-20 bg-charcoal/50 backdrop-blur-sm">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-20">
          <h2 className="text-6xl md:text-7xl font-light text-beige tracking-widest mb-6">
            ARCHITECTURE
          </h2>
          <div className="w-16 h-px bg-beige mb-8"></div>
          <p className="text-beige-light max-w-2xl font-light text-lg leading-relaxed">
            Every element meticulously crafted to create spatial harmony. From structural pillars
            to floating planes, the architecture speaks of balance and precision.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="mb-6 overflow-hidden">
                <h3 className="text-beige text-2xl font-light tracking-widest group-hover:text-beige-light transition-colors duration-300">
                  {feature.title}
                </h3>
              </div>
              <p className="text-beige-dark font-light leading-relaxed text-sm">
                {feature.description}
              </p>
              <motion.div
                className="mt-6 w-0 h-px bg-beige"
                initial={{ width: 0 }}
                whileHover={{ width: 60 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 pt-20 border-t border-beige-dark/30"
        >
          {[
            { label: 'SCENES', value: '4' },
            { label: 'RENDER PASSES', value: '12' },
            { label: 'MATERIALS', value: '8' },
            { label: 'LIGHT PROBES', value: '16' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-light text-beige mb-2">
                {stat.value}
              </div>
              <div className="text-xs font-light tracking-widest text-beige-dark">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
