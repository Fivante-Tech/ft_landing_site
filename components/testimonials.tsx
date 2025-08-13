interface TestimonialsProps {
  currentLang: string
}

export default function Testimonials({ currentLang }: TestimonialsProps) {
  const text = {
    zh: {
      title: "大家怎么说",
      quotes: ['"真材实料，水果香气很干净。"', '"内装极简有质感，出片好看。"', '"榴莲泡芙爆浆，太上头了。"'],
    },
    en: {
      title: "What People Say",
      quotes: [
        '"Real ingredients, clean fruit aroma."',
        '"Minimalist interior with great aesthetics."',
        '"The durian puff is absolutely addictive."',
      ],
    },
  }

  const t = text[currentLang as keyof typeof text]

  return (
    <section className="py-12 md:py-18 max-w-[clamp(280px,92vw,1180px)] mx-auto px-4" aria-labelledby="rev-title">
      <h2 id="rev-title" className="text-2xl md:text-3xl font-bold font-serif mb-6">
        {t.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {t.quotes.map((quote, index) => (
          <blockquote key={index} className="m-0 p-5 border border-[var(--color-line)] rounded-2xl italic">
            {quote}
          </blockquote>
        ))}
      </div>
    </section>
  )
}
