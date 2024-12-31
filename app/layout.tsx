import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vikas Portfolio App",
  description: "Vikas kushwah Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
         {/* mobile screen */}
        <div className="fixed bottom-10 right-5 md:hidden z-10">
            <button className="md:bottom-20 md:right-20 p-2 md:p-5 h-10 w-10 md:h-18 md:w-18 text-white rounded-full bg-green-500 hover:bg-green-500/80">
              <Link href='http://wa.me/919027581685' target="_blank">
                <FaWhatsapp size={24} className="md:hidden" />
              </Link>

            </button>
        </div>  
        {/* laptop screen */}
         <div className="fixed hidden bottom-16 right-20 md:block z-10">
            <button
              className="md:bottom-20 md:right-20 md:p-2 h-18 w-18 shadow-2xl rounded-full text-white bg-green-500 hover:bg-green-500/80">
              <Link href="http://wa.me/919027581685" target="_blank">
                <FaWhatsapp size={32} />
              </Link>
            </button>
          </div> 
          <Toaster/>
        </body>
        
    </html>
  );
}
