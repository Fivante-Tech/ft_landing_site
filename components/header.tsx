"use client"

interface HeaderProps {
  currentLang: string
  onLanguageSwitch: (lang: string) => void
}

export default function Header({ currentLang, onLanguageSwitch }: HeaderProps) {
  const text = {
    zh: {
      story: "品牌故事",
      menu: "菜单",
      locations: "门店",
      contact: "联系",
    },
    en: {
      story: "Story",
      menu: "Menu",
      locations: "Locations",
      contact: "Contact",
    },
  }

  const t = text[currentLang as keyof typeof text]

  return (
    <header className="sticky top-0 backdrop-blur-md bg-[color-mix(in_oklab,var(--color-bg)_80%,transparent)] border-b border-[var(--color-line)] z-50">
      <div className="max-w-[clamp(280px,92vw,1180px)] mx-auto px-4 flex items-center justify-between gap-4 h-16">
        <div className="flex items-center gap-3">
          <div className="font-extrabold tracking-wide text-lg">Fufootea 茶满满</div>
        </div>

        <nav className="hidden md:block" aria-label="页面链接">
          <ul className="flex gap-5 list-none p-0 m-0">
            <li>
              <a href="#hero" className="opacity-90 hover:opacity-100 transition-opacity">
                {t.story}
              </a>
            </li>
            <li>
              <a href="#menu" className="opacity-90 hover:opacity-100 transition-opacity">
                {t.menu}
              </a>
            </li>
            <li>
              <a href="#locations" className="opacity-90 hover:opacity-100 transition-opacity">
                {t.locations}
              </a>
            </li>
            <li>
              <a href="#contact" className="opacity-90 hover:opacity-100 transition-opacity">
                {t.contact}
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex gap-2">
          <button
            onClick={() => onLanguageSwitch("zh")}
            className={`border border-[var(--color-line)] bg-transparent rounded-full w-11 h-9 flex items-center justify-center cursor-pointer font-bold transition-all hover:-translate-y-0.5 ${currentLang === "zh" ? "bg-[var(--color-gold)] text-white" : ""}`}
            aria-label="切换中文"
            title="中文"
          >
            中
          </button>
          <button
            onClick={() => onLanguageSwitch("en")}
            className={`border border-[var(--color-line)] bg-transparent rounded-full w-11 h-9 flex items-center justify-center cursor-pointer font-bold transition-all hover:-translate-y-0.5 ${currentLang === "en" ? "bg-[var(--color-gold)] text-white" : ""}`}
            aria-label="Switch to English"
            title="EN"
          >
            EN
          </button>
        </div>
      </div>
    </header>
  )
}
