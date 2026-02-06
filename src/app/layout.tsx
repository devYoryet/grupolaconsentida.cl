import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grupo La Consentida | Exportacion de Cerezas y Ciruelas Premium desde Chile",
  description:
    "Exportamos cerezas frescas y ciruelas deshidratadas premium desde el Valle Central de Chile al mundo. Calidad, trazabilidad y excelencia en cada fruto.",
  keywords: [
    "cerezas chilenas",
    "exportacion cerezas",
    "ciruelas deshidratadas",
    "Chilean cherries",
    "dried prunes export",
    "fruit export Chile",
    "Grupo La Consentida",
  ],
  authors: [{ name: "Grupo La Consentida" }],
  openGraph: {
    title: "Grupo La Consentida | Premium Fruit Export from Chile",
    description:
      "We export premium fresh cherries and dried prunes from Chile Central Valley to the world.",
    locale: "es_CL",
    alternateLocale: "en_US",
    type: "website",
    siteName: "Grupo La Consentida",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
