import Header from "./Layout/Header";
import Hero from "./Layout/Hero";
import CampaignListing from "./CampaignListing";
import AboutSection from "./AboutSection";
import CampaignStats from "./CampaignStats";
import PartnersSection from "./PartnersSection";
import Footer from "./Layout/Footer";
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <CampaignListing />
      <AboutSection />
      <CampaignStats />
      <PartnersSection />
      <Footer />
    </main>
  );
}
