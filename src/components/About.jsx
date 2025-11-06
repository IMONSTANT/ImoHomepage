import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

export default function About(){
  return (
    <section id="about" className="py-16 sm:py-20 mt-16 sm:mt-24 md:mt-32">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl font-bold">Sobre a Imonstant</motion.h2>
        <motion.p variants={itemVariants} className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-300 max-w-3xl">
          A Imonstant transforma desafios empresariais em soluções digitais inteligentes. Somos uma equipe de engenheiros e cientistas de dados focada em construir produtos que automatizam processos, melhoram a tomada de decisão e liberam tempo para o que importa: crescimento do negócio.

          Trabalhamos com empresas dos setores imobiliário, gestão empresarial e jurídico para entregar sistemas que realmente geram valor: pipelines de automação, agentes conversacionais integrados e dashboards acionáveis.

          Nossa abordagem combina entrega rápida de protótipos, engenharia responsável e operação segura para garantir ROI claro e escalabilidade técnica.
        </motion.p>
      </motion.div>
    </section>
  )
}
