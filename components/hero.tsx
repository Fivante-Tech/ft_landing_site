"use client"

interface HeroProps {
  currentLang: string
}

export default function Hero({ currentLang }: HeroProps) {
  const text = {
    zh: {
      title: "好茶·不将就·",
      description:
        "FufooTea 源自马来西亚的本地品牌，专注于奉上用心手作的好茶——以诚意、温度与真材实料酿煮而成。我们坚持真实：每一杯都是真水果、真茶叶，也是真热爱。自第一杯调配起，我们始终不忘初心——以自然而单纯的风味，做让人身心舒畅的好喝饮品，与爱茶的你分享美好。欢迎来到 FufooTea，保持真实，畅快喝茶。💛",
    },
    en: {
      title: "Be Real to Fruits & Tea",
      description:
        "FufooTea is a proudly Malaysian local brand, dedicated to serving the finest handcrafted tea — brewed with honesty, heart, and real ingredients. We believe in keeping it real: real fruits, real tea, and real passion in every cup. 🍵✨ From our very first blend, we've stayed true to our roots — creating refreshing, feel-good drinks that celebrate the simplicity of natural flavors and the joy of sharing good tea with good people. Welcome to FufooTea. Stay real, sip happy. 💛",
    },
  }

  const t = text[currentLang as keyof typeof text]

  const handleHeroClick = () => {
    const lightbox = document.querySelector(".lightbox") as HTMLElement
    const img = lightbox?.querySelector("img") as HTMLImageElement
    if (lightbox && img) {
      img.src = "/assets/Cover.png"
      lightbox.setAttribute("aria-hidden", "false")
    }
  }

  return (
    <section
      id="hero"
      className="relative py-12 md:py-24 max-w-[clamp(280px,92vw,1180px)] mx-auto px-4"
      aria-label="首屏宣传"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
        <div>
          <div className="flex gap-3 mb-4 flex-wrap">
            <div
              className="inline-flex items-center gap-2 bg-[rgba(198,162,92,0.12)] border border-[var(--color-line)] px-3 py-2 rounded-full font-semibold w-max"
              aria-label="穆斯林友好"
            >
              #MuslimFriendly
            </div>
            <div
              className="inline-flex items-center gap-2 bg-[rgba(198,162,92,0.12)] border border-[var(--color-line)] px-3 py-2 rounded-full font-semibold w-max"
              aria-label="本地品牌"
            >
              #localbrand
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-4">{t.title}</h1>
          <p className="text-base md:text-lg text-[var(--color-subtle)] mb-6 leading-relaxed">{t.description}</p>
        </div>
        <div
          className="aspect-[4/3] rounded-3xl relative overflow-hidden shadow-[var(--shadow-lg)] bg-cover bg-center cursor-zoom-in"
          style={{ backgroundImage: "url(/assets/Cover.png)" }}
          aria-label="品牌视觉背景"
          onClick={handleHeroClick}
        />
      </div>
    </section>
  )
}
