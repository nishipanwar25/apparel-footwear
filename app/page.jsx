"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FusorumRoleSection from "@/components/fusorum-role-section"
import ProfitabilitySection from "@/components/profitability-section"
import KeyFeaturesSection from "@/components/key-features-section"
import WhyChooseSection from "@/components/why-choose-section"
import IndustriesServedSection from "@/components/industries-served-section"

export default function Home() {
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({ ...prev, [entry.target.id]: entry.isIntersecting }))
        })
      },
      { threshold: 0.2 },
    )

    const sections = document.querySelectorAll("section[id^='animate-']")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="overflow-hidden">
      <Header />
      <main>
        <HeroSection isVisible={isVisible} />
        <FusorumRoleSection isVisible={isVisible} />
        <ProfitabilitySection isVisible={isVisible} />
        <KeyFeaturesSection isVisible={isVisible} />
        <WhyChooseSection isVisible={isVisible} />
        <IndustriesServedSection isVisible={isVisible} />
      </main>
    </div>
  )
}
