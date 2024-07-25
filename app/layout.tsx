import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import ToasterProvider from "@/components/providers/ToasterProvider";


const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Biocelab Academy Cursos Profesionales ",
  description: "Desarrollado por kRsoporte",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="es" suppressHydrationWarning>
        <body className={inter.className}>
          <ToasterProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
