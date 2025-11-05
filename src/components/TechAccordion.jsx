import React from 'react'
import { motion } from 'framer-motion'
import { SiReact, SiNodedotjs, SiSupabase, SiVercel, SiPython } from 'react-icons/si'

const techStack = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: SiReact, color: '#61DAFB' }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#68A063' },
      { name: 'Python', icon: SiPython, color: '#3776AB' }
    ]
  },
  {
    category: 'Infra & Dados',
    items: [
      { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
      { name: 'Vercel', icon: SiVercel, color: '#000000' }
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

const categoryVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
}

export default function TechAccordion() {
  const [expanded, setExpanded] = React.useState(0)

  return (
    <section id="tech" className="py-16 sm:py-20">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8"
        >
          Stack de Tecnologia
        </motion.h2>

        <div className="space-y-2 sm:space-y-3">
          {techStack.map((category, idx) => (
            <motion.div
              key={idx}
              variants={categoryVariants}
              className="rounded-lg overflow-hidden card-neon"
            >
              <motion.button
                onClick={() => setExpanded(expanded === idx ? -1 : idx)}
                whileHover={{ backgroundColor: 'rgba(0, 255, 204, 0.05)' }}
                className="w-full p-3 sm:p-4 flex items-center justify-between text-left transition-colors"
              >
                <span className="font-semibold text-base sm:text-lg">{category.category}</span>
                <motion.div
                  animate={{ rotate: expanded === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-neon text-lg sm:text-xl"
                >
                  ▼
                </motion.div>
              </motion.button>

              <motion.div
                initial={false}
                animate={{
                  height: expanded === idx ? 'auto' : 0,
                  opacity: expanded === idx ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <motion.div className="p-3 sm:p-4 bg-black/20 border-t border-neutral-700 space-y-2 sm:space-y-3">
                  {category.items.map((tech, i) => {
                    const IconComponent = tech.icon
                    return (
                      <motion.div
                        key={i}
                        variants={itemVariants}
                        initial="hidden"
                        animate={expanded === idx ? 'visible' : 'hidden'}
                        className="flex items-center gap-2 sm:gap-3 p-2 rounded-md hover:bg-neutral-800/50 transition-colors"
                      >
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          className="flex-shrink-0"
                        >
                          <IconComponent size={20} className="sm:w-6 sm:h-6" style={{ color: tech.color }} />
                        </motion.div>
                        <span className="text-gray-300 text-sm sm:text-base">{tech.name}</span>
                      </motion.div>
                    )
                  })}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 sm:mt-8 text-gray-400 text-xs sm:text-sm text-center"
        >
          Tecnologias modernas para soluções escaláveis e performáticas
        </motion.p>
      </motion.div>
    </section>
  )
}
