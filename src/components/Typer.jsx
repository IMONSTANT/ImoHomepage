import React from 'react'

export default function Typer(){
  const words = ['Inovação Inteligente.', 'Soluções que Pensam.']
  const [index, setIndex] = React.useState(0)
  const [subIndex, setSubIndex] = React.useState(0)
  const [forward, setForward] = React.useState(true)

  // Slower typing effect with a pause when a word finishes
  const typingSpeed = 120 // ms per char (typing)
  const deletingSpeed = 70 // ms per char (deleting)
  const pauseAfterWord = 1400 // ms pause after full word

  React.useEffect(() => {
    const current = words[index]
    let timeout

    if (forward) {
      if (subIndex < current.length) {
        timeout = setTimeout(() => setSubIndex(s => s + 1), typingSpeed)
      } else {
        // pause when finished typing
        timeout = setTimeout(() => setForward(false), pauseAfterWord)
      }
    } else {
      if (subIndex > 0) {
        timeout = setTimeout(() => setSubIndex(s => s - 1), deletingSpeed)
      } else {
        // small pause before typing next word
        timeout = setTimeout(() => {
          setForward(true)
          setIndex(i => (i + 1) % words.length)
        }, 200)
      }
    }

    return () => clearTimeout(timeout)
  }, [subIndex, index, forward])

  return (
    <span className="text-neon font-mono">
      {words[index].substring(0, subIndex)}<span className="text-neon">|</span>
    </span>
  )
}
