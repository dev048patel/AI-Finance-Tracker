import { Inter} from "next/font/google";
import "./globals.css";

const inter = Inter ({subsets: ["latin"]}); // Importing fonts from Google Fonts
export const metadata = {
  title: "MERN Stack Finance App",
  description: "Finance Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}>


          
        {children}
      </body>
    </html>
  );
}
