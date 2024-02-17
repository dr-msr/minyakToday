import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";


const inter = Inter({ subsets: ["latin"] });

export const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
  })



export const metadata: Metadata = {
  title: "Minyak.Today",
  description: "Calculate And Track Your Fuel Consumption",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased",fontSans.variable)}>{children}        
	  <Toaster />
</body>
    </html>
  );
}