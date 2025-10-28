import React from 'react'
import { motion } from 'framer-motion'

// Code demo card + tiny syntax highlighter
function CodeDemoCard({ variants, duration = 0.45 }){
  const cardRef = React.useRef(null)
  const innerRef = React.useRef(null)
  const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  React.useEffect(()=>{
    if (reduce) return
    const el = cardRef.current
    const inner = innerRef.current
    if (!el || !inner) return
    let raf = null
    function onMove(e){
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(()=>{
        inner.style.transform = `translate3d(${x * 8}px, ${y * 6}px, 0) scale(1.01)`
      })
    }
    function onLeave(){ if (raf) cancelAnimationFrame(raf); inner.style.transform = 'translate3d(0,0,0) scale(1)'}
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return ()=>{ el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave); if (raf) cancelAnimationFrame(raf) }
  },[])

  const code = `// agent.ts — exemplo simples de agente personalizável
import { createAgent } from 'imonstant-core'

const agent = createAgent({
  name: 'SupportAgent',
  model: 'gpt-4o',
  tools: ['email', 'crm'],
  async onMessage(ctx) {
    // lógica: buscar cliente, consultar CRM e responder
    const customer = await ctx.tools.crm.find(ctx.userId)
  // simplified to string concatenation to avoid nested template escaping in the demo
  return { reply: 'Olá ' + customer.name + ', como posso ajudar?' }
  }
})

export default agent
`;

  function copyCode(){ navigator.clipboard?.writeText(code) }

  return (
    <motion.div ref={cardRef} variants={variants} className="relative" initial={{scale:0.96, opacity:0}} animate={{scale:1, opacity:1, transition:{duration}}}>
      <div ref={innerRef} className="w-full h-64 md:h-72 lg:h-80 card-neon rounded-xl p-4 md:p-6 flex flex-col justify-start overflow-hidden relative">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-400">Demonstração • Código (TypeScript)</div>
          <button onClick={copyCode} aria-label="Copiar código" className="text-xs text-gray-300 bg-neutral-800/30 px-2 py-1 rounded hover:bg-neutral-800/50">Copiar</button>
        </div>

        <div className="mt-3 flex-1 overflow-auto">
          <pre className="text-sm leading-6 font-mono text-white whitespace-pre pr-4" style={{fontSize:'0.85rem'}} aria-label="Exemplo de código TypeScript" role="region">
            {renderHighlighted(code)}
          </pre>
        </div>

        <div className="mt-3 text-xs text-gray-400">Integre agentes a CRMs, ERPs e fluxos de negócio — personalizado e auditável.</div>
      </div>
    </motion.div>
  )
}

function renderHighlighted(code){
  const esc = (s)=> s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
  let html = esc(code)
  html = html.replace(/(\/\/.*$)/gm, '<span class="text-neutral-500">$1</span>')
  html = html.replace(/('[^']*'|"[^"]*"|`[^`]*`)/g, '<span class="text-amber-300">$1</span>')
  html = html.replace(/\b(const|let|async|await|function|import|from|export|default|return|new)\b/g, '<span class="text-sky-400">$1</span>')
  html = html.replace(/\b(string|number|boolean|any|void)\b/g, '<span class="text-violet-300">$1</span>')
  html = html.replace(/(createAgent|find|onMessage)\b/g, '<span class="text-green-300">$1</span>')

  const lines = html.split('\n')
  return lines.map((ln,i)=> (
    // eslint-disable-next-line react/no-array-index-key
    <div key={i} className="leading-5"><span className="text-neutral-500 mr-3 inline-block w-6 text-right select-none">{i+1}</span><span dangerouslySetInnerHTML={{__html:ln}} /></div>
  ))
}

export default CodeDemoCard
