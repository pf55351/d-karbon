import { Calendar, ExternalLink, MapPin, Star } from "lucide-react"
import Image from "next/image"

const Marketplace = () => {
  const carbonCredits = [
    {
      id: 1,
      title: "Amazon Rainforest Conservation",
      location: "Brazil",
      price: "45.50",
      rating: 4.9,
      verified: true,
      image: "https://images.pexels.com/photos/975771/pexels-photo-975771.jpeg?auto=compress&cs=tinysrgb&w=400",
      co2Offset: "1.2",
      projectType: "Forest Conservation",
      vintage: "2024",
    },
    {
      id: 2,
      title: "Solar Farm Initiative",
      location: "California, USA",
      price: "38.75",
      rating: 4.8,
      verified: true,
      image: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=400",
      co2Offset: "0.8",
      projectType: "Renewable Energy",
      vintage: "2024",
    },
    {
      id: 3,
      title: "Wind Energy Project",
      location: "Denmark",
      price: "42.20",
      rating: 4.7,
      verified: true,
      image: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=400",
      co2Offset: "1.5",
      projectType: "Wind Energy",
      vintage: "2024",
    },
  ]

  return (
    <section id="marketplace" className="bg-white py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            DKarbon
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
              {" "}
              Marketplace
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
            Discover and trade verified carbon credits from projects around the world. Each credit represents real
            environmental impact.
          </p>
        </div>
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {carbonCredits.map((credit) => (
            <div
              key={credit.id}
              className="group transform overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-800 dark:bg-gray-800/50 dark:hover:border-gray-700"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={credit.image || "/placeholder.svg"}
                  alt={credit.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-medium text-white">Verified</span>
                </div>
                <div className="absolute right-4 top-4">
                  <div className="flex items-center rounded-full bg-white/90 px-2 py-1 backdrop-blur-sm dark:bg-gray-900/70 dark:text-white">
                    <Star className="mr-1 h-4 w-4 fill-current text-yellow-400" />
                    <span className="text-sm font-medium">{credit.rating}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <MapPin className="mr-1 h-4 w-4" />
                  {credit.location}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900 transition-colors group-hover:text-green-600 dark:text-white dark:group-hover:text-green-400">
                  {credit.title}
                </h3>
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">${credit.price}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">per ton CO₂</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-green-600 dark:text-green-400">{credit.co2Offset}t</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">CO₂ offset</div>
                  </div>
                </div>
                <div className="mb-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span className="rounded-full bg-gray-100 px-3 py-1 dark:bg-gray-700 dark:text-gray-300">
                    {credit.projectType}
                  </span>
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    {credit.vintage}
                  </div>
                </div>
                <button className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 py-3 font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg">
                  Trade Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="rounded-full border-2 border-green-500 bg-transparent px-8 py-3 font-semibold text-green-600 transition-colors hover:bg-green-500 hover:text-white dark:text-green-400 dark:border-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900">
            View All Credits
          </button>
        </div>
      </div>
    </section>
  )
}

export default Marketplace
