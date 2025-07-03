"use client"

import { ExternalLink, Smartphone, Monitor, Wallet } from "lucide-react"

export default function DappButtons() {
  const dappLinks = [
    {
      name: "Web App",
      description: "Access the full platform.",
      icon: Monitor,
      url: "#",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Mobile App",
      description: "Trading on the go.",
      icon: Smartphone,
      url: "#",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Connect Wallet",
      description: "Connect your wallet.",
      icon: Wallet,
      url: "#",
      color: "from-emerald-500 to-teal-500",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Get Started Now
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose how to access the CarbonX platform and start your journey in carbon credit trading.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {dappLinks.map((link, index) => (
            <a key={index} href={link.url} className="group block">
              <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-xl text-center">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${link.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <link.icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                  {link.name}
                </h3>

                <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  {link.description}
                </p>

                <div className="flex items-center justify-center text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300">
                  <span className="mr-2">Access</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Join the Green Revolution</h3>
            <p className="text-xl text-gray-700 mb-8">
              Over 50,000 users have already chosen CarbonX for carbon credit trading.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-emerald-500/25">
                Get Started for Free
              </button>
              <button className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
