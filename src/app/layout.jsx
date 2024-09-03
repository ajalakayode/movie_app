import { Inter } from "next/font/google";
import "./globals.css";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {SidebarProvider} from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie Show Website",
  description: "Create a Movie Show Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>

          <Navbar/>
        <div className="min-h-screen"> 
               
          {children}
        </div>

        <Footer/>
          </SidebarProvider>
        
      </body>
    </html>
  );
}
