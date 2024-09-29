import "./globals.css";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import {Outfit} from "next/font/google"

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attributes="class" defaultTheme="system" enableSystem>
          <Header />
            {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
