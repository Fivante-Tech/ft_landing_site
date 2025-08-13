interface FooterProps {
  currentLang: string
}

export default function Footer({ currentLang }: FooterProps) {
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
    <footer className="border-t border-[var(--color-line)] py-7 text-sm">
      <div className="max-w-[clamp(280px,92vw,1180px)] mx-auto px-4 flex items-center justify-between gap-4 flex-nowrap">
        <div className="flex gap-4 flex-nowrap items-center min-w-0">
          <a href="#hero" className="whitespace-nowrap">
            {t.story}
          </a>
          <a href="#menu" className="whitespace-nowrap">
            {t.menu}
          </a>
          <a href="#locations" className="whitespace-nowrap">
            {t.locations}
          </a>
          <a href="#contact" className="whitespace-nowrap">
            {t.contact}
          </a>
          <span className="text-[var(--color-subtle)] whitespace-nowrap">
            © 2025 Fufootea. Fivante Tech. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
