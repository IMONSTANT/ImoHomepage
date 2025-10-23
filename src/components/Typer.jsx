import React from 'react'

export default function Typer(){
  const words = ['Inovação Inteligente.', 'Soluções que Pensam.']
  const [index, setIndex] = React.useState(0)
  const [subIndex, setSubIndex] = React.useState(0)
  const [forward, setForward] = React.useState(true)

  React.useEffect(()=>{
    if (index === words.length) return
    const timeout = setTimeout(()=>{
      if (forward){
        if (subIndex < words[index].length) setSubIndex(s => s + 1)
        else setForward(false)
      } else {
        if (subIndex > 0) setSubIndex(s => s - 1)
        else { setForward(true); setIndex(i => (i + 1) % words.length) }
      }
    }, forward ? 80 : 40)
    return () => clearTimeout(timeout)
  }, [subIndex, index, forward])

  return (
    <span className="text-neon font-mono">
      {words[index].substring(0, subIndex)}<span className="text-neon">|</span>
    </span>
  )
}
