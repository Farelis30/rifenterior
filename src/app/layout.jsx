import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rifenterior - Interior Design",
  description:
    "I'm Arif and i am interior designer with a passion for creating beautiful and comfortable living spaces.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary-900`}>
        {children}
        <Navbar />
      </body>
    </html>
  );
}
