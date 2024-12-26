import { Footer, Navbar } from "@/components";
import { FilterProductsContextProvider } from "@/context/filterProduct.context";
import { MenuMobileContextProvider } from "@/context/menuMobile.context";
import { ModalOpenContextProvider } from "@/context/modal.context";
import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

const roboto = Barlow({
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

  // Open Graph Meta Tags
  openGraph: {
    title: "X3 Safety - Herramientas de Seguridad y Protección Laboral",
    description:
      "Descubre las herramientas de X3 Safety, diseñadas para garantizar la seguridad de los operarios en trabajos industriales y peligrosos. Protección, ergonomía y prevención en un solo lugar.",
    images: "https://x3safety.com/imagen-producto.jpg", // Cambia esta URL por una imagen representativa de tu producto o marca.
    url: "https://x3safety.com",
    type: "website",
    locale: "es_ES",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "X3 Safety - Herramientas de Seguridad y Protección Laboral",
    description:
      "Protege a tus operarios con las herramientas ergonómicas y seguras de X3 Safety. Diseñadas para prevenir accidentes en trabajos industriales y peligrosos.",
    images: "https://x3safety.com/imagen-producto.jpg", // Cambia esta URL por una imagen representativa de tu producto o marca.
  },

  viewport: "width=device-width, initial-scale=1.0", // Optimización para dispositivos móviles.

  // Author information
  authors: { name: "X3 Safety", url: "https://x3safety.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={roboto.className}>
        <FilterProductsContextProvider>
          <MenuMobileContextProvider>
            <ModalOpenContextProvider>
              <Navbar />

              {children}
              <Footer />
            </ModalOpenContextProvider>
          </MenuMobileContextProvider>
        </FilterProductsContextProvider>
      </body>
    </html>
  );
}
