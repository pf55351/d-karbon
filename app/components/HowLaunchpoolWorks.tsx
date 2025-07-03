"use client"

import { Wallet, Lock, Gift, Repeat } from "lucide-react"

export default function HowLaunchpoolWorks() {
  const steps = [
    {
      icon: Wallet,
      title: "Deposit Tokens",
      description: "Deposit your CRB tokens into the pool of your chosen project.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Lock,
      title: "Lock for the Period",
      description: "Your tokens are locked for the duration of the project (30-90 days).",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Gift,
      title: "Earn Rewards",
      description: "Receive daily rewards in the new project's tokens + APY.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Repeat,
      title: "Withdraw Funds",
      description: "At the end of the period, withdraw your original tokens + rewards.",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              How the Launchpool Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple and profitable system to support innovative projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:scale-105 transition-all duration-500 group text-center hover:shadow-xl">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon className="w-10 h-10 text-white" />
                </div>

                <div className="mb-4">
                  <span className="text-sm font-bold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                    {index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Join thousands of investors who are already earning by supporting innovative environmental projects.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-purple-500/25">
            Explore Active Pools
          </button>
        </div>
      </div>
    </section>
  )
}
