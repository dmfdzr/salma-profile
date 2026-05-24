"use client"

import { useState } from "react"
import { IconSparkles } from "@tabler/icons-react"

import { AboutSection } from "@/components/sections/about-section"
import { CollabSection } from "@/components/sections/collab-section"
import { ContactSection } from "@/components/sections/contact-section"
import { HomeSection } from "@/components/sections/home-section"
import { ReviewsSection } from "@/components/sections/reviews-section"
import { ThemeToggle } from "@/components/theme-toggle"
import { Section, sections } from "@/lib/profile-data"

export default function Page() {
  const [activeSection, setActiveSection] = useState<Section>("Home")

  return (
    <main className="h-dvh overflow-hidden bg-[#fff7f9] text-[#3b2330] dark:bg-[#160b12] dark:text-[#fff7fb]">
      <div className="relative isolate flex h-full flex-col px-4 py-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_12%,rgba(255,192,203,0.75),transparent_26%),radial-gradient(circle_at_90%_8%,rgba(255,232,166,0.55),transparent_24%),linear-gradient(135deg,#fff7f9_0%,#fff1f5_48%,#f8fff8_100%)] dark:bg-[radial-gradient(circle_at_12%_12%,rgba(216,71,124,0.32),transparent_28%),radial-gradient(circle_at_90%_8%,rgba(255,218,121,0.18),transparent_24%),linear-gradient(135deg,#160b12_0%,#27111e_54%,#10231a_100%)]" />

        <header className="mx-auto flex w-full max-w-7xl shrink-0 flex-col gap-3 rounded-[1.75rem] border border-white/80 bg-white/70 p-3 shadow-sm backdrop-blur dark:border-white/10 dark:bg-[#24131d]/78 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setActiveSection("Home")}
              className="flex min-h-11 items-center gap-2 rounded-full pr-3 text-left font-semibold tracking-normal outline-none transition focus-visible:ring-[3px] focus-visible:ring-[#f35b8f]/40"
              aria-label="Show home section"
            >
              <span className="grid size-10 place-items-center rounded-full bg-[#f35b8f] text-white shadow-sm">
                <IconSparkles className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block leading-none text-[#311925] dark:text-white">Salma Dwiyanti</span>
                <span className="mt-1 block text-xs font-bold text-[#b7235b] dark:text-[#ff9bbb]">Yogyakarta food reviewer</span>
              </span>
            </button>
            <div className="md:hidden">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex min-w-0 items-center gap-2">
            <nav aria-label="Profile sections" className="flex min-w-0 flex-1 gap-2 overflow-x-auto rounded-full bg-[#fff1f5] p-1 dark:bg-white/8">
              {sections.map((section) => (
                <button
                  key={section}
                  type="button"
                  onClick={() => setActiveSection(section)}
                  aria-current={activeSection === section ? "page" : undefined}
                  className={`min-h-10 shrink-0 rounded-full px-4 text-sm font-black transition focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#f35b8f]/40 ${
                    activeSection === section
                      ? "bg-[#f35b8f] text-white shadow-sm shadow-[#f35b8f]/25"
                      : "text-[#765565] hover:bg-white hover:text-[#c92865] dark:text-[#f6dce5] dark:hover:bg-white/10 dark:hover:text-white"
                  }`}
                >
                  {section}
                </button>
              ))}
            </nav>
            <div className="hidden shrink-0 md:block">
              <ThemeToggle />
            </div>
          </div>
        </header>

        <section className="mx-auto mt-4 min-h-0 w-full max-w-7xl flex-1">
          <div className="h-full overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 shadow-2xl shadow-[#d66a8d]/20 backdrop-blur dark:border-white/10 dark:bg-[#24131d]/72 dark:shadow-black/30">
            <div className="h-full overflow-y-auto p-4 sm:p-6 lg:p-8">
              {activeSection === "Home" && <HomeSection />}
              {activeSection === "About" && <AboutSection />}
              {activeSection === "Reviews" && <ReviewsSection />}
              {activeSection === "Collab" && <CollabSection />}
              {activeSection === "Contact" && <ContactSection />}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
