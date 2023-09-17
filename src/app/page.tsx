'use client'

import { useTheme } from "@/lib/ThemeContext"
import cx from 'classnames'

export default function Home() {
  const { theme } = useTheme()

  const classNames = cx(
    "h-full flex flex-col items-center justify-center content-center",
    theme === 'light' ? 'bg-[color:var(--light-main)]' : 'bg-[color:var(--dark-main)]'
  )

  return (
    <div
      className={classNames}
    >
      <div className="w-fit">Try light/dark theme.</div>
    </div>
  )
}
