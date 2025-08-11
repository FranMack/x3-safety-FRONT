import { AboutUs, Contact, Hero, Products } from "@/components";
import { IndustryBanner } from "@/components/commons";

export default function Home() {
  return (
    <main className="bg-gray-100 overflow-x-hidden">
      {/*<WhatsUpButton />*/}
      <Hero />
      <Products />
      <AboutUs />
      <IndustryBanner />
      <Contact />
    </main>
  );
}
