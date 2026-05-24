"use client"

import { IconMoon, IconSun } from "@tabler/icons-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="grid size-10 place-items-center rounded-full border border-[#e9a7bb] bg-white/80 text-[#4d2a3a] transition hover:bg-white focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#f35b8f]/40 dark:border-white/10 dark:bg-white/8 dark:text-white dark:hover:bg-white/14"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <IconSun className="size-5" aria-hidden="true" /> : <IconMoon className="size-5" aria-hidden="true" />}
    </button>
  )
}
