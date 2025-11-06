import React from 'react'
import { motion } from 'framer-motion'
import img1 from '../assets/maneger-carrolsel1.png'
import img2 from '../assets/maneger-carroelse2.png'
import img3 from '../assets/maneger-carrolse3.png'
import img4 from '../assets/maneger-carrol-4.png'
import img5 from '../assets/menager-carrolsel5.png'

const images = [img1, img2, img3, img4, img5]

export default function ImageCarousel({ onOpenModal }) {
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const dotVariants = {
    inactive: { scale: 0.8, opacity: 0.5 },
    active: { scale: 1, opacity: 1 }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative w-full h-40 sm:h-48 md:h-64 lg:h-80 rounded-xl overflow-hidden card-neon bg-black group cursor-pointer"
      onClick={onOpenModal}
    >
      {/* Thumbnail image (imported so Vite bundles correctly) */}
      <motion.img
        src={images[current]}
        alt={`ImoManager preview ${current + 1}`}
        className="absolute inset-0 w-full h-full object-contain bg-black"
        loading="lazy"
        decoding="async"
      />

      {/* Overlay hint */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-black/40 flex items-center justify-center z-10"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-neon font-semibold text-sm sm:text-base md:text-lg flex flex-col items-center gap-2"
        >
          <div className="text-2xl sm:text-3xl">👁️</div>
          <div className="px-4">Clique para visualizar</div>
        </motion.div>
      </motion.div>

      {/* Navigation dots */}
      <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-10">
        {images.map((_, i) => (
          <motion.button
            key={i}
            variants={dotVariants}
            initial="inactive"
            animate={i === current ? 'active' : 'inactive'}
            onClick={(e) => {
              e.stopPropagation()
              setCurrent(i)
            }}
            className="w-2 h-2 rounded-full bg-neon"
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Counter badge */}
      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-black/50 text-neon text-xs font-semibold">
        {current + 1} / {images.length}
      </div>
    </motion.div>
  )
}
