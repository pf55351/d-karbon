"use client"

import { useEffect, useState } from "react"
import { Shield, Zap, Users, BarChart3, Leaf, Lock } from "lucide-react"

export default function Advantages() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const advantages = [
    {
      icon: Shield,
      title: "Blockchain Security",
      description:
        "Immutable and verifiable transactions on the blockchain, ensuring maximum security and transparency.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Instant Trading",
      description: "Immediate order execution with automated smart contracts and reduced fees.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Global Community",
      description:
        "Connect with traders, companies, and environmental projects from around the world in a unified ecosystem.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Complete dashboard with real-time metrics, interactive charts, and market insights.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Leaf,
      title: "Environmental Impact",
      description: "Every transaction concretely contributes to the reduction of global CO2 emissions.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Lock,
      title: "Total Compliance",
      description: "Full compliance with international carbon credit regulations and ESG standards.",
      color: "from-red-500 to-rose-500",
    },
  ]

  return (
    <section id="advantages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Revolutionary Advantages
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why CarbonX is the preferred choice for carbon credit trading in the decentralized world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`group relative bg-white border border-gray-200 rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-xl ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-none" />

              <div
                className={`w-16 h-16 bg-gradient-to-r ${advantage.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <advantage.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                {advantage.title}
              </h3>

              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {advantage.description}
              </p>

              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${advantage.color} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
