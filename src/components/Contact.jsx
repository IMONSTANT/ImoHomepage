import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'

const SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxPSSiJOVAZlgBgMvOc90k5oPVlNmegTpBf_wCIN03phExgAqFaUDqZ5xrWXKJbACGy9w/exec'

export default function Contact(){
  const [form, setForm] = React.useState({name:'', email:'', message:''})
  const [loading, setLoading] = React.useState(false)

  function handleChange(e){
    setForm({...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e){
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch(SHEET_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' }, // evita preflight CORS
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message })
      })

      if (!res.ok) throw new Error(`Erro HTTP ${res.status}`)

      const data = await res.json()

      if (data.status === 'success') {
        alert('Mensagem enviada com sucesso!')
        setForm({name:'', email:'', message:''}) // limpa formulário
      } else {
        alert('Erro ao enviar a mensagem. Tente novamente.')
      }

    } catch (err) {
      console.error(err)
      alert('Erro ao enviar. Verifique se o endpoint do Apps Script foi implantado com acesso público e se a URL está correta.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div initial={{x:-10, opacity:0}} whileInView={{x:0, opacity:1}} viewport={{once:true}}>
          <h3 className="text-2xl font-bold">Vamos conversar</h3>
          <p className="mt-4 text-gray-300">
            Fale com a nossa equipe sobre seu projeto. Criamos soluções sob medida para empresas que buscam automação e IA aplicada — com experiência em imobiliária, softwares de gestão e sistemas advocativos.
          </p>
          <div className="mt-8 flex gap-4 items-center">
            <a href="https://www.instagram.com/tech.imonstant" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-neon">
              <FaInstagram size={22}/>
            </a>
            <a href="https://www.linkedin.com/in/imonstant/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-neon">
              <FaLinkedin size={22}/>
            </a>
          </div>
        </motion.div>

        <motion.form onSubmit={handleSubmit} initial={{x:10, opacity:0}} whileInView={{x:0, opacity:1}} viewport={{once:true}} className="p-6 card-neon rounded-xl">
          <div className="grid grid-cols-1 gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nome"
              required
              className="p-3 rounded-md bg-transparent border border-neutral-700"
              disabled={loading}
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              type="email"
              required
              className="p-3 rounded-md bg-transparent border border-neutral-700"
              disabled={loading}
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Mensagem"
              rows={5}
              required
              className="p-3 rounded-md bg-transparent border border-neutral-700"
              disabled={loading}
            />
            <motion.button
              whileTap={{scale:0.98}}
              type="submit"
              disabled={loading}
              className="px-4 py-3 rounded-md bg-neon text-black font-semibold disabled:opacity-50"
            >
              {loading ? 'Enviando...' : 'Enviar'}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
