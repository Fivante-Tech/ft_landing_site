interface WhyUsProps {
  currentLang: string
}

export default function WhyUs({ currentLang }: WhyUsProps) {
  const text = {
    zh: {
      title: "为什么选我们",
      features: [
        {
          icon: "🥭",
          title: "真果 · 真茶 · 真奶",
          description: "拒绝人工香精，用料满满",
        },
        {
          icon: "🍍",
          title: "产地当季",
          description: "Pekan Nanas 凤梨、西瓜等季节风味",
        },
        {
          icon: "⚖️",
          title: "糖冰可定制",
          description: "0–100% 糖度与冰量，随心口味",
        },
      ],
    },
    en: {
      title: "Why Us",
      features: [
        {
          icon: "🥭",
          title: "Real Fruits · Real Tea · Real Milk",
          description: "No artificial flavors, only honest ingredients.",
        },
        {
          icon: "🍍",
          title: "Seasonal & Sourced",
          description: "Pekan Nanas pineapples, watermelon and other seasonal flavors.",
        },
        {
          icon: "⚖️",
          title: "Custom Sugar & Ice",
          description: "0–100% sugar and ice — your call.",
        },
      ],
    },
  }

  const t = text[currentLang as keyof typeof text]

  return (
    <section className="py-12 md:py-18 max-w-[clamp(280px,92vw,1180px)] mx-auto px-4" aria-labelledby="usps">
      <h2 id="usps" className="text-2xl md:text-3xl font-bold font-serif mb-6">
        {t.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {t.features.map((feature, index) => (
          <div
            key={index}
            className="flex gap-3 items-start border border-dashed border-[var(--color-line)] rounded-2xl p-4"
          >
            <div aria-hidden="true" className="text-2xl">
              {feature.icon}
            </div>
            <div>
              <strong className="block mb-1">{feature.title}</strong>
              <div className="text-[var(--color-subtle)] text-sm">{feature.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
