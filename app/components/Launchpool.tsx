"use client"

import { Rocket, Star, Trophy, Zap } from "lucide-react"

export default function Launchpool() {
  const pools = [
    {
      name: "Green Energy Africa",
      apy: "145%",
      tvl: "$12.4M",
      duration: "30 days",
      status: "Active",
      participants: "2,847",
    },
    {
      name: "Ocean Carbon Capture",
      apy: "89%",
      tvl: "$8.7M",
      duration: "45 days",
      status: "Upcoming",
      participants: "1,923",
    },
    {
      name: "Reforestation Brazil",
      apy: "67%",
      tvl: "$15.2M",
      duration: "60 days",
      status: "Completed",
      participants: "4,156",
    },
  ]

  return (
    <section id="launchpool" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-purple-100 border border-purple-200 rounded-full px-6 py-3">
              <Rocket className="w-5 h-5 text-purple-600" />
              <span className="text-purple-700 font-medium">Innovative Launchpool</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              CarbonX Launchpool
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Participate in the most promising projects and earn exclusive rewards by supporting green innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {pools.map((pool, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-3xl p-8 hover:scale-105 transition-all duration-500 group hover:shadow-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                  {pool.name}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    pool.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : pool.status === "Upcoming"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {pool.status}
                </span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between">
                  <span className="text-gray-600">APY</span>
                  <span className="text-2xl font-bold text-purple-600">{pool.apy}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">TVL</span>
                  <span className="text-gray-900 font-semibold">{pool.tvl}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="text-gray-900 font-semibold">{pool.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Participants</span>
                  <span className="text-gray-900 font-semibold">{pool.participants}</span>
                </div>
              </div>

              <button
                className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  pool.status === "Active"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    : pool.status === "Upcoming"
                      ? "bg-yellow-100 text-yellow-700 border border-yellow-200"
                      : "bg-gray-100 text-gray-600 border border-gray-200 cursor-not-allowed"
                }`}
              >
                {pool.status === "Active"
                  ? "Participate Now"
                  : pool.status === "Upcoming"
                    ? "Coming Soon"
                    : "Completed"}
              </button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Star, title: "Selected Projects", desc: "Only the best environmental projects." },
            { icon: Trophy, title: "Exclusive Rewards", desc: "High APYs and bonus tokens." },
            { icon: Zap, title: "Early Access", desc: "Be the first to access new features." },
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
