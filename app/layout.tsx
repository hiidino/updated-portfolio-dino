import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandInstagram,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Beams from "@/components/ui/beams";
import { FloatingDock } from "@/components/ui/floating-dock";
import Navbar from "@/components/Navbar"
import CustomCursor from "@/components/CustomCursor";
import Loader from "@/components/Loader";


const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-white/80" />
    ),
    href: "/",
  },
  {
    title: "Instagram",
    icon: (
      <IconBrandInstagram className="h-full w-full text-white/80" />
    ),
    Target: "_blank",
    href: "https://www.instagram.com/hii.dino/",
  },
  {
    title: "Leetcode",
    icon: (
      <IconBrandLeetcode className="h-full w-full text-white/80" />
    ),
    Target: "_blank",
    href: "https://leetcode.com/u/hiidino/",
  },
  {
    title: "LinkedIn",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-white/80" />
    ),
    Target: "_blank",
    href: "https://www.linkedin.com/in/hiidino/",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-white/80" />
    ),
    Target: "_blank",
    href: "https://www.github.com/hiidino",
  },
];

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dino Raj | Full Stack Developer",
  description: "Full Stack Developer specialising in the MERN stack — building fast, scalable, production-grade web applications.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <div style={{ width: "100vw", height: "100vh", position: "relative" }}> */}
        <div className="fixed inset-0 -z-10" aria-hidden="true">
          <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={6}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={0}
          />
        </div>
        <Loader />
        <CustomCursor />
        <Navbar />
        {children}
        <div className="fixed bottom-4 right-4 md:bottom-8 md:left-0 md:right-0 md:flex md:items-center md:justify-center z-50">
          <FloatingDock items={links} />
        </div>
      </body>
    </html>
  );
}
