import { Inter} from "next/font/google";
import "./globals.css";
import Header from "../components/header"; // Importing Header component
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter ({subsets: ["latin"]}); // Importing fonts from Google Fonts
export const metadata = {
  title: "MERN Stack Finance App",
  description: "A simple finance app built with the MERN stack",
};

export default function RootLayout({ children }) {
  return (
    /* Adding ClerkProvider */
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className}`}>
          {/* Header Component*/ }
          <Header/>
          <main className = "min-h-screen">
        {children}
        </main>

          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made by Unkown person!!!</p>
              </div>
          </footer>
        
      </body>
    </html>

    </ClerkProvider>
  );
}
