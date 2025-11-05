import React from 'react'
import { motion } from 'framer-motion'
import toast, { Toaster } from 'react-hot-toast'
import { SHEET_ENDPOINT, SOCIALS } from '../config'

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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const inputVariants = {
  focus: { scale: 1.02, boxShadow: '0 0 10px rgba(0, 255, 204, 0.2)' }
}

export default function ContactForm(){
  const [form, setForm] = React.useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = React.useState(false)

  function handleChange(e){ setForm({ ...form, [e.target.name]: e.target.value }) }

  async function handleSubmit(e){
    e.preventDefault()
    setLoading(true)
    try{
      const res = await fetch(SHEET_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(form) })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      if (data.status === 'success'){
        toast.success('Mensagem enviada com sucesso!')
        setForm({ name: '', email: '', message: '' })
      } else {
        toast.error('Erro ao enviar. Tente novamente.')
      }
    } catch(err){
      console.error(err)
      toast.error('Erro ao enviar. Verifique o endpoint e tente novamente.')
    } finally { setLoading(false) }
  }

  return (
    <section id="contact" className="py-16 sm:py-20">
      <Toaster position="bottom-center" />
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants}>
          <h3 className="text-xl sm:text-2xl font-bold">Vamos conversar</h3>
          <p className="mt-4 text-sm sm:text-base text-gray-300">Agende uma demonstração ou nos conte sobre seu projeto. Criamos soluções de IA e automação alinhadas aos objetivos do seu negócio.</p>
          <motion.div variants={itemVariants} className="mt-6 flex flex-wrap gap-3 sm:gap-4 items-center">
            <motion.a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: '#00ffcc' }}
              className="text-gray-300 text-sm sm:text-base"
            >
              Instagram
            </motion.a>
            <motion.a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: '#00ffcc' }}
              className="text-gray-300 text-sm sm:text-base"
            >
              LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          variants={itemVariants}
          className="p-4 sm:p-6 card-neon rounded-xl"
        >
          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            <motion.input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nome"
              required
              className="p-2.5 sm:p-3 rounded-md bg-transparent border border-neutral-700 focus:outline-none text-sm sm:text-base"
              disabled={loading}
              whileFocus="focus"
              variants={inputVariants}
            />
            <motion.input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              type="email"
              required
              className="p-2.5 sm:p-3 rounded-md bg-transparent border border-neutral-700 focus:outline-none text-sm sm:text-base"
              disabled={loading}
              whileFocus="focus"
              variants={inputVariants}
            />
            <motion.textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Mensagem"
              rows={5}
              required
              className="p-2.5 sm:p-3 rounded-md bg-transparent border border-neutral-700 focus:outline-none text-sm sm:text-base"
              disabled={loading}
              whileFocus="focus"
              variants={inputVariants}
            />
            <motion.button
              whileTap={{scale:0.98}}
              whileHover={{ scale: 1.02 }}
              type="submit"
              disabled={loading}
              className="px-4 py-2.5 sm:py-3 rounded-md bg-neon text-black font-semibold disabled:opacity-50 text-sm sm:text-base"
            >
              {loading ? 'Enviando...' : 'Enviar'}
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  )
}
