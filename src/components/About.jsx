import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 className="text-3xl font-bold" initial={{y:10, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}}>Sobre Nós</motion.h2>
        <motion.p className="mt-6 text-gray-300 max-w-3xl" initial={{y:10, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}}>
          A Imonstant é formada por um grupo de alunos que busca evolução constante. Desenvolvemos soluções inteligentes e personalizadas usando IA e boas práticas de engenharia de software. Valorizamos prototipagem rápida, testes e integração contínua para entregar valor real às empresas.
        </motion.p>
      </div>
    </section>
  )
}
