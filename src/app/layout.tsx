import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Los escritos de Inmanar",
  description: "Un viaje épico a través de las leyendas y misterios de un mundo ancestral",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${cinzel.variable} antialiased`}>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
