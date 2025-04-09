import { Poppins } from "next/font/google";
import "./globals.css";

// Define the Poppins font
const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
});

export const metadata = {
  title: "Portfolio - Greychel Ocasio Ortiz",
  description: "",
};

export default function RootLayout({ children }) {
  // Ensure consistent class name on both client and server render
  const poppinsClassName = poppins.className;

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppinsClassName} antialiased leading-8 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
