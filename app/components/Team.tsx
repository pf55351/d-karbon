"use client"

import { Linkedin, Twitter, Github } from "lucide-react"

export default function Team() {
  const teamMembers = [
    {
      name: "Marco Rossi",
      role: "CEO & Founder",
      bio: "Ex-Goldman Sachs, expert in sustainable finance and blockchain.",
      image: "/placeholder.svg?height=300&width=300",
      social: { linkedin: "#", twitter: "#", github: "#" },
    },
    {
      name: "Elena Bianchi",
      role: "CTO",
      bio: "Senior blockchain developer, formerly at the Ethereum Foundation.",
      image: "/placeholder.svg?height=300&width=300",
      social: { linkedin: "#", twitter: "#", github: "#" },
    },
    {
      name: "Luca Verdi",
      role: "Head of Sustainability",
      bio: "PhD in Environmental Sciences, consultant for the UN.",
      image: "/placeholder.svg?height=300&width=300",
      social: { linkedin: "#", twitter: "#", github: "#" },
    },
    {
      name: "Sofia Neri",
      role: "Head of Marketing",
      bio: "Expert in digital marketing and community building.",
      image: "/placeholder.svg?height=300&width=300",
      social: { linkedin: "#", twitter: "#", github: "#" },
    },
  ]

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A team of passionate experts combining finance, technology, and sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-xl">
                <div className="relative mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-200 group-hover:border-blue-300 transition-colors duration-300"
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {member.bio}
                  </p>

                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.social.linkedin}
                      className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin className="w-5 h-5 text-blue-600" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="w-10 h-10 bg-purple-100 hover:bg-purple-200 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <Twitter className="w-5 h-5 text-purple-600" />
                    </a>
                    <a
                      href={member.social.github}
                      className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <Github className="w-5 h-5 text-gray-600" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
