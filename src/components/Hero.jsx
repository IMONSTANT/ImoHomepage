import React from 'react'
import { motion } from 'framer-motion'
import Typer from './Typer'

export default function Hero(){
  return (
    <section id="home" className="min-h-[80vh] flex items-center pt-28">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{x:-30, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.6}}>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            <span className="block"><Typer/></span>
            <span className="block text-white">Soluções que <span className="text-neon">Pensem com Você</span>.</span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-xl">Somos um grupo de alunos apaixonados por tecnologia. Criamos agentes de IA e sistemas inteligentes personalizados para automatizar processos, aumentar produtividade e resolver problemas específicos das empresas.</p>

          <div className="mt-8 flex gap-4">
            <a href="#contact" className="px-6 py-3 rounded-md bg-neon text-black font-semibold hover:scale-[1.02] transition-transform">Fale com a Imonstant</a>
            <a href="#services" className="px-6 py-3 rounded-md border border-neutral-700 hover:border-neon transition">Nossos Serviços</a>
          </div>
        </motion.div>

        <motion.div initial={{scale:0.95, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:0.6}} className="relative">
          <div className="w-full h-64 md:h-72 lg:h-80 card-neon rounded-xl p-6 flex flex-col justify-center">
            <div className="text-sm text-gray-400">Demonstração</div>
            <div className="mt-4 text-white text-lg font-medium">Agentes de IA que entendem contexto, executam tarefas e integram-se aos seus sistemas.</div>
            <div className="mt-6 text-sm text-gray-300">Ex.: atendimento automatizado, classificação inteligente, automação de processos.</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
