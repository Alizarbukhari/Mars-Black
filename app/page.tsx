import PartnersSection from "./components/services/partner-section"
import PartnersGrid from "./components/services/PartnersGrid"
import ServicesSection from "./components/services/services-section"
export default function Home() {
  return (
    <main>
      {/* Other sections */}
      <ServicesSection />
      <PartnersGrid />
      {/* <PartnersSection /> */}
      {/* Other sections */}
    </main>
  )
}

