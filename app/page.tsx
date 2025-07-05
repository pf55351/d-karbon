import Advantages from "./components/Advantages"
import DappButtons from "./components/DappButtons"
import Hero from "./components/Hero"
import HowLaunchpoolWorks from "./components/HowLaunchpoolWorks"
import HowMarketplaceWorks from "./components/HowMarketplaceWorks"
import Launchpool from "./components/Launchpool"
import Marketplace from "./components/Marketplace"
import Navigation from "./components/Navigation"
import Roadmap from "./components/Roadmap"
import Team from "./components/Team"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <DappButtons />
        <Advantages />
        <Marketplace />
        <HowMarketplaceWorks />
        <Launchpool />
        <HowLaunchpoolWorks />
        <Team />
        <Roadmap />
      </main>
    </div>
  )
}
