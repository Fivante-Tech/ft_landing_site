"use client"

import { useEffect } from "react"

export default function Lightbox() {
  useEffect(() => {
    const lightbox = document.querySelector(".lightbox") as HTMLElement
    const img = lightbox?.querySelector("img") as HTMLImageElement

    if (!lightbox || !img) return

    const handleLightboxClick = () => {
      lightbox.setAttribute("aria-hidden", "true")
      img.src = ""
    }

    lightbox.addEventListener("click", handleLightboxClick)

    return () => {
      lightbox.removeEventListener("click", handleLightboxClick)
    }
  }, [])

  return (
    <div className="lightbox" aria-hidden="true">
      <img alt="menu enlarged" />
    </div>
  )
}
