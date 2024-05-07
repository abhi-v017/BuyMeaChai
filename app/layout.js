import { Inter, Noto_Sans_Bassa_Vah } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Buy me a chai",
  description: "Fund your project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="min-h-[80vh]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
