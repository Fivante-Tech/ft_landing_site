interface ContactProps {
  currentLang: string
}

export default function Contact({ currentLang }: ContactProps) {
  const text = {
    zh: {
      title: "订阅与联系",
      subtitle: "获取当季限定与新品试饮",
    },
    en: {
      title: "Subscribe & Contact",
      subtitle: "Get seasonal specials and new product tastings",
    },
  }

  const t = text[currentLang as keyof typeof text]

  return (
    <section
      id="contact"
      className="py-12 md:py-18 mb-4 max-w-[clamp(280px,92vw,1180px)] mx-auto px-4"
      aria-labelledby="contact-title"
    >
      <div className="flex items-end justify-between gap-3 mb-6">
        <h2 id="contact-title" className="text-2xl md:text-3xl font-bold font-serif">
          {t.title}
        </h2>
        <div className="text-[var(--color-subtle)] text-sm">{t.subtitle}</div>
      </div>
      <form className="flex gap-2 flex-wrap" name="subscribe">
        <input type="hidden" name="form-name" value="subscribe" />
        <input
          aria-label="邮箱"
          type="email"
          name="email"
          placeholder="Coming soon"
          disabled
          className="flex-1 min-w-[220px] px-4 py-3 rounded-full border border-[var(--color-line)] bg-transparent text-[var(--color-text)] disabled:opacity-50"
        />
        <button
          className="inline-flex items-center gap-2 px-4 py-3 rounded-full font-semibold border border-[var(--color-line)] transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0"
          type="button"
          disabled
        >
          Subscribe
        </button>
        <a
          className="inline-flex items-center gap-2 px-4 py-3 rounded-full font-semibold border border-[var(--color-line)] transition-all hover:-translate-y-0.5 bg-[var(--color-gold)] text-white border-[var(--color-gold)]"
          href="https://wa.me/60136041491"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="WhatsApp 联系我们"
        >
          WhatsApp
        </a>
      </form>
    </section>
  )
}
