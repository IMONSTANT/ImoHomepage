import React from 'react'
import { motion } from 'framer-motion'

const solutions = [
  { title: 'ImoManager', desc: 'Gestão completa para imobiliárias: contratos, imóveis, cobrança e comunicação centralizada.' },
  { title: 'Agentes e Automação', desc: 'Agentes sob medida que automatizam triagem, respostas e workflows críticos.' },
  { title: 'Integrações & Dados', desc: 'Conectamos ERPs, CRMs e fontes de dados para relatórios e decisões em tempo real.' }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
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

const cardVariants = {
  rest: { scale: 1, boxShadow: '0 0 0px rgba(0, 255, 204, 0)' },
  hover: {
    scale: 1.05,
    boxShadow: '0 0 20px rgba(0, 255, 204, 0.3)',
    transition: { duration: 0.2 }
  }
}

export default function Solutions(){
  return (
    <section id="solutions" className="py-20">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold">Nossas Soluções</motion.h2>
        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {solutions.map((s,i)=> (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="p-6 card-neon rounded-xl cursor-pointer"
            >
              <motion.div variants={cardVariants} className="h-full flex flex-col">
                <h4 className="font-semibold text-lg">{s.title}</h4>
                <p className="mt-3 text-gray-300 text-sm flex-grow">{s.desc}</p>
                <div className="mt-4">
                  <motion.a
                    href="#contact"
                    whileHover={{ x: 4 }}
                    className="text-sm text-neon hover:underline inline-block"
                  >
                    Saiba mais →
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
