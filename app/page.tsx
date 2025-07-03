import Hero from "./components/Hero"
import Advantages from "./components/Advantages"
import Marketplace from "./components/Marketplace"
import HowMarketplaceWorks from "./components/HowMarketplaceWorks"
import Launchpool from "./components/Launchpool"
import HowLaunchpoolWorks from "./components/HowLaunchpoolWorks"
import Team from "./components/Team"
import Roadmap from "./components/Roadmap"
import DappButtons from "./components/DappButtons"
import Navigation from "./components/Navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Advantages />
      <Marketplace />
      <HowMarketplaceWorks />
      <Launchpool />
      <HowLaunchpoolWorks />
      <Team />
      <Roadmap />
      <DappButtons />
    </div>
  )
}
