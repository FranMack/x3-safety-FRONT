import { Footer, Navbar } from "@/components";
import { AssistantChat } from "@/components/assistant-chat/AssistantChat";
import { AssistantButton } from "@/components/commons/AssistantButton";
import { envs } from "@/config/envs";
import { AssistantChatContextProvider } from "@/context/assistantChat.contex";
import { FilterProductsContextProvider } from "@/context/filterProduct.context";
import { LanguageContextProvider } from "@/context/language.context";
import { MenuMobileContextProvider } from "@/context/menuMobile.context";
import { ModalOpenContextProvider } from "@/context/modal.context";
import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "X3 Safety - Herramientas de Seguridad y Protección Laboral",
  description:
    "En X3 Safety ofrecemos herramientas diseñadas para mejorar la seguridad de los operarios en entornos laborales peligrosos. Nuestras soluciones ergonómicas previenen accidentes y protegen durante la manipulación de maquinaria y materiales pesados.",
  keywords:
    "herramientas de seguridad, protección laboral, ergonomía, prevención de accidentes, seguridad industrial, protección de operarios, X3 Safety, seguridad en el trabajo",
  robots: "index, follow",
  openGraph: {
    title: "X3 Safety - Herramientas de Seguridad y Protección Laboral",
    description:
      "Descubre las herramientas de X3 Safety, diseñadas para garantizar la seguridad de los operarios en trabajos industriales y peligrosos. Protección, ergonomía y prevención en un solo lugar.",
    images: `${envs.DOMAIN}/favicon.png`,
    url: `${envs.DOMAIN}`,
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "X3 Safety - Herramientas de Seguridad y Protección Laboral",
    description:
      "Protege a tus operarios con las herramientas ergonómicas y seguras de X3 Safety. Diseñadas para prevenir accidentes en trabajos industriales y peligrosos.",
    images: `${envs.DOMAIN}/favicon.png`,
  },
  authors: { name: "X3 Safety", url: `${envs.DOMAIN}` },
    alternates: {
    canonical: `${envs.DOMAIN}`,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// 👇 Agregá esto afuera del export de metadata
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body className={barlow.className}>
        <FilterProductsContextProvider>
          <MenuMobileContextProvider>
            <ModalOpenContextProvider>
              <LanguageContextProvider>
                <Navbar />

                {children}
                <AssistantChatContextProvider>
                  <AssistantButton />
                  <AssistantChat />
                </AssistantChatContextProvider>
                <Footer />
              </LanguageContextProvider>
            </ModalOpenContextProvider>
          </MenuMobileContextProvider>
        </FilterProductsContextProvider>
      </body>
    </html>
  );
}
