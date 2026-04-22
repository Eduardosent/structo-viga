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
  title: "Structoviga | Soluciones de Estructura en El Salvador",
  description: "Expertos en diseño y montaje de estructuras metálicas y construcción civil en El Salvador y Centroamérica.",
  icons: {
    icon: "/favicon.ico",
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
