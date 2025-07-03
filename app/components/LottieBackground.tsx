"use client"

import { useEffect, useState } from "react"

export default function LottieBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-float ${
              i % 3 === 0
                ? "w-3 h-3 bg-emerald-400/50"
                : i % 3 === 1
                  ? "w-2 h-2 bg-teal-400/40"
                  : "w-1 h-1 bg-cyan-400/60"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Multiple CO2 Molecules */}
      <div className="absolute top-20 left-10 animate-bounce-slow">
        <svg width="60" height="60" viewBox="0 0 60 60" className="text-emerald-500/40">
          <circle cx="15" cy="30" r="8" fill="currentColor" className="animate-pulse" />
          <circle cx="30" cy="30" r="12" fill="currentColor" className="animate-pulse delay-300" />
          <circle cx="45" cy="30" r="8" fill="currentColor" className="animate-pulse delay-600" />
          <text x="30" y="35" textAnchor="middle" className="text-xs fill-emerald-700/80 font-bold">
            CO₂
          </text>
        </svg>
      </div>

      <div className="absolute bottom-40 right-16 animate-bounce-slow" style={{ animationDelay: "2s" }}>
        <svg width="45" height="45" viewBox="0 0 60 60" className="text-teal-500/40">
          <circle cx="15" cy="30" r="6" fill="currentColor" className="animate-pulse" />
          <circle cx="30" cy="30" r="9" fill="currentColor" className="animate-pulse delay-300" />
          <circle cx="45" cy="30" r="6" fill="currentColor" className="animate-pulse delay-600" />
          <text x="30" y="33" textAnchor="middle" className="text-xs fill-teal-700/80 font-bold">
            CO₂
          </text>
        </svg>
      </div>

      {/* Multiple Animated Leaves */}
      <div className="absolute top-40 right-20 animate-sway">
        <svg width="40" height="40" viewBox="0 0 40 40" className="text-green-500/50">
          <path
            d="M20 5 C25 10, 35 15, 35 25 C35 35, 25 35, 20 35 C15 35, 5 35, 5 25 C5 15, 15 10, 20 5 Z"
            fill="currentColor"
            className="animate-pulse"
          />
          <path d="M20 5 L20 35" stroke="currentColor" strokeWidth="2" className="animate-pulse delay-500" />
        </svg>
      </div>

      <div className="absolute top-60 left-32 animate-sway" style={{ animationDelay: "1.5s" }}>
        <svg width="35" height="35" viewBox="0 0 40 40" className="text-emerald-500/50">
          <path
            d="M20 5 C25 10, 35 15, 35 25 C35 35, 25 35, 20 35 C15 35, 5 35, 5 25 C5 15, 15 10, 20 5 Z"
            fill="currentColor"
            className="animate-pulse"
          />
          <path d="M20 5 L20 35" stroke="currentColor" strokeWidth="2" className="animate-pulse delay-500" />
        </svg>
      </div>

      {/* Enhanced Blockchain Blocks */}
      <div className="absolute bottom-32 left-1/4 animate-float-reverse">
        <div className="flex space-x-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-8 h-8 bg-gradient-to-r from-cyan-300/50 to-blue-300/50 border border-cyan-500/50 rounded transform rotate-45 animate-pulse"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
      </div>

      <div className="absolute top-32 right-1/3 animate-float">
        <div className="flex space-x-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-6 h-6 bg-gradient-to-r from-purple-300/50 to-pink-300/50 border border-purple-500/50 rounded transform rotate-45 animate-pulse"
              style={{ animationDelay: `${i * 300}ms` }}
            />
          ))}
        </div>
      </div>

      {/* Multiple Animated Chart Lines */}
      <div className="absolute bottom-20 right-1/4 animate-pulse">
        <svg width="80" height="60" viewBox="0 0 80 60" className="text-teal-600/40">
          <polyline
            points="10,50 20,30 30,40 40,20 50,35 60,15 70,25"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="animate-draw"
          />
          <circle cx="70" cy="25" r="3" fill="currentColor" className="animate-ping" />
        </svg>
      </div>

      <div className="absolute top-24 left-1/3 animate-pulse" style={{ animationDelay: "1s" }}>
        <svg width="60" height="45" viewBox="0 0 80 60" className="text-emerald-600/40">
          <polyline
            points="10,40 25,20 40,35 55,15 70,30"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="animate-draw"
          />
          <circle cx="70" cy="30" r="2" fill="currentColor" className="animate-ping" />
        </svg>
      </div>

      {/* Enhanced Orbiting Elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-96 h-96 animate-spin-very-slow">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-500/60 rounded-full animate-pulse" />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-teal-500/60 rounded-full animate-pulse delay-1000" />
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-cyan-500/60 rounded-full animate-pulse delay-2000" />
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-green-500/60 rounded-full animate-pulse delay-3000" />
        </div>
      </div>

      {/* Additional orbiting ring */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div
          className="relative w-64 h-64 animate-spin-very-slow"
          style={{ animationDirection: "reverse", animationDuration: "25s" }}
        >
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500/50 rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-pink-500/50 rounded-full animate-pulse delay-1500" />
        </div>
      </div>

      {/* Enhanced Energy Waves */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 border border-emerald-400/15 rounded-full animate-ping"
            style={{
              animationDelay: `${i * 1.5}s`,
              animationDuration: "6s",
              transform: `scale(${0.3 + i * 0.2})`,
            }}
          />
        ))}
      </div>

      {/* Floating DNA-like helixes */}
      <div className="absolute top-1/3 left-1/6 animate-float">
        <svg width="30" height="80" viewBox="0 0 30 80" className="text-cyan-500/40">
          <path
            d="M5 10 Q15 20 25 30 Q15 40 5 50 Q15 60 25 70"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="animate-draw"
          />
          <path
            d="M25 10 Q15 20 5 30 Q15 40 25 50 Q15 60 5 70"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="animate-draw"
            style={{ animationDelay: "0.5s" }}
          />
        </svg>
      </div>

      <div className="absolute bottom-1/3 right-1/6 animate-float-reverse">
        <svg width="25" height="60" viewBox="0 0 30 80" className="text-green-500/40">
          <path
            d="M5 10 Q15 20 25 30 Q15 40 5 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="animate-draw"
          />
          <path
            d="M25 10 Q15 20 5 30 Q15 40 25 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="animate-draw"
            style={{ animationDelay: "0.3s" }}
          />
        </svg>
      </div>
    </div>
  )
}
