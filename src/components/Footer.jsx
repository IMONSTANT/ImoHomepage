import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-12 py-8 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-400">© 2025 Imonstant. Todos os direitos reservados.</div>
        <div className="flex gap-4">
          <a href="#home" className="text-gray-400 hover:text-neon">Home</a>
          <a href="#about" className="text-gray-400 hover:text-neon">Sobre</a>
          <a href="#services" className="text-gray-400 hover:text-neon">Serviços</a>
          <a href="#contact" className="text-gray-400 hover:text-neon">Contato</a>
        </div>
      </div>
    </footer>
  )
}
