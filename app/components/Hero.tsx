"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Sparkles, Globe, TrendingUp } from "lucide-react"
import LottieBackground from "./LottieBackground"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Lottie-style Background Animations */}
      <LottieBackground />

      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/80" />
        {mounted && (
          <>
            {/* Multiple floating orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-cyan-200/25 rounded-full blur-2xl animate-pulse delay-2000" />
            <div className="absolute top-1/6 right-1/3 w-72 h-72 bg-green-200/25 rounded-full blur-3xl animate-pulse delay-3000" />

            {/* Central rotating gradient */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-radial from-emerald-100/30 to-transparent rounded-full animate-spin-slow" />

            {/* Animated grid overlay */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-20 gap-1 h-full w-full">
                {[...Array(400)].map((_, i) => (
                  <div
                    key={i}
                    className="border border-emerald-400 animate-pulse"
                    style={{
                      animationDelay: `${(i * 20) % 4000}ms`,
                      animationDuration: `${2 + (i % 3)}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Floating geometric shapes */}
            <div className="absolute top-20 left-20 animate-float">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-300/40 to-teal-300/40 rounded-lg transform rotate-45 animate-spin-slow" />
            </div>
            <div className="absolute bottom-32 right-32 animate-float-reverse">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-300/40 to-blue-300/40 rounded-full animate-pulse" />
            </div>
            <div className="absolute top-1/3 right-20 animate-sway">
              <div className="w-8 h-20 bg-gradient-to-b from-green-300/40 to-emerald-300/40 rounded-full transform rotate-12" />
            </div>

            {/* Animated connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="rgb(20, 184, 166)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="rgb(6, 182, 212)" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              {[...Array(8)].map((_, i) => (
                <line
                  key={i}
                  x1={`${10 + i * 12}%`}
                  y1="10%"
                  x2={`${90 - i * 8}%`}
                  y2="90%"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  className="animate-draw"
                  style={{
                    animationDelay: `${i * 500}ms`,
                    animationDuration: "4s",
                  }}
                />
              ))}
            </svg>
          </>
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-emerald-100/80 backdrop-blur-sm border border-emerald-200 rounded-full px-6 py-3 animate-bounce-subtle">
              <Sparkles className="w-5 h-5 text-emerald-600 animate-spin-slow" />
              <span className="text-emerald-700 font-medium">The Future of Carbon Credits</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-emerald-800 to-teal-800 bg-clip-text text-transparent animate-gradient">
              Revolutionize the
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
              Carbon Market
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            The first decentralized platform for CO2 credit trading with blockchain technology. Transparency,
            efficiency, and sustainability in a single ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-emerald-500/25 animate-pulse-subtle">
              <span className="flex items-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm hover:scale-105 transform">
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Globe,
                title: "Global",
                desc: "Worldwide access to carbon markets",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: TrendingUp,
                title: "Efficient",
                desc: "Automated and transparent trading",
                color: "from-emerald-500 to-teal-500",
              },
              {
                icon: Sparkles,
                title: "Innovative",
                desc: "Cutting-edge blockchain technology",
                color: "from-purple-500 to-pink-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:bg-white/90 hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{item.desc}</p>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-20 animate-pulse`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Additional animated elements */}
          <div className="mt-16 relative">
            <div className="flex justify-center space-x-8 opacity-60">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"
                  style={{
                    animationDelay: `${i * 200}ms`,
                    animationDuration: "1.5s",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional floating elements */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${10 + ((i * 7) % 80)}%`,
                top: `${15 + ((i * 11) % 70)}%`,
                animationDelay: `${i * 800}ms`,
                animationDuration: `${4 + (i % 3)}s`,
              }}
            >
              <div
                className={`w-${2 + (i % 3)} h-${2 + (i % 3)} bg-gradient-to-r from-emerald-300/30 to-teal-300/30 rounded-full blur-sm`}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
