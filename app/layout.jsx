import "./globals.css";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/chatbot/chat";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import Script from "next/script";

export const metadata = {
  title: "Abdul Samad Siddiqui | Full Stack Developer | AI & Web Technologies Expert",
  description:
    "Abdul Samad Siddiqui is a skilled Full Stack Developer specializing in modern web technologies and AI development. Passionate about creating innovative, scalable solutions with Next.js, React, TypeScript, and cutting-edge AI tools.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `}
        </Script>
      </head>
      <body className={outfit.className}>
        <ThemeProvider attributes="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Chat />
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
