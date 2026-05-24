import { IconSparkles } from "@tabler/icons-react"

import { contentFormats } from "@/lib/profile-data"

export function CollabSection() {
  return (
    <div className="grid h-full min-h-136 gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
      <div className="rounded-[1.75rem] bg-[#311925] p-6 text-white shadow-xl shadow-[#311925]/20 dark:bg-[#ff8db2] dark:text-[#24131d] sm:p-8">
        <p className="text-sm font-black uppercase opacity-80">For brands</p>
        <h2 className="mt-3 text-3xl font-black sm:text-5xl">Collab that still feels like a real Jogja recommendation.</h2>
        <p className="mt-5 leading-8 opacity-90">
          Sponsored content stays warm, useful, and audience-first. The goal is simple: make people curious enough to save, visit, and order.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {contentFormats.map((format) => (
          <div key={format} className="rounded-[1.25rem] border border-[#f3d4de] bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/8">
            <IconSparkles className="size-5 text-[#f35b8f]" aria-hidden="true" />
            <p className="mt-4 text-lg font-black text-[#311925] dark:text-white">{format}</p>
            <p className="mt-3 text-sm leading-6 text-[#6b4c5d] dark:text-[#f6dce5]">
              Clear deliverables, friendly copy, dan visual direction yang tetap cocok dengan Salma Dwiyanti.
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
