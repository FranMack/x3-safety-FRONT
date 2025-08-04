<<<<<<< HEAD
import { AboutUs, Contact, Hero, Products } from "@/components";
import { AssistantChat } from "@/components/assistant-chat/AssistantChat";
=======
import {
   AboutUs,
  Contact,
  Hero,
  Products,
  /*WhatsUpButton,*/
} from "@/components";
>>>>>>> ae21bdb8e73ab522ea86068aafc8f2c77098aff3

import { IndustryBanner } from "@/components/commons";
import { AssistantButton } from "@/components/commons/AssistantButton";
import { AssistantChatContextProvider } from "@/context/assistantChat.contex";

export default function Home() {
  return (
    <main className="bg-gray-100 overflow-x-hidden">
<<<<<<< HEAD
      <AssistantChatContextProvider>
        <AssistantButton />
        <AssistantChat />
      </AssistantChatContextProvider>
=======
    {  /*<WhatsUpButton />*/}
>>>>>>> ae21bdb8e73ab522ea86068aafc8f2c77098aff3
      <Hero />
      <Products />
      <AboutUs />
      <IndustryBanner />
      <Contact />
    </main>
  );
}
