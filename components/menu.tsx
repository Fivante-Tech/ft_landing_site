"use client"

interface MenuProps {
  currentLang: string
}

export default function Menu({ currentLang }: MenuProps) {
  const text = {
    zh: {
      title: "菜单",
      subtitle: "可点击放大查看，依据当季更新",
    },
    en: {
      title: "Menu",
      subtitle: "Tap to zoom. Seasonal updates.",
    },
  }

  const t = text[currentLang as keyof typeof text]

  const handleImageClick = (src: string) => {
    const lightbox = document.querySelector(".lightbox") as HTMLElement
    const img = lightbox?.querySelector("img") as HTMLImageElement
    if (lightbox && img) {
      img.src = src
      lightbox.setAttribute("aria-hidden", "false")
    }
  }

  return (
    <section
      id="menu"
      className="py-12 md:py-18 max-w-[clamp(280px,92vw,1180px)] mx-auto px-4"
      aria-labelledby="menu-title"
    >
      <div className="flex items-end justify-between gap-3 mb-6">
        <h2 id="menu-title" className="text-2xl md:text-3xl font-bold font-serif">
          {t.title}
        </h2>
        <div className="text-[var(--color-subtle)] text-sm">{t.subtitle}</div>
      </div>
      <div className="grid grid-cols-1 gap-4 justify-items-start">
        <figure className="border border-[var(--color-line)] rounded-3xl overflow-hidden shadow-[var(--shadow-sm)] bg-[var(--color-bg)] m-0 justify-self-start">
          <img
            className="w-full h-auto cursor-zoom-in rounded-3xl"
            src="/assets/menu1.webp"
            alt="Fufootea 五月菜单（果蔬茶、鲜奶茶、纯茶、草本茶与糖冰标准）"
            onClick={() => handleImageClick("/assets/menu1.webp")}
          />
        </figure>
        <figure className="border border-[var(--color-line)] rounded-3xl overflow-hidden shadow-[var(--shadow-sm)] bg-[var(--color-bg)] m-0 justify-self-start">
          <img
            className="w-full h-auto cursor-zoom-in rounded-3xl"
            src="/assets/menu2.webp"
            alt="Fufootea 现烤泡芙与原茶生鲜果蛋糕价目"
            onClick={() => handleImageClick("/assets/menu2.webp")}
          />
        </figure>
      </div>
    </section>
  )
}
