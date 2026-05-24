import { IconMapPin } from "@tabler/icons-react"
import Image from "next/image"

import { profileStats } from "@/lib/profile-data"

import { RatingBadge } from "./rating-badge"

export function HomeSection() {
  return (
    <div className="grid h-full min-h-136 gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
      <div className="max-w-3xl">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f7bfd0] bg-white/80 px-4 py-2 text-sm font-semibold text-[#b7235b] shadow-sm dark:border-white/10 dark:bg-white/8 dark:text-[#ff9bbb]">
          <IconMapPin className="size-4" aria-hidden="true" />
          Yogyakarta-based food reviewer
        </div>
        <h1 className="text-balance text-4xl font-black leading-[0.98] tracking-normal text-[#311925] dark:text-white sm:text-6xl lg:text-7xl">
          Soft bites, honest Jogja reviews, and pink cafe hunts.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[#68485a] dark:text-[#f6dce5] sm:text-lg">
          Hai, aku Salma Dwiyanti. I review Yogyakarta cafes, local legends, desserts, and comfort food with honest notes that help people decide where to eat next.
        </p>
        <dl className="mt-8 grid max-w-xl grid-cols-3 gap-3">
          {profileStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white bg-white/75 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/8">
              <dt className="text-2xl font-black text-[#c92865] dark:text-[#ff9bbb]">{stat.value}</dt>
              <dd className="mt-1 text-xs font-semibold uppercase text-[#7a5968] dark:text-[#e9c2cf]">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative mx-auto hidden w-full max-w-xl lg:block">
        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-[2rem] bg-[#ffe3a8] shadow-xl shadow-[#f5c45b]/20 dark:bg-[#8b6431]" />
        <div className="absolute -bottom-6 -left-3 h-28 w-28 rounded-full bg-[#bdebd0] shadow-xl shadow-[#83cda4]/20 dark:bg-[#27513a]" />
        <div className="relative overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-2xl shadow-[#d66a8d]/20 dark:border-[#3a1f30] dark:bg-[#24131d]">
          <Image
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1100&q=85"
            alt="Styled Indonesian food table for Salma Dwiyanti Yogyakarta review content"
            width={1100}
            height={760}
            priority
            className="h-108 w-full object-cover"
          />
          <div className="absolute inset-x-5 bottom-5 rounded-3xl border border-white/80 bg-white/80 p-4 shadow-lg backdrop-blur dark:border-white/10 dark:bg-[#24131d]/82">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-[#c92865] dark:text-[#ff9bbb]">Latest bite</p>
                <p className="mt-1 text-xl font-black text-[#311925] dark:text-white">Kopi Klotok breakfast trail</p>
              </div>
              <RatingBadge rating={4.8} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
