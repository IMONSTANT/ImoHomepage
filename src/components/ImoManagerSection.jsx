import React from 'react'
import { motion } from 'framer-motion'
import ImageCarousel from './ImageCarousel'
import ImageModal from './ImageModal'

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

export default function ImoManagerSection(){
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  return (
    <section id="imomanager" className="py-20">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold">ImoManager — Gestão Inteligente para Imobiliárias</h3>
          <p className="mt-4 text-gray-300">ImoManager integra contratos, anúncios, Automatize tarefas operacionais e concentre esforços no crescimento do negócio.</p>
          <ul className="mt-4 text-gray-300 list-disc pl-5 space-y-2">
            <li>Automação de contratos e renovação</li>
            <li>Gestão de imóveis e portfólios</li>
            <li>Notificações e comunicação integrada com clientes</li>
          </ul>
          <div className="mt-6">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-5 py-3 bg-neon text-black rounded-md font-semibold"
            >
              Solicitar Demonstração
            </motion.a>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <ImageCarousel onOpenModal={() => setIsModalOpen(true)} />
        </motion.div>
      </motion.div>

      {/* Modal */}
      <ImageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
