"use client"

import { 
  AboutUs, 
  ContactSection, 
  Footer, 
  HeroSection, 
  Navbar, 
  OurProducts,
  UseCases
 } 
from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <OurProducts />
      <UseCases />
      <ContactSection />
      <Footer />
    </div>
  );
}
