import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ProjectDetailsContextProvider from "@/context/project-details-context";
import ProjectDetails from "@/components/project-details";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juan María | Portfolio Personal",
  description: "Juan María es un desarrollador web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative sm:pt-0 text-secondary text-opacity-90`}
      >
        <ActiveSectionContextProvider>
          <ProjectDetailsContextProvider>
            <Header />
            {children}
            <ProjectDetails />
          </ProjectDetailsContextProvider>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
