import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 className="text-3xl font-bold" initial={{y:10, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}}>Sobre Nós</motion.h2>
        <motion.p className="mt-6 text-gray-300 max-w-3xl" initial={{y:10, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}}>
          Somos a Imonstant — um coletivo de estudantes apaixonados por tecnologia e inovação. Criamos soluções de IA e sistemas inteligentes sob medida para empresas que buscam automação, eficiência e vantagem competitiva.
          Trabalhamos com prototipagem rápida, boas práticas de engenharia de software e integração contínua para transformar ideias em produtos confiáveis. Nosso foco é entregar valor real: modelos eficientes, agentes que entendem contexto e integrações seguras com seus dados.
        </motion.p>
      </div>
    </section>
  )
}
