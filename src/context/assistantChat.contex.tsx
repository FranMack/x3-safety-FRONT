"use client";

import { createContext, ReactNode, useState } from "react";

interface AssistantChatContextValue {
  assistantChat: boolean;
  setAssistantChat: (value: boolean) => void;
  toggleAssistantChat: () => void;
}

interface AssistantChatContextProviderProps {
  children: ReactNode;
}

const assistantChatContextDefaultValue: AssistantChatContextValue = {
  assistantChat: false,
  setAssistantChat: () => {},
  toggleAssistantChat: () => {},
};

export const AssistantChatContext = createContext<AssistantChatContextValue>(
  assistantChatContextDefaultValue
);

export const AssistantChatContextProvider = ({
  children,
}: AssistantChatContextProviderProps) => {
  const [assistantChat, setAssistantChat] = useState<boolean>(false);

  const toggleAssistantChat = () => {
    setAssistantChat(!assistantChat);
  };

  const value: AssistantChatContextValue = {
    assistantChat: assistantChat,
    setAssistantChat: setAssistantChat,
    toggleAssistantChat: toggleAssistantChat,
  };

  return (
    <AssistantChatContext.Provider value={value}>
      {children}
    </AssistantChatContext.Provider>
  );
};
