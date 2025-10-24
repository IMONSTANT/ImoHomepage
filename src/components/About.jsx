import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="py-20  mt-32">
      <div className="max-w-6xl mx-auto">
        <motion.h2 className="text-3xl font-bold" initial={{y:10, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}}>Sobre Nós</motion.h2>
        <motion.p className="mt-6 text-gray-300 max-w-3xl" initial={{y:10, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}}>
          A Imonstant nasceu como um coletivo de estudantes apaixonados por tecnologia e IA. Criamos soluções inteligentes sob medida para empresas — com foco em resultados práticos, engenharia responsável e escalabilidade.
          
          Atuamos especialmente em setores onde automação e dados fazem diferença: imobiliárias (gestão de leads, triagem automática, recomendações), softwares de gestão empresarial, e escritórios de advocacia (sistemas advocativos com workflows automatizados). Além disso, desenvolvemos landing pages personalizadas e plataformas escaláveis que integram agentes de IA para otimizar processos e reduzir custos.
          
          Priorizamos prototipagem rápida, testes automatizados e integração contínua para entregar valor concreto e facilitar a evolução das soluções ao longo do tempo.
        </motion.p>
      </div>
    </section>
  )
}
