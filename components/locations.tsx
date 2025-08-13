"use client"

interface LocationsProps {
  currentLang: string
}

export default function Locations({ currentLang }: LocationsProps) {
  const text = {
    zh: {
      title: "门店与时间",
      locations: [
        {
          name: "Mount Austin · 总店",
          address: "地址：11, Jln Austin Height 7/2, Taman Mount Austin, 81100 Johor Bahru, Johor",
          hours: "营业时间：每日 12:00–24:00（12pm–12am）",
          directions: "一键导航",
          image: "/assets/austin.webp",
          alt: "Fufootea Mount Austin 门店",
          mapUrl: "https://maps.app.goo.gl/TwqN4NqPGLLrpr8q9?g_st=ipc",
        },
        {
          name: "Paradigm Mall JB · L3（Lot 12E–H）",
          address: "地址：Paradigm Mall Johor Bahru，Level 3 · Lot 12E–H（近溜冰场）",
          hours: "营业时间：每日 10:00–22:00（10am–10pm）",
          directions: "一键导航",
          image: "/assets/paradigm.webp",
          alt: "Fufootea Paradigm Mall JB 门店",
          mapUrl: "https://maps.app.goo.gl/jRpvqj6F4kZiAxpy7?g_st=ipc",
        },
      ],
    },
    en: {
      title: "Locations & Hours",
      locations: [
        {
          name: "Mount Austin · 总店",
          address: "Address: 11, Jalan Austin Height 7/2, Taman Mount Austin, 81100 Johor Bahru, Johor",
          hours: "Hours: Daily 12:00–24:00 (12pm–12am)",
          directions: "One‑tap directions",
          image: "/assets/austin.webp",
          alt: "Fufootea Mount Austin 门店",
          mapUrl: "https://maps.app.goo.gl/TwqN4NqPGLLrpr8q9?g_st=ipc",
        },
        {
          name: "Paradigm Mall JB · L3（Lot 12E–H）",
          address: "Address: Paradigm Mall Johor Bahru, Level 3 · Lot 12E–H (near ice rink)",
          hours: "Hours: Daily 10:00–22:00 (10am–10pm)",
          directions: "One‑tap directions",
          image: "/assets/paradigm.webp",
          alt: "Fufootea Paradigm Mall JB 门店",
          mapUrl: "https://maps.app.goo.gl/jRpvqj6F4kZiAxpy7?g_st=ipc",
        },
      ],
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
      id="locations"
      className="py-12 md:py-18 max-w-[clamp(280px,92vw,1180px)] mx-auto px-4"
      aria-labelledby="loc-title"
    >
      <div className="flex items-end justify-between gap-3 mb-6">
        <h2 id="loc-title" className="text-2xl md:text-3xl font-bold font-serif">
          {t.title}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {t.locations.map((location, index) => (
          <article
            key={index}
            className="border border-[var(--color-line)] rounded-3xl overflow-hidden shadow-[var(--shadow-sm)] bg-[var(--color-bg)] flex flex-col"
            aria-label={location.name}
          >
            <img
              className="w-full aspect-[4/3] object-cover border-b border-[var(--color-line)] cursor-zoom-in"
              src={location.image || "/placeholder.svg"}
              alt={location.alt}
              loading="lazy"
              onClick={() => handleImageClick(location.image)}
            />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-semibold mb-2">{location.name}</h3>
              <div className="text-[var(--color-subtle)] text-sm mb-4 flex-1">
                <div dangerouslySetInnerHTML={{ __html: location.address }} />
                <br />
                <div dangerouslySetInnerHTML={{ __html: location.hours }} />
              </div>
              <div className="flex gap-2 flex-wrap mt-auto pt-3">
                <a
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-full font-semibold border border-[var(--color-line)] transition-all hover:-translate-y-0.5"
                  href={location.mapUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {location.directions}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
