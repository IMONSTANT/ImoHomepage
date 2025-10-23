import React from 'react'
import { motion } from 'framer-motion'
import { FaBrain, FaLaptopCode, FaCogs, FaDatabase } from 'react-icons/fa'

const services = [
  {icon:<FaBrain size={28} className="text-neon"/>, title:'Agentes de IA Personalizados', desc:'Agentes treinados e integrados aos seus fluxos.'},
  {icon:<FaLaptopCode size={28} className="text-neon"/>, title:'Desenvolvimento de Sistemas Inteligentes', desc:'Plataformas web e APIs com ML embutido.'},
  {icon:<FaCogs size={28} className="text-neon"/>, title:'Automação Empresarial', desc:'Automação de processos para reduzir custos.'},
  {icon:<FaDatabase size={28} className="text-neon"/>, title:'Integração com Dados e APIs', desc:'Conectamos suas fontes e transformamos dados em insights.'},
]

export default function Services(){
  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 className="text-3xl font-bold" initial={{y:10, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}}>Serviços</motion.h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i)=> (
            <motion.div key={s.title} className="p-6 rounded-xl card-neon hover:shadow-[0_0_24px_rgba(0,255,255,0.04)] transition" whileHover={{y:-6}} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.08}}>
              <div className="flex items-center gap-4">{s.icon}<div className="font-semibold text-white">{s.title}</div></div>
              <div className="mt-4 text-gray-300 text-sm">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
