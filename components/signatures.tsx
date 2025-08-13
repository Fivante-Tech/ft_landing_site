interface SignaturesProps {
  currentLang: string
}

export default function Signatures({ currentLang }: SignaturesProps) {
  const text = {
    zh: {
      title: "招牌单品",
      viewAll: "全部饮品 →",
      drinks: [
        { name: "北干那那 · 凤梨", price: "MYR 11.99", image: "/assets/2.png", alt: "Pekan Nanas 主图" },
        { name: "好柿花生", price: "MYR 11.99", image: "/assets/3.png", alt: "Prosperity Persimmon Peanut 主图" },
        { name: "椰浆饭 · 套袋款", price: "MYR 11.99", image: "/assets/1.png", alt: "Nasi Lemak Bungkus 主图" },
      ],
    },
    en: {
      title: "Signatures",
      viewAll: "All Drinks →",
      drinks: [
        { name: "Pekan Nanas · Pineapple", price: "MYR 11.99", image: "/assets/2.png", alt: "Pekan Nanas 主图" },
        {
          name: "Prosperity · Persimmon Peanut",
          price: "MYR 11.99",
          image: "/assets/3.png",
          alt: "Prosperity Persimmon Peanut 主图",
        },
        { name: "Nasi Lemak · Bungkus", price: "MYR 11.99", image: "/assets/1.png", alt: "Nasi Lemak Bungkus 主图" },
      ],
    },
  }

  const t = text[currentLang as keyof typeof text]

  return (
    <section className="py-12 md:py-18 max-w-[clamp(280px,92vw,1180px)] mx-auto px-4" aria-labelledby="sig">
      <div className="flex items-end justify-between gap-3 mb-6">
        <h2 id="sig" className="text-2xl md:text-3xl font-bold font-serif">
          {t.title}
        </h2>
        <a
          className="inline-flex items-center gap-2 px-4 py-3 rounded-full font-semibold border border-[var(--color-line)] transition-all hover:-translate-y-0.5"
          href="#menu"
        >
          {t.viewAll}
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.drinks.map((drink, index) => (
          <article
            key={index}
            className="border border-[var(--color-line)] rounded-3xl overflow-hidden shadow-[var(--shadow-sm)] bg-[linear-gradient(180deg,rgba(198,162,92,0.06),transparent_38%),var(--color-bg)] flex flex-col"
            aria-label={drink.name}
          >
            <img
              className="aspect-[4/5] w-full object-cover border-b border-[var(--color-line)] bg-[radial-gradient(140%_120%_at_50%_0%,rgba(198,162,92,0.25),transparent_60%),linear-gradient(180deg,rgba(0,0,0,0.05),transparent_40%)]"
              src={drink.image || "/placeholder.svg"}
              alt={drink.alt}
            />
            <div className="p-4">
              <h3 className="font-semibold mb-1">{drink.name}</h3>
              <div className="font-bold text-[var(--color-gold)]">{drink.price}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
