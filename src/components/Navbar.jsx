import React from 'react'
import { motion } from 'framer-motion'

const links = [
  {label:'Home', href:'#home'},
  {label:'Sobre', href:'#about'},
  {label:'Serviços', href:'#services'},
  {label:'Contato', href:'#contact'},
]

export default function Navbar(){
  return (
    <motion.header className="w-full py-4 sm:py-5 px-4 sm:px-6 md:px-16 lg:px-28 fixed top-0 left-0 z-40 backdrop-blur-md" initial={{opacity:0}} animate={{opacity:1}}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="text-xl sm:text-2xl font-bold tracking-wider text-neon">Imonstant</a>
        <nav className="hidden md:flex gap-6 items-center text-gray-300">
          {links.map(l=> (
            <a key={l.href} href={l.href} className="hover:text-neon transition-colors">{l.label}</a>
          ))}
          <a href="#contact" className="ml-4 px-3 lg:px-4 py-2 rounded-md bg-neon/10 text-neon border border-neon/20 hover:bg-neon/20 transition text-sm lg:text-base whitespace-nowrap">Fale Conosco</a>
        </nav>
        <MobileMenu />
      </div>
    </motion.header>
  )
}

function MobileMenu(){
  const [open, setOpen] = React.useState(false)
  return (
    <div className="md:hidden">
      <button onClick={()=>setOpen(!open)} className="p-2 rounded-md border border-transparent hover:border-neon/20">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h18" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      {open && (
        <div className="absolute right-4 top-14 sm:top-16 w-48 p-4 card-neon rounded-lg shadow-lg">
          {['Home','Sobre','Serviços','Contato'].map(label=> (
            <a key={label} href={`#${label.toLowerCase()}`} className="block py-2 text-sm hover:text-neon transition-colors" onClick={()=>setOpen(false)}>{label}</a>
          ))}
        </div>
      )}
    </div>
  )
}
