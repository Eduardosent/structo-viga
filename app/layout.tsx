import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getAppMessages, getUserLocale } from "@/config/locale";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Título: Directo al producto y ubicación.
  title: "Structoviga | Venta y Elaboración de Vigas y Columnas en El Salvador",
  
  // Descripción: Corregida. Solo hacer y vender lo que especificaste, sin palabras de más.
  description: "Hacemos y vendemos estructuras metálicas, vigas y columnas en El Salvador para tus proyectos de construcción.",
  
  // Palabras clave directas con los términos reales
  keywords: [
    "Structoviga El Salvador",
    "Venta de vigas",
    "Columnas de acero",
    "Hacer estructuras metálicas",
    "Vigas de hierro",
    "Columnas metálicas"
  ],

  // Open Graph
  openGraph: {
    title: "Structoviga | Vigas, Columnas y Estructuras Metálicas",
    description: "Elaboración y venta de vigas y columnas para la construcción en El Salvador.",
    url: "https://structoviga.com", 
    siteName: "Structoviga",
    locale: "es_SV",
    type: "website",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Vigas y columnas de acero Structoviga",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Structoviga | Estructuras Metálicas",
    description: "Hacemos y vendemos vigas y columnas en El Salvador.",
    images: ["/og-image.png"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const locale = await getUserLocale();
  const messages = await getAppMessages(locale);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
