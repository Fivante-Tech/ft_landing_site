"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Signatures from "@/components/signatures"
import WhyUs from "@/components/why-us"
import SeasonalCarousel from "@/components/seasonal-carousel"
import Menu from "@/components/menu"
import Locations from "@/components/locations"
import Testimonials from "@/components/testimonials"
import SocialMedia from "@/components/social-media"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Lightbox from "@/components/lightbox"

export default function Home() {
  const [currentLang, setCurrentLang] = useState("zh")

  useEffect(() => {
    // Load saved language preference
    const savedLang = localStorage.getItem("lang") || "zh"
    setCurrentLang(savedLang)
  }, [])

  const switchLanguage = (lang: string) => {
    setCurrentLang(lang)
    localStorage.setItem("lang", lang)
    // Smooth scroll to hero section
    const hero = document.getElementById("hero")
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <>
      <a className="skip" href="#main">
        跳到主要内容
      </a>
      <Header currentLang={currentLang} onLanguageSwitch={switchLanguage} />
      <main id="main">
        <Hero currentLang={currentLang} />
        <Signatures currentLang={currentLang} />
        <WhyUs currentLang={currentLang} />
        <SeasonalCarousel currentLang={currentLang} />
        <Menu currentLang={currentLang} />
        <Locations currentLang={currentLang} />
        <Testimonials currentLang={currentLang} />
        <SocialMedia currentLang={currentLang} />
        <Contact currentLang={currentLang} />
      </main>
      <Footer currentLang={currentLang} />
      <Lightbox />
    </>
  )
}
