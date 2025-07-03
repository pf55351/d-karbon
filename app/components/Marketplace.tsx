"use client"

import { useState } from "react"
import { TrendingUp, TrendingDown, DollarSign, BarChart3, Search } from "lucide-react"

export default function Marketplace() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const marketData = [
    {
      id: 1,
      name: "Amazon Reforestation",
      category: "Forestry",
      price: 45.2,
      change: 12.5,
      volume: "2.4M",
      marketCap: "125M",
      country: "Brazil",
      verified: true,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      name: "India Solar Energy",
      category: "Renewable",
      price: 38.9,
      change: 8.3,
      volume: "1.8M",
      marketCap: "89M",
      country: "India",
      verified: true,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      name: "Direct CO2 Capture",
      category: "Technology",
      price: 67.5,
      change: 15.2,
      volume: "950K",
      marketCap: "156M",
      country: "USA",
      verified: true,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 4,
      name: "Europe Reforestation",
      category: "Forestry",
      price: 42.1,
      change: 6.7,
      volume: "1.2M",
      marketCap: "78M",
      country: "Germany",
      verified: true,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 5,
      name: "Offshore Wind",
      category: "Renewable",
      price: 52.3,
      change: -2.1,
      volume: "2.1M",
      marketCap: "198M",
      country: "Denmark",
      verified: true,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 6,
      name: "Agricultural Biogas",
      category: "Agriculture",
      price: 29.8,
      change: 4.2,
      volume: "680K",
      marketCap: "45M",
      country: "Netherlands",
      verified: false,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const categories = ["all", "Forestry", "Renewable", "Technology", "Agriculture"]

  const filteredData = marketData.filter((item) => {
    const matchesCategory = activeFilter === "all" || item.category === activeFilter
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section id="marketplace" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Carbon Credit Marketplace</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore and invest in the best verified carbon credit projects globally.
          </p>
        </div>

        {/* Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Volume</p>
                <p className="text-2xl font-bold text-gray-900">$847.2M</p>
                <p className="text-sm text-green-600">+23.5% this month</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <BarChart3 className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Price</p>
                <p className="text-2xl font-bold text-gray-900">$48.65</p>
                <p className="text-sm text-blue-600">Per ton of CO2</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Projects</p>
                <p className="text-2xl font-bold text-gray-900">1,247</p>
                <p className="text-sm text-purple-600">In 45 countries</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">CO2 Offset</p>
                <p className="text-2xl font-bold text-gray-900">12.4M</p>
                <p className="text-sm text-emerald-600">Tons this year</p>
              </div>
              <div className="p-3 bg-emerald-100 rounded-full">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeFilter === category
                      ? "bg-emerald-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category === "all" ? "All" : category}
                </button>
              ))}
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Market Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
            >
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">{item.category}</span>
                        {item.verified && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Verified
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{item.country}</span>
                </div>

                <div className="space-y-3 flex-grow">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Price</span>
                    <span className="text-lg font-bold text-gray-900">${item.price.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">24h Change</span>
                    <div
                      className={`flex items-center space-x-1 ${item.change >= 0 ? "text-green-600" : "text-red-600"}`}
                    >
                      {item.change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                      <span className="text-sm font-medium">
                        {item.change >= 0 ? "+" : ""}
                        {item.change.toFixed(1)}%
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Volume</span>
                    <span className="text-sm font-medium text-gray-900">{item.volume}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Market Cap</span>
                    <span className="text-sm font-medium text-gray-900">${item.marketCap}</span>
                  </div>
                </div>

                <div className="mt-6 flex space-x-3">
                  <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200">
                    Buy
                  </button>
                  <button className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors duration-200">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found for the selected filters.</p>
          </div>
        )}
      </div>
    </section>
  )
}
