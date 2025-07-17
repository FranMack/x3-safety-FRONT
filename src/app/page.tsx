import { AboutUs, Contact, Hero, Products } from "@/components";
import { AssistantChat } from "@/components/assistant-chat/AssistantChat";

import { IndustryBanner } from "@/components/commons";
import { AssistantButton } from "@/components/commons/AssistantButton";
import { AssistantChatContextProvider } from "@/context/assistantChat.contex";

export default function Home() {
  return (
    <main className="bg-gray-100 overflow-x-hidden">
      <AssistantChatContextProvider>
        <AssistantButton />
        <AssistantChat />
      </AssistantChatContextProvider>
      <Hero />
      <Products />
      <AboutUs />
      <IndustryBanner />
      <Contact />
    </main>
  );
}
