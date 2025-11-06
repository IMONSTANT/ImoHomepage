import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
}

const linkVariants = {
  rest: { color: '#9ca3af' },
  hover: { color: '#00ffcc', x: 4 }
}

export default function Footer(){
  return (
    <motion.footer
      className="mt-12 py-6 sm:py-8 px-4 sm:px-6 md:px-16 lg:px-28 border-t border-neutral-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="text-xs sm:text-sm text-gray-400">© 2025 Imonstant. Todos os direitos reservados.</motion.div>
        <motion.div variants={containerVariants} className="flex flex-wrap gap-3 sm:gap-4 justify-center">
          <motion.a
            href="#home"
            variants={linkVariants}
            initial="rest"
            whileHover="hover"
            className="text-gray-400 text-xs sm:text-sm"
          >
            Home
          </motion.a>
          <motion.a
            href="#about"
            variants={linkVariants}
            initial="rest"
            whileHover="hover"
            className="text-gray-400 text-xs sm:text-sm"
          >
            Sobre
          </motion.a>
          <motion.a
            href="#solutions"
            variants={linkVariants}
            initial="rest"
            whileHover="hover"
            className="text-gray-400 text-xs sm:text-sm"
          >
            Soluções
          </motion.a>
          <motion.a
            href="#contact"
            variants={linkVariants}
            initial="rest"
            whileHover="hover"
            className="text-gray-400 text-xs sm:text-sm"
          >
            Contato
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.footer>
  )
}
