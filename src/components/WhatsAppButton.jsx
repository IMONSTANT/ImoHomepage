import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_NUMBER = '5585985402815' // Substitua pelo número real
const WHATSAPP_MESSAGE = 'Olá! Gostaria de mais informações sobre as soluções da Imonstant.'

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = React.useState(false)

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  const containerVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 }
  }

  const pulseVariants = {
    initial: { scale: 1, opacity: 1 },
    pulse: {
      scale: [1, 1.15, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  }

  const tooltipVariants = {
    hidden: { opacity: 0, x: 10, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.2, ease: 'easeOut' }
    },
    exit: { opacity: 0, x: 10, scale: 0.95 }
  }

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-30 flex items-center gap-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip */}
      {isHovered && (
        <motion.div
          variants={tooltipVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="px-3 py-2 bg-neon text-black text-sm font-semibold rounded-lg whitespace-nowrap"
        >
          Fale conosco no WhatsApp
        </motion.div>
      )}

      {/* Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        variants={containerVariants}
        initial="rest"
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg text-white"
        aria-label="Abrir WhatsApp"
      >
        {/* Pulse background */}
        <motion.div
          variants={pulseVariants}
          initial="initial"
          animate="pulse"
          className="absolute inset-0 rounded-full bg-green-400 opacity-30"
        />

        {/* Icon */}
        <motion.div className="relative z-10">
          <FaWhatsapp size={24} />
        </motion.div>
      </motion.a>
    </motion.div>
  )
}
