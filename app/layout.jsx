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

export const metadata = {
  title: "Abdul Samad Siddiqui | Full Stack Developer | React & Next.js Expert",
  description:
    "Abdul Samad Siddiqui is a Full Stack Developer with expertise in React and Next.js. I am passionate about building scalable and user-friendly applications.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
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
