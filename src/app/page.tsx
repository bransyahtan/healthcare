"use client";

import ArticleSection from "@/components/pages/home/ArticleSection";
import DoctorSection from "@/components/pages/home/DoctorSection";
import HeroSection from "@/components/pages/home/HeroSection";
import LocationSection from "@/components/pages/home/LocationSection";
import ServiceSection from "@/components/pages/home/ServiceSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServiceSection />
      <DoctorSection />
      <LocationSection />
      <ArticleSection />
    </main>
  );
}
