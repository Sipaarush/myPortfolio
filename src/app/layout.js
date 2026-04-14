import "./globals.css";
import { Outfit, JetBrains_Mono } from "next/font/google";
import CustomCursor from "@/components/ui/CustomCursor";

const outfit = Outfit({ subsets: ["latin"] });
const mono = JetBrains_Mono({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${mono.className}`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}