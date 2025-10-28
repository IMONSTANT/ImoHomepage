import React from 'react'
import { motion } from 'framer-motion'
import Typer from './Typer'
import CodeDemoCard from './CodeDemoCard'

// Local animation preset for this Hero (keeps reduced-motion in mind)
const reduceMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
const effectivePreset = reduceMotion ? { duration: 0.01 } : { duration: 0.6 }
const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: effectivePreset.duration } },
}

// CodeDemoCard moved to separate file `src/components/CodeDemoCard.jsx`

export default function Hero(){
  return (
    <section id="home" className="min-h-[80vh] flex items-center pt-28">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{x:-30, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.6}}>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            <span className="block"><Typer/></span>
            <span className="block text-white">Soluções que <span className="text-neon">Pensem com Você</span>.</span>
          </h1>
            <p className="mt-6 text-gray-300 max-w-xl">
            Somos uma equipe apaixonada por tecnologia, especializada no desenvolvimento de agentes de IA e sistemas inteligentes personalizados para automatizar processos, impulsionar a produtividade e resolver desafios específicos das empresas.
            </p>
          <div className="mt-8 flex gap-4">
            <a href="#contact" className="px-6 py-3 rounded-md bg-neon text-black font-semibold hover:scale-[1.02] transition-transform">Fale com a Imonstant</a>
            <a href="#services" className="px-6 py-3 rounded-md border border-neutral-700 hover:border-neon transition">Nossos Serviços</a>
          </div>
        </motion.div>

            <CodeDemoCard variants={itemVariants} duration={effectivePreset.duration} />
      </div>
    </section>
  )
}
