import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Contact(){
  const [form, setForm] = React.useState({name:'', email:'', message:''})
  function handleChange(e){ setForm({...form, [e.target.name]: e.target.value }) }
  function handleSubmit(e){
    e.preventDefault()
    // no backend - just simulate
    alert('Obrigado! Sua mensagem foi enviada. (Simulação)')
    setForm({name:'', email:'', message:''})
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div initial={{x:-10, opacity:0}} whileInView={{x:0, opacity:1}} viewport={{once:true}}>
          <h3 className="text-2xl font-bold">Vamos conversar</h3>
          <p className="mt-4 text-gray-300">Fale com a nossa equipe sobre seu projeto. Criamos soluções sob medida para empresas que buscam automação e IA aplicada.</p>

          <div className="mt-8 flex gap-4 items-center">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-neon"><FaGithub size={22}/></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-neon"><FaLinkedin size={22}/></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-neon"><FaInstagram size={22}/></a>
          </div>
        </motion.div>

        <motion.form onSubmit={handleSubmit} initial={{x:10, opacity:0}} whileInView={{x:0, opacity:1}} viewport={{once:true}} className="p-6 card-neon rounded-xl">
          <div className="grid grid-cols-1 gap-4">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Nome" required className="p-3 rounded-md bg-transparent border border-neutral-700" />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" required className="p-3 rounded-md bg-transparent border border-neutral-700" />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Mensagem" rows={5} required className="p-3 rounded-md bg-transparent border border-neutral-700" />
            <button type="submit" className="px-4 py-3 rounded-md bg-neon text-black font-semibold">Enviar</button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
