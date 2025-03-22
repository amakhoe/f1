import type { Metadata } from "next";
import "./globals.css";




export const metadata: Metadata = {
  title: "Amakhoe Karuseb",
  description: "Template created by Amakhoe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className="antialiased bg-[#EAEEFE]">
        {children}
      </body>
    </html>
  );
}
