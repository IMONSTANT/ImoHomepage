import React from 'react'
import { SiReact, SiNodedotjs, SiPython, SiVercel, SiSupabase } from 'react-icons/si'
import { motion } from 'framer-motion'

const tech = [
  {icon:<SiReact size={28} className="text-neon"/>, name:'REACT'},
  {icon:<SiNodedotjs size={28} className="text-neon"/>, name:'NODE'},
  {icon:<SiSupabase size={28} className="text-neon"/>, name:'SUPABASE'},
  {icon:<SiVercel size={28} className="text-neon"/>, name:'VERCEL'},
  {icon:<SiPython size={28} className="text-neon"/>, name:'PYTHON'},
]

export default function Tech(){
  return (
    <section id="tech" className="py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 className="text-3xl font-bold" initial={{y:10, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}}>Tecnologias</motion.h2>
        <p className="mt-4 text-gray-300 max-w-2xl">Usamos tecnologias escaláveis e de alto desempenho.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          {tech.map(t=> (
            <motion.div key={t.name} className="flex items-center gap-3 card-neon p-3 rounded-md" whileHover={{scale:1.03}}>
              {t.icon}
              <div className="text-white">{t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
