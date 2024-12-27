"use client";

import { tooggleCookieLanguage } from "@/helpers/cookiesHelpers";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useState } from "react";






interface LanguageContextValue {
  language: string;
  setLanguage: (value: string) => void;
  onToggleLanguage: () => void;
}

interface LanguageContextProviderProps {
  children: ReactNode;
}

const languageContextDefaultValue: LanguageContextValue = {
  language: "spanish",
  setLanguage: () => {},
  onToggleLanguage: () => {},
};

export const LanguageContext = createContext<LanguageContextValue>(
  languageContextDefaultValue
);

export const LanguageContextProvider = ({
  children,
}: LanguageContextProviderProps) => {
  const [language, setLanguage] = useState<string>("spanish");

  const router = useRouter();

  const onToggleLanguage = () => {
    setLanguage(tooggleCookieLanguage() as string);
    router.refresh();
  };

  const value: LanguageContextValue = {
    language: language,
    setLanguage: setLanguage,
    onToggleLanguage: onToggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
