import React from 'react'

export default function ParticlesBackground(){
  // Simple decorative floating circles + gradient
  const circles = new Array(10).fill(0)
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-60" style={{background: 'linear-gradient(120deg, rgba(0,123,255,0.06), rgba(0,255,255,0.04))'}} />
      {circles.map((_, i)=> (
        <div
          key={i}
          className="particle"
          style={{
            width: 60 + i*8,
            height: 60 + i*6,
            left: `${(i*11)%100}%`,
            top: `${(i*7)%100}%`,
            background: i%2===0? 'rgba(0,255,255,0.06)':'rgba(0,123,255,0.04)',
            animation: `float ${8 + i % 5}s ease-in-out ${i % 3}s infinite`
          }}
        />
      ))}
    </div>
  )
}
