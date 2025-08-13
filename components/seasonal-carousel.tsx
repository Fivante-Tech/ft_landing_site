"use client"

import { useEffect, useRef, useState } from "react"

interface SeasonalCarouselProps {
  currentLang: string
}

export default function SeasonalCarousel({ currentLang }: SeasonalCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null)

  const text = {
    zh: { title: "当季限定" },
    en: { title: "Seasonal Limited" },
  }

  const t = text[currentLang as keyof typeof text]

  const slides = [
    { image: "/assets/season1.webp", caption: "Camellia Oolong · 山茶花海", alt: "Camellia Oolong Milk Tea 海报" },
    { image: "/assets/season2.webp", caption: "Da Hong Pao · 一袭红袍", alt: "Da Hong Pao Milk Tea 海报" },
    { image: "/assets/season3.webp", caption: "Autumn Black · 如烟知秋", alt: "Autumn Black Milk Tea 海报" },
    {
      image: "/assets/season4.webp",
      caption: "White Peach Oolong · 陌上白桃",
      alt: "White Peach Oolong Milk Tea 海报",
    },
    { image: "/assets/season5.webp", caption: "Jasmine Green · 悠悠茉绿", alt: "Jasmine Green Milk Tea 海报" },
  ]

  const DURATION = 5000

  const goToSlide = (index: number) => {
    const newIndex = (index + slides.length) % slides.length
    setCurrentIndex(newIndex)

    if (scrollerRef.current) {
      const slideWidth = scrollerRef.current.clientWidth
      scrollerRef.current.scrollTo({
        left: newIndex * slideWidth,
        behavior: "smooth",
      })
    }

    restartTimer()
  }

  const restartTimer = () => {
    // Clear existing timers
    if (timerRef.current) clearInterval(timerRef.current)
    if (progressTimerRef.current) clearInterval(progressTimerRef.current)

    // Reset progress
    setProgress(0)

    // Start progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 100 / (DURATION / 50)
      })
    }, 50)

    progressTimerRef.current = progressInterval

    // Start slide timer
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % slides.length
        if (scrollerRef.current) {
          const slideWidth = scrollerRef.current.clientWidth
          scrollerRef.current.scrollTo({
            left: next * slideWidth,
            behavior: "smooth",
          })
        }
        return next
      })
      setProgress(0)
    }, DURATION)
  }

  useEffect(() => {
    restartTimer()

    const handleResize = () => {
      if (scrollerRef.current) {
        const slideWidth = scrollerRef.current.clientWidth
        scrollerRef.current.scrollTo({
          left: currentIndex * slideWidth,
          behavior: "auto",
        })
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
      if (progressTimerRef.current) clearInterval(progressTimerRef.current)
      window.removeEventListener("resize", handleResize)
    }
  }, [currentIndex])

  const handlePointerDown = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    if (progressTimerRef.current) clearInterval(progressTimerRef.current)
  }

  const handlePointerUp = () => {
    restartTimer()
  }

  return (
    <section
      className="py-12 md:py-18 max-w-[clamp(280px,92vw,1180px)] mx-auto px-4 relative"
      aria-labelledby="seasonal-title"
    >
      <div className="flex items-end justify-between gap-3 mb-6">
        <h2 id="seasonal-title" className="text-2xl md:text-3xl font-bold font-serif">
          {t.title}
        </h2>
      </div>

      <div className="h-1 bg-[var(--color-line)] rounded-full overflow-hidden mb-3" aria-hidden="true">
        <div
          className="h-full bg-[var(--color-gold)] transition-all duration-75 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-0 overflow-x-auto scroll-snap-x-mandatory pb-2 hide-scrollbar"
        aria-label="季节限定主图轮播"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        {slides.map((slide, index) => (
          <figure
            key={index}
            className="min-w-full scroll-snap-align-start border border-[var(--color-line)] rounded-3xl overflow-hidden shadow-[var(--shadow-sm)] bg-[var(--color-bg)] relative"
          >
            <img src={slide.image || "/placeholder.svg"} alt={slide.alt} className="w-full aspect-video object-cover" />
            <figcaption className="absolute left-3 bottom-3 bg-[rgba(0,0,0,0.36)] text-white px-3 py-2 rounded-full font-bold text-sm">
              {slide.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="flex justify-between items-center mt-2">
        <div className="flex gap-2" aria-label="轮播定位点">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full border transition-all ${
                index === currentIndex
                  ? "bg-[var(--color-gold)] border-transparent"
                  : "border-[var(--color-line)] bg-transparent opacity-60"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`第${index + 1}张`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            className="inline-flex items-center gap-2 px-3 py-2 rounded-full font-semibold border border-[var(--color-line)] transition-all hover:-translate-y-0.5"
            onClick={() => goToSlide(currentIndex - 1)}
            aria-label="上一张"
          >
            ‹
          </button>
          <button
            className="inline-flex items-center gap-2 px-3 py-2 rounded-full font-semibold border border-[var(--color-line)] transition-all hover:-translate-y-0.5"
            onClick={() => goToSlide(currentIndex + 1)}
            aria-label="下一张"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
