import React from 'react'
import { motion } from 'framer-motion'
import Typer from './Typer'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 }
}

export default function HeroSection(){
  return (
    <section id="home" className="min-h-[80vh] flex items-center pt-20 sm:pt-24 md:pt-28">
      <motion.div
        className="max-w-4xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            <span className="block"><Typer/></span>
            <span className="block text-white">Transformamos processos em vantagem competitiva.</span>
          </h1>

          <motion.p variants={itemVariants} className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-300 max-w-xl">
            A Imonstant cria agentes de IA e sistemas de automação para empresas que querem reduzir custos, aumentar eficiência e transformar dados em decisões. Entregamos soluções integradas, seguras e escaláveis — prontas para produção.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <motion.a
              href="#imomanager"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-md bg-neon text-black font-semibold text-center text-sm sm:text-base"
            >
              Solicitar Demonstração
            </motion.a>
            <motion.a
              href="#contact"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-md border border-neutral-700 hover:border-neon transition text-center text-sm sm:text-base"
            >
              Fale Conosco
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
