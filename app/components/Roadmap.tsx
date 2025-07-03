"use client"

import { useState, useEffect } from "react"
import { CheckCircle, Circle, Star, Zap, Rocket } from "lucide-react"

export default function Roadmap() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [activeItem, setActiveItem] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.3 },
    )

    const elements = document.querySelectorAll(".roadmap-item")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const roadmapItems = [
    {
      quarter: "Q1 2024",
      title: "Platform Launch",
      description: "Release of the marketplace beta version.",
      status: "completed",
      items: ["Smart contracts audit", "Beta testing", "Community building"],
      icon: CheckCircle,
      color: "from-green-500 to-emerald-500",
    },
    {
      quarter: "Q2 2024",
      title: "Global Marketplace",
      description: "International expansion and new partnerships.",
      status: "completed",
      items: ["50+ projects integration", "KYC/AML compliance", "Mobile app"],
      icon: CheckCircle,
      color: "from-green-500 to-emerald-500",
    },
    {
      quarter: "Q3 2024",
      title: "Launchpool Launch",
      description: "Introduction of the staking and rewards system.",
      status: "current",
      items: ["Staking mechanism", "Governance token", "DAO implementation"],
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
    },
    {
      quarter: "Q4 2024",
      title: "AI Integration",
      description: "AI algorithms for trading optimization.",
      status: "upcoming",
      items: ["Price prediction AI", "Risk assessment", "Auto-trading bots"],
      icon: Rocket,
      color: "from-purple-500 to-pink-500",
    },
    {
      quarter: "Q1 2025",
      title: "Cross-Chain",
      description: "Multi-blockchain support and interoperability.",
      status: "upcoming",
      items: ["Ethereum bridge", "Polygon integration", "BSC support"],
      icon: Circle,
      color: "from-blue-500 to-cyan-500",
    },
    {
      quarter: "Q2 2025",
      title: "Enterprise Suite",
      description: "Dedicated solutions for large companies.",
      status: "upcoming",
      items: ["Corporate dashboard", "Bulk trading", "Custom reporting"],
      icon: Circle,
      color: "from-indigo-500 to-purple-500",
    },
  ]

  const getStatusIcon = (status: string, IconComponent: any) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-8 h-8 text-green-600" />
      case "current":
        return <Zap className="w-8 h-8 text-yellow-600 animate-pulse" />
      default:
        return <IconComponent className="w-8 h-8 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-50 border-green-200"
      case "current":
        return "bg-yellow-50 border-yellow-200 animate-pulse-border"
      default:
        return "bg-gray-50 border-gray-200"
    }
  }

  return (
    <section id="roadmap" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-yellow-100 border border-yellow-200 rounded-full px-6 py-3">
              <Star className="w-5 h-5 text-yellow-600" />
              <span className="text-yellow-700 font-medium">Roadmap 2024-2025</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Our Vision
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A clear path towards the future of carbon credit trading.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 via-yellow-400 to-gray-400 rounded-full" />

          <div className="space-y-16">
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className={`roadmap-item flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                data-index={index}
                onMouseEnter={() => setActiveItem(index)}
                onMouseLeave={() => setActiveItem(null)}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                  <div
                    className={`${getStatusColor(item.status)} border rounded-3xl p-8 transition-all duration-700 group cursor-pointer ${
                      visibleItems.includes(index)
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-10 scale-95"
                    } ${activeItem === index ? "scale-105 shadow-xl" : "hover:scale-102 hover:shadow-lg"}`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm font-bold text-yellow-700 bg-yellow-100 px-4 py-2 rounded-full">
                        {item.quarter}
                      </span>
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center`}
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                      {item.description}
                    </p>

                    <ul className="space-y-3">
                      {item.items.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-all duration-300"
                        >
                          <div className={`w-3 h-3 bg-gradient-to-r ${item.color} rounded-full mr-3`} />
                          {subItem}
                        </li>
                      ))}
                    </ul>

                    {/* Progress Bar for Current Item */}
                    {item.status === "current" && (
                      <div className="mt-6">
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>Progress</span>
                          <span>65%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full"
                            style={{ width: "65%" }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Central Timeline Node */}
                <div className="relative z-20">
                  <div
                    className={`w-20 h-20 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${
                      item.status === "completed"
                        ? "bg-green-500 border-green-400"
                        : item.status === "current"
                          ? "bg-yellow-500 border-yellow-400"
                          : "bg-gray-400 border-gray-300"
                    } ${visibleItems.includes(index) ? "scale-100" : "scale-0"} ${
                      activeItem === index ? "scale-125 shadow-xl" : ""
                    }`}
                    style={{ transitionDelay: `${index * 200 + 300}ms` }}
                  >
                    {getStatusIcon(item.status, item.icon)}
                  </div>
                </div>

                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
