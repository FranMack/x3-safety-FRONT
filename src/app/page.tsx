import {
  Banner,
  Contact,
  Hero,
  Products,
  Safety,
  WhatsUpButton,
} from "@/components";

import { IndustryBanner } from "@/components/commons";

export default function Home() {
  return (
    <main className="bg-gray-100">
      <WhatsUpButton />
      <Hero />
      <Products />
      <Safety />
      <IndustryBanner/>
      <Contact />
    </main>
  );
}
