"use client";

import { AssistantChatContext } from "@/context/assistantChat.contex";
import Image from "next/image";
import { useContext } from "react";
export const AssistantButton = () => {
  const { assistantChat, toggleAssistantChat } =
    useContext(AssistantChatContext);
  return (
    <div
      title="Asistente virtual"
      onClick={toggleAssistantChat}
      className={`xs:h-[50px] lg:h-[70px] aspect-square rounded-full bg-primary fixed  xs:bottom-20 lg:bottom-32 xs:right-5 right-10 flex justify-center items-center z-50  hover hover:scale-110 transition-transform duration-1000 ${
        assistantChat ? "invisible" : ""
      }`}
    >
      <div className="xs:h-[35px] lg:h-[55px] aspect-square relative ">
        <Image
          fill
          className="object-cover animate-jumping"
          src="/chatbot-webp"
          alt="whats up image"
        />
      </div>
    </div>
  );
};
