interface SocialMediaProps {
  currentLang: string
}

export default function SocialMedia({ currentLang }: SocialMediaProps) {
  const text = {
    zh: { title: "社交媒体" },
    en: { title: "Social Media" },
  }

  const t = text[currentLang as keyof typeof text]

  const socialPosts = [
    {
      platform: "小红书",
      image: "/assets/xhs1.png",
      alt: "小红书 帖子 1",
      url: "https://www.xiaohongshu.com/discovery/item/67724328000000001300cc8a?source=webshare&xhsshare=pc_web&xsec_token=ABTLYT3aVuy8Oi2x3U7821Mp1rALTvuIKGBZeu3FqmlqY=&xsec_source=pc_share",
      label: "小红书 · 被JB奶茶店耽误的泡芙",
    },
    {
      platform: "Instagram",
      image: "/assets/Ins1.png",
      alt: "Instagram Reels",
      url: "https://www.instagram.com/reel/DNFPywJzzBZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      label: "Instagram Reels",
    },
    {
      platform: "小红书",
      image: "/assets/xhs2.png",
      alt: "小红书 帖子 2",
      url: "https://www.xiaohongshu.com/discovery/item/687a090c00000000120306fb?source=webshare&xhsshare=pc_web&xsec_token=ABxmSeK7CxGEF_r8WNVLUDg80FsuKSretTHJfmsdmTnMY=&xsec_source=pc_share",
      label: "小红书 · JB周末亲子出游好去处",
    },
  ]

  return (
    <section
      id="instagram"
      className="py-12 md:py-18 max-w-[clamp(280px,92vw,1180px)] mx-auto px-4"
      aria-labelledby="ig-title"
    >
      <div className="flex items-end justify-between gap-3 mb-6">
        <h2 id="ig-title" className="text-2xl md:text-3xl font-bold font-serif">
          {t.title}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3" aria-live="polite">
        {socialPosts.map((post, index) => (
          <a
            key={index}
            className="relative aspect-square rounded-2xl overflow-hidden shadow-[var(--shadow-sm)] border border-[var(--color-line)] bg-[linear-gradient(120deg,rgba(0,0,0,0.04),rgba(0,0,0,0.08))] block"
            href={post.url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={post.label}
          >
            <span className="absolute right-2 top-2 bg-[rgba(0,0,0,0.55)] text-white rounded-full px-2 py-1 font-extrabold text-xs">
              {post.platform}
            </span>
            <img src={post.image || "/placeholder.svg"} alt={post.alt} className="w-full h-full object-cover" />
          </a>
        ))}
      </div>
    </section>
  )
}
