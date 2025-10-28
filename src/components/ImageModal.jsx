import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  '/src/assets/maneger-carrolsel1.png',
  '/src/assets/maneger-carroelse2.png',
  '/src/assets/maneger-carrolse3.png',
  '/src/assets/maneger-carrol-4.png',
  '/src/assets/menager-carrolsel5.png'
]

export default function ImageModal({ isOpen, onClose }) {
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!isOpen) return
    
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') setCurrent((prev) => (prev - 1 + images.length) % images.length)
      if (e.key === 'ArrowRight') setCurrent((prev) => (prev + 1) % images.length)
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const slideVariants = {
    enter: { opacity: 0, scale: 0.9 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  }

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    exit: { opacity: 0, scale: 0.95 }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-40"
          />

          {/* Modal */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-4 md:inset-8 lg:inset-12 z-50 flex flex-col items-center justify-center"
          >
            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neon text-black font-bold text-xl hover:bg-white"
              aria-label="Fechar modal"
            >
              ✕
            </motion.button>

            {/* Image container */}
            <motion.div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={images[current]}
                  alt={`ImoManager full view ${current + 1}`}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </AnimatePresence>

              {/* Left arrow */}
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neon text-black font-bold text-2xl hover:bg-white z-10"
                aria-label="Slide anterior"
              >
                ‹
              </motion.button>

              {/* Right arrow */}
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neon text-black font-bold text-2xl hover:bg-white z-10"
                aria-label="Próximo slide"
              >
                ›
              </motion.button>
            </motion.div>

            {/* Bottom controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
              {/* Dots */}
              <div className="flex gap-2">
                {images.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setCurrent(i)}
                    animate={{
                      scale: i === current ? 1.2 : 0.8,
                      opacity: i === current ? 1 : 0.5
                    }}
                    className="w-2 h-2 rounded-full bg-neon"
                    aria-label={`Ir para slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Counter */}
              <div className="text-neon font-semibold text-sm">
                {current + 1} / {images.length}
              </div>

              {/* Keyboard hint */}
              <div className="text-gray-400 text-xs text-center hidden md:block">
                Use ← → para navegar ou ESC para fechar
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
