'use client'

import { useTheme } from "@/lib/ThemeContext"

export default function Home() {
  const { theme } = useTheme()

  return (
    <div
      className="h-full flex flex-col items-center justify-center content-center bg-[color:var(--primary)]"
    >
      <div className="w-fit">Try light/dark theme.</div>
    </div>
  )
}
