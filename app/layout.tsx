import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CarbonX - Revolutionize the Carbon Market",
  description:
    "The first decentralized platform for CO2 credit trading with blockchain technology. Transparency, efficiency, and sustainability.",
  keywords: "carbon credits, blockchain, trading, sustainability, CO2, marketplace, launchpool",
  openGraph: {
    title: "CarbonX - Revolutionize the Carbon Market",
    description: "The first decentralized platform for CO2 credit trading",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
