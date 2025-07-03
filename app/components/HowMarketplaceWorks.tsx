"use client"

import { ArrowRight, Search, ShoppingCart, CheckCircle, BarChart } from "lucide-react"

export default function HowMarketplaceWorks() {
  const steps = [
    {
      icon: Search,
      title: "Explore Credits",
      description: "Browse thousands of verified carbon credit projects from around the world.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: BarChart,
      title: "Analyze Data",
      description: "Use our advanced tools to analyze performance, risks, and opportunities.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: ShoppingCart,
      title: "Place an Order",
      description: "Buy or sell carbon credits with a simple click through smart contracts.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: CheckCircle,
      title: "Automatic Confirmation",
      description: "The blockchain automatically and securely verifies and records your transaction.",
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              How the Marketplace Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple and secure process for carbon credit trading.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-xl">
                <div className="text-center">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </div>

                  <div className="mb-4">
                    <span className="text-sm font-bold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                      Step {index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-emerald-600" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-emerald-500/25">
            Start Trading
          </button>
        </div>
      </div>
    </section>
  )
}
