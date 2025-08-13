"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export default function HomePage() {
  const [currentLang, setCurrentLang] = useState("zh")
  const [currentSlide, setCurrentSlide] = useState(0)
  const [lightboxSrc, setLightboxSrc] = useState("")
  const carouselRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<NodeJS.Timeout>()

  const seasonalSlides = [
    { src: "/camellia-oolong-milk-tea-poster.png", caption: "Camellia Oolong · 山茶花海" },
    { src: "/da-hong-pao-milk-tea-poster.png", caption: "Da Hong Pao · 一袭红袍" },
    { src: "/autumn-black-milk-tea-poster.png", caption: "Autumn Black · 如烟知秋" },
    { src: "/white-peach-oolong-milk-tea-poster.png", caption: "White Peach Oolong · 陌上白桃" },
    { src: "/jasmine-green-milk-tea-poster.png", caption: "Jasmine Green · 悠悠茉绿" },
  ]

  useEffect(() => {
    const saved = localStorage.getItem("lang") || "zh"
    setCurrentLang(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem("lang", currentLang)
  }, [currentLang])

  useEffect(() => {
    startCarousel()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  const switchLanguage = (lang: string) => {
    setCurrentLang(lang)
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const startCarousel = () => {
    if (progressRef.current) {
      progressRef.current.style.transition = "none"
      progressRef.current.style.width = "0%"
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (progressRef.current) {
            progressRef.current.style.transition = "width 5000ms linear"
            progressRef.current.style.width = "100%"
          }
        })
      })
    }

    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % seasonalSlides.length)
    }, 5000)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.clientWidth
      carouselRef.current.scrollTo({
        left: index * slideWidth,
        behavior: "smooth",
      })
    }
    startCarousel()
  }

  const openLightbox = (src: string) => {
    setLightboxSrc(src)
  }

  const closeLightbox = () => {
    setLightboxSrc("")
  }

  const T = ({ zh, en }: { zh: string; en: string }) => <span>{currentLang === "zh" ? zh : en}</span>

  return (
    <>
      <a className="skip" href="#main">
        跳到主要内容
      </a>

      <header className="sticky top-0 backdrop-blur-md bg-[color-mix(in_oklab,var(--color-bg)_80%,transparent)] border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between gap-4 h-16">
          <div className="flex items-center gap-3">
            <div className="font-extrabold tracking-wide font-serif">Fufootea 茶满满</div>
          </div>

          <nav className="hidden md:block">
            <ul className="flex gap-5 list-none p-0 m-0">
              <li>
                <a href="#hero" className="opacity-90 hover:opacity-100">
                  <T zh="品牌故事" en="Story" />
                </a>
              </li>
              <li>
                <a href="#menu" className="opacity-90 hover:opacity-100">
                  <T zh="菜单" en="Menu" />
                </a>
              </li>
              <li>
                <a href="#locations" className="opacity-90 hover:opacity-100">
                  <T zh="门店" en="Locations" />
                </a>
              </li>
              <li>
                <a href="#contact" className="opacity-90 hover:opacity-100">
                  <T zh="联系" en="Contact" />
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex gap-2">
            <button
              onClick={() => switchLanguage("zh")}
              className={`border border-gray-200 bg-transparent rounded-full w-11 h-9 flex items-center justify-center cursor-pointer font-bold transition-all duration-200 ${currentLang === "zh" ? "bg-[#c6a25c] text-white border-[#c6a25c]" : "hover:border-[#c6a25c]"}`}
              aria-label="切换中文"
            >
              中
            </button>
            <button
              onClick={() => switchLanguage("en")}
              className={`border border-gray-200 bg-transparent rounded-full w-11 h-9 flex items-center justify-center cursor-pointer font-bold transition-all duration-200 ${currentLang === "en" ? "bg-[#c6a25c] text-white border-[#c6a25c]" : "hover:border-[#c6a25c]"}`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <main id="main">
        <section id="hero" className="py-12 md:py-24 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex gap-2 mb-4 flex-wrap">
                <div className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-sm bg-[rgba(198,162,92,0.12)]">
                  #MuslimFriendly
                </div>
                <div className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded-full text-sm bg-[rgba(198,162,92,0.12)]">
                  #localbrand
                </div>
              </div>
              <h1 className="display text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                <T zh="好茶·不将就·" en="Be Real to Fruits & Tea" />
              </h1>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                <T
                  zh="FufooTea 源自马来西亚的本地品牌，专注于奉上用心手作的好茶——以诚意、温度与真材实料酿煮而成。我们坚持真实：每一杯都是真水果、真茶叶，也是真热爱。自第一杯调配起，我们始终不忘初心——以自然而单纯的风味，做让人身心舒畅的好喝饮品，与爱茶的你分享美好。欢迎来到 FufooTea，保持真实，畅快喝茶。💛"
                  en="FufooTea is a proudly Malaysian local brand, dedicated to serving the finest handcrafted tea — brewed with honesty, heart, and real ingredients. We believe in keeping it real: real fruits, real tea, and real passion in every cup. 🍵✨ From our very first blend, we've stayed true to our roots — creating refreshing, feel-good drinks that celebrate the simplicity of natural flavors and the joy of sharing good tea with good people. Welcome to FufooTea. Stay real, sip happy. 💛"
                />
              </p>
            </div>
            <div
              className="hero-stage cursor-zoom-in"
              style={
                { "--hero": "url(/placeholder.svg?height=600&width=800&query=Fufootea tea shop cover image)" } as any
              }
              onClick={() => openLightbox("/fufootea-tea-shop-cover.png")}
            />
          </div>
        </section>

        <section className="py-12 md:py-18 container mx-auto px-4">
          <div className="flex items-end justify-between gap-3 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold font-serif">
              <T zh="招牌单品" en="Signatures" />
            </h2>
            <a
              className="inline-flex items-center gap-2 px-4 py-3 rounded-full font-semibold border border-gray-200 transition-all duration-200 hover:-translate-y-0.5"
              href="#menu"
            >
              <T zh="全部饮品 →" en="All Drinks →" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <article className="card">
              <Image
                src="/pekan-nanas-pineapple-drink.png"
                alt="Pekan Nanas"
                width={320}
                height={400}
                className="w-full aspect-[4/5] object-cover cursor-zoom-in"
                onClick={() => openLightbox("/pekan-nanas-pineapple-drink.png")}
              />
              <div className="p-4">
                <h3 className="font-semibold mb-1">
                  <T zh="北干那那 · 凤梨" en="Pekan Nanas · Pineapple" />
                </h3>
                <div className="font-bold">MYR 11.99</div>
              </div>
            </article>
            <article className="card">
              <Image
                src="/prosperity-persimmon-peanut-drink.png"
                alt="Prosperity Persimmon Peanut"
                width={320}
                height={400}
                className="w-full aspect-[4/5] object-cover cursor-zoom-in"
                onClick={() => openLightbox("/prosperity-persimmon-peanut-drink.png")}
              />
              <div className="p-4">
                <h3 className="font-semibold mb-1">
                  <T zh="好柿花生" en="Prosperity · Persimmon Peanut" />
                </h3>
                <div className="font-bold">MYR 11.99</div>
              </div>
            </article>
            <article className="card">
              <Image
                src="/nasi-lemak-bungkus-drink.png"
                alt="Nasi Lemak Bungkus"
                width={320}
                height={400}
                className="w-full aspect-[4/5] object-cover cursor-zoom-in"
                onClick={() => openLightbox("/nasi-lemak-bungkus-drink.png")}
              />
              <div className="p-4">
                <h3 className="font-semibold mb-1">
                  <T zh="椰浆饭 · 套袋款" en="Nasi Lemak · Bungkus" />
                </h3>
                <div className="font-bold">MYR 11.99</div>
              </div>
            </article>
          </div>
        </section>

        <section className="py-12 md:py-18 container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-serif mb-6">
            <T zh="为什么选我们" en="Why Us" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex gap-3 items-start border border-dashed border-gray-200 rounded-2xl p-4">
              <div className="text-2xl">🥭</div>
              <div>
                <strong>
                  <T zh="真果 · 真茶 · 真奶" en="Real Fruits · Real Tea · Real Milk" />
                </strong>
                <div className="text-gray-600 text-sm mt-1">
                  <T zh="拒绝人工香精，用料满满" en="No artificial flavors, only honest ingredients." />
                </div>
              </div>
            </div>
            <div className="flex gap-3 items-start border border-dashed border-gray-200 rounded-2xl p-4">
              <div className="text-2xl">🍍</div>
              <div>
                <strong>
                  <T zh="产地当季" en="Seasonal & Sourced" />
                </strong>
                <div className="text-gray-600 text-sm mt-1">
                  <T
                    zh="Pekan Nanas 凤梨、西瓜等季节风味"
                    en="Pekan Nanas pineapples, watermelon and other seasonal flavors."
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-3 items-start border border-dashed border-gray-200 rounded-2xl p-4">
              <div className="text-2xl">⚖️</div>
              <div>
                <strong>
                  <T zh="糖冰可定制" en="Custom Sugar & Ice" />
                </strong>
                <div className="text-gray-600 text-sm mt-1">
                  <T zh="0–100% 糖度与冰量，随心口味" en="0–100% sugar and ice — your call." />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-18 container mx-auto px-4">
          <div className="flex items-end justify-between gap-3 mb-4">
            <h2 className="text-2xl md:text-3xl font-bold font-serif">
              <T zh="当季限定" en="Seasonal Limited" />
            </h2>
          </div>
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden mb-3">
            <div ref={progressRef} className="progress" />
          </div>
          <div ref={carouselRef} className="carousel mb-4">
            {seasonalSlides.map((slide, index) => (
              <figure key={index} className="slide card">
                <Image
                  src={slide.src || "/placeholder.svg"}
                  alt={slide.caption}
                  width={600}
                  height={400}
                  className="w-full aspect-video object-cover cursor-zoom-in"
                  onClick={() => openLightbox(slide.src)}
                />
                <figcaption className="cap">{slide.caption}</figcaption>
              </figure>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              {seasonalSlides.map((_, index) => (
                <button
                  key={index}
                  className="dot"
                  aria-current={index === currentSlide ? "true" : "false"}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full font-semibold border border-gray-200 transition-all duration-200 hover:-translate-y-0.5"
                onClick={() => goToSlide((currentSlide - 1 + seasonalSlides.length) % seasonalSlides.length)}
              >
                ‹
              </button>
              <button
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full font-semibold border border-gray-200 transition-all duration-200 hover:-translate-y-0.5"
                onClick={() => goToSlide((currentSlide + 1) % seasonalSlides.length)}
              >
                ›
              </button>
            </div>
          </div>
        </section>

        <section id="menu" className="py-12 md:py-18 container mx-auto px-4">
          <div className="flex items-end justify-between gap-3 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold font-serif">
              <T zh="菜单" en="Menu" />
            </h2>
            <div className="text-gray-600 text-sm">
              <T zh="可点击放大查看，依据当季更新" en="Tap to zoom. Seasonal updates." />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <figure className="card">
              <Image
                src="/fufootea-may-menu.png"
                alt="Fufootea 五月菜单"
                width={600}
                height={800}
                className="w-full h-auto cursor-zoom-in"
                onClick={() => openLightbox("/fufootea-may-menu.png")}
              />
            </figure>
            <figure className="card">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Fufootea 现烤泡芙与原茶生鲜果蛋糕价目"
                width={600}
                height={800}
                className="w-full h-auto cursor-zoom-in"
                onClick={() => openLightbox("/placeholder.svg?height=800&width=600")}
              />
            </figure>
          </div>
        </section>

        <section id="locations" className="py-12 md:py-18 container mx-auto px-4">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold font-serif">
              <T zh="门店与时间" en="Locations & Hours" />
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article className="card flex flex-col">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Fufootea Mount Austin 门店"
                width={400}
                height={300}
                className="w-full aspect-[4/3] object-cover border-b border-gray-200 cursor-zoom-in"
                onClick={() => openLightbox("/placeholder.svg?height=300&width=400")}
              />
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-semibold mb-2">Mount Austin · 总店</h3>
                <div className="text-gray-600 text-sm mb-4 flex-1">
                  <T
                    zh="地址：11, Jln Austin Height 7/2, Taman Mount Austin, 81100 Johor Bahru, Johor<br/>营业时间：每日 12:00–24:00（12pm–12am）"
                    en="Address: 11, Jalan Austin Height 7/2, Taman Mount Austin, 81100 Johor Bahru, Johor<br/>Hours: Daily 12:00–24:00 (12pm–12am)"
                  />
                </div>
                <div className="flex gap-2 mt-auto">
                  <a
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-full font-semibold border border-gray-200 transition-all duration-200 hover:-translate-y-0.5"
                    href="https://maps.app.goo.gl/TwqN4NqPGLLrpr8q9?g_st=ipc"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <T zh="一键导航" en="One‑tap directions" />
                  </a>
                </div>
              </div>
            </article>
            <article className="card flex flex-col">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Fufootea Paradigm Mall JB 门店"
                width={400}
                height={300}
                className="w-full aspect-[4/3] object-cover border-b border-gray-200 cursor-zoom-in"
                onClick={() => openLightbox("/placeholder.svg?height=300&width=400")}
              />
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-semibold mb-2">Paradigm Mall JB · L3（Lot 12E–H）</h3>
                <div className="text-gray-600 text-sm mb-4 flex-1">
                  <T
                    zh="地址：Paradigm Mall Johor Bahru，Level 3 · Lot 12E–H（近溜冰场）<br/>营业时间：每日 10:00–22:00（10am–10pm）"
                    en="Address: Paradigm Mall Johor Bahru, Level 3 · Lot 12E–H (near ice rink)<br/>Hours: Daily 10:00–22:00 (10am–10pm)"
                  />
                </div>
                <div className="flex gap-2 mt-auto">
                  <a
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-full font-semibold border border-gray-200 transition-all duration-200 hover:-translate-y-0.5"
                    href="https://maps.app.goo.gl/jRpvqj6F4kZiAxpy7?g_st=ipc"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <T zh="一键导航" en="One‑tap directions" />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="py-12 md:py-18 container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-serif mb-6">
            <T zh="大家怎么说" en="What People Say" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <blockquote className="m-0 p-4 border border-gray-200 rounded-2xl italic">
              "真材实料，水果香气很干净。"
            </blockquote>
            <blockquote className="m-0 p-4 border border-gray-200 rounded-2xl italic">
              "内装极简有质感，出片好看。"
            </blockquote>
            <blockquote className="m-0 p-4 border border-gray-200 rounded-2xl italic">
              "榴莲泡芙爆浆，太上头了。"
            </blockquote>
          </div>
        </section>

        <section id="instagram" className="py-12 md:py-18 container mx-auto px-4">
          <div className="flex items-end justify-between gap-3 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold font-serif">
              <T zh="社交媒体" en="Social Media" />
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <a
              className="relative aspect-square rounded-2xl overflow-hidden border border-gray-200 bg-gradient-to-br from-black/5 to-black/10"
              href="https://www.xiaohongshu.com/discovery/item/67724328000000001300cc8a?source=webshare&xhsshare=pc_web&xsec_token=ABTLYT3aVuy8Oi2x3U7821Mp1rALTvuIKGBZeu3FqmlqY=&xsec_source=pc_share"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="absolute right-2 top-2 bg-black/55 text-white rounded-full px-2 py-1 text-xs font-bold">
                小红书
              </span>
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="小红书 帖子 1"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </a>
            <a
              className="relative aspect-square rounded-2xl overflow-hidden border border-gray-200 bg-gradient-to-br from-black/5 to-black/10"
              href="https://www.instagram.com/reel/DNFPywJzzBZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="absolute right-2 top-2 bg-black/55 text-white rounded-full px-2 py-1 text-xs font-bold">
                Instagram
              </span>
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Instagram Reels"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </a>
            <a
              className="relative aspect-square rounded-2xl overflow-hidden border border-gray-200 bg-gradient-to-br from-black/5 to-black/10"
              href="https://www.xiaohongshu.com/discovery/item/687a090c00000000120306fb?source=webshare&xhsshare=pc_web&xsec_token=ABxmSeK7CxGEF_r8WNVLUDg80FsuKSretTHJfmsdmTnMY=&xsec_source=pc_share"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="absolute right-2 top-2 bg-black/55 text-white rounded-full px-2 py-1 text-xs font-bold">
                小红书
              </span>
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="小红书 帖子 2"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </a>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-18 container mx-auto px-4 mb-4">
          <div className="flex items-end justify-between gap-3 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold font-serif">
              <T zh="订阅与联系" en="Subscribe & Contact" />
            </h2>
            <div className="text-gray-600 text-sm">获取当季限定与新品试饮</div>
          </div>
          <form className="flex gap-2 flex-wrap">
            <input
              type="email"
              placeholder="Coming soon"
              disabled
              className="flex-1 min-w-[220px] px-4 py-3 rounded-full border border-gray-200 bg-transparent"
            />
            <button
              className="inline-flex items-center gap-2 px-4 py-3 rounded-full font-semibold border border-gray-200 transition-all duration-200 hover:-translate-y-0.5"
              type="button"
              disabled
            >
              Subscribe
            </button>
            <a
              className="inline-flex items-center gap-2 px-4 py-3 rounded-full font-semibold border border-gray-200 transition-all duration-200 hover:-translate-y-0.5"
              href="https://wa.me/60136041491"
              target="_blank"
              rel="noreferrer noopener"
            >
              WhatsApp
            </a>
          </form>
        </section>
      </main>

      <footer className="border-t border-gray-200 py-7 text-sm">
        <div className="container mx-auto px-4 flex items-center justify-between gap-4">
          <div className="flex gap-4 items-center">
            <a href="#hero">品牌故事</a>
            <a href="#menu">菜单</a>
            <a href="#locations">门店</a>
            <a href="#contact">联系</a>
            <span className="text-gray-600">© 2025 Fufootea. Fivante Tech. All Rights Reserved.</span>
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      {lightboxSrc && (
        <div className="lightbox" aria-hidden="false" onClick={closeLightbox}>
          <Image
            src={lightboxSrc || "/placeholder.svg"}
            alt="Enlarged view"
            width={800}
            height={600}
            className="max-w-[94vw] max-h-[90vh] rounded-2xl"
          />
        </div>
      )}
    </>
  )
}
