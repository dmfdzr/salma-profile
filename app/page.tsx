import {
  IconBrandInstagram,
  IconCameraHeart,
  IconChefHat,
  IconHeartHandshake,
  IconMail,
  IconMapPin,
  IconSparkles,
  IconStarFilled,
} from "@tabler/icons-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"

const reviewedPlaces = [
  {
    name: "Mochi Cloud Cafe",
    category: "Dessert Cafe",
    location: "Kemang, Jakarta",
    score: "9.1",
    highlight: "fluffy strawberry mochi pancake",
    note: "Sweetnya balanced, plating cantik, dan ambience-nya cocok banget buat weekend catch-up.",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Nori & Noodle",
    category: "Ramen Spot",
    location: "Blok M, Jakarta",
    score: "8.8",
    highlight: "creamy miso ramen with crisp karaage",
    note: "Broth-nya comforting, porsinya generous, dan tetap worth it buat dinner after office.",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Butter Bloom",
    category: "Bakery",
    location: "BSD, Tangerang",
    score: "9.4",
    highlight: "rose croissant and sea-salt latte",
    note: "Aroma pastry langsung menang. Review ini perform bagus karena visualnya super shareable.",
    image:
      "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Luna Brunch House",
    category: "All-day Brunch",
    location: "Canggu, Bali",
    score: "8.9",
    highlight: "pink smoothie bowl with tropical granola",
    note: "Fresh, photogenic, dan cocok untuk audience yang suka cafe hopping saat travel.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=85",
  },
]

const profileStats = [
  { value: "42+", label: "places reviewed" },
  { value: "4", label: "city food trails" },
  { value: "91%", label: "save-worthy picks" },
]

const contentFormats = [
  "Cafe review reels",
  "Menu tasting story set",
  "Soft-launch visit",
  "Photo carousel recap",
]

const personalityNotes = [
  {
    icon: IconChefHat,
    title: "Honest taste notes",
    copy: "Review dibuat dengan bahasa ringan, tapi tetap jelas soal rasa, texture, price point, dan service.",
  },
  {
    icon: IconCameraHeart,
    title: "Pretty food visuals",
    copy: "Konten dipikirkan untuk mudah disimpan, dibagikan, dan membantu tempat makan terlihat inviting.",
  },
  {
    icon: IconHeartHandshake,
    title: "Brand-friendly workflow",
    copy: "Scope collaboration dibuat transparan supaya ekspektasi brand dan creator tetap align dari awal.",
  },
]

export default function Page() {
  return (
    <main className="min-h-svh overflow-hidden bg-[#fff7f9] text-[#3b2330]">
      <section className="relative isolate px-5 py-6 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(255,192,203,0.7),transparent_28%),radial-gradient(circle_at_90%_5%,rgba(255,232,166,0.55),transparent_26%),linear-gradient(135deg,#fff7f9_0%,#fff1f5_48%,#f8fff8_100%)]" />
        <div className="absolute left-8 top-28 -z-10 hidden h-24 w-24 rounded-full border border-[#f4a7b9]/60 bg-white/40 blur-sm lg:block" />
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border border-white/80 bg-white/70 px-4 py-3 shadow-sm backdrop-blur">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-normal">
            <span className="grid size-9 place-items-center rounded-full bg-[#f35b8f] text-white shadow-sm">
              <IconSparkles className="size-4" aria-hidden="true" />
            </span>
            Salma Eats
          </a>
          <nav aria-label="Primary navigation" className="hidden items-center gap-6 text-sm font-medium text-[#765565] md:flex">
            <a className="transition hover:text-[#c92865]" href="#reviews">
              Reviews
            </a>
            <a className="transition hover:text-[#c92865]" href="#collab">
              Collab
            </a>
            <a className="transition hover:text-[#c92865]" href="#contact">
              Contact
            </a>
          </nav>
          <Button asChild size="sm" className="bg-[#3b2330] text-white hover:bg-[#5a3347]">
            <a href="mailto:hello@salmaeats.example">Let&apos;s talk</a>
          </Button>
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 pb-16 pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:pb-24 lg:pt-20">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f7bfd0] bg-white/70 px-4 py-2 text-sm font-semibold text-[#b7235b] shadow-sm">
              <IconMapPin className="size-4" aria-hidden="true" />
              Jakarta-based food reviewer
            </div>
            <h1 className="text-balance text-5xl font-black leading-[0.95] tracking-normal text-[#311925] sm:text-6xl lg:text-7xl">
              Soft bites, honest reviews, and pink cafe hunts.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#68485a]">
              Hai, aku Salma. I review cute cafes, hidden dessert spots, and comfort food with honest notes that help people decide where to eat next.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 bg-[#f35b8f] px-5 text-white shadow-lg shadow-[#f35b8f]/25 hover:bg-[#d93f76]">
                <a href="#reviews">View reviewed places</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 border-[#e9a7bb] bg-white/60 px-5 text-[#4d2a3a] hover:bg-white">
                <a href="#contact">Contact for collab</a>
              </Button>
            </div>
            <dl className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {profileStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white bg-white/65 p-4 shadow-sm backdrop-blur">
                  <dt className="text-2xl font-black text-[#c92865]">{stat.value}</dt>
                  <dd className="mt-1 text-xs font-semibold uppercase text-[#7a5968]">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-[2rem] bg-[#ffe3a8] shadow-xl shadow-[#f5c45b]/20" />
            <div className="absolute -bottom-6 -left-3 h-28 w-28 rounded-full bg-[#bdebd0] shadow-xl shadow-[#83cda4]/20" />
            <div className="relative overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-2xl shadow-[#d66a8d]/20">
              <Image
                src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1100&q=85"
                alt="Pink glazed donuts styled for Salma Eats food review content"
                width={1100}
                height={760}
                priority
                className="h-[26rem] w-full object-cover"
              />
              <div className="absolute inset-x-5 bottom-5 rounded-3xl border border-white/80 bg-white/82 p-4 shadow-lg backdrop-blur">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-[#c92865]">Latest bite</p>
                    <p className="mt-1 text-xl font-black text-[#311925]">Strawberry glaze donut flight</p>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-[#fff1c7] px-3 py-2 text-sm font-black text-[#7b4b00]">
                    <IconStarFilled className="size-4" aria-hidden="true" />
                    9.2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase text-[#c92865]">Profile snapshot</p>
            <h2 className="mt-3 text-3xl font-black text-[#311925] sm:text-4xl">Tasteful, cute, and easy to trust.</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {personalityNotes.map((item) => {
              const Icon = item.icon

              return (
                <article key={item.title} className="rounded-[1.5rem] border border-[#f4d8e1] bg-[#fff8fa] p-6 shadow-sm">
                  <div className="grid size-12 place-items-center rounded-2xl bg-[#f35b8f] text-white">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-black text-[#311925]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[#6b4c5d]">{item.copy}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-[#fff7f9] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase text-[#c92865]">Reviewed places</p>
              <h2 className="mt-3 text-3xl font-black text-[#311925] sm:text-4xl">A portfolio brands can scan fast.</h2>
            </div>
            <p className="max-w-md leading-7 text-[#6b4c5d]">
              Selected visits across cafes, bakeries, ramen spots, and brunch places. Each review balances taste, ambience, value, and content potential.
            </p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {reviewedPlaces.map((place) => (
              <article key={place.name} className="group overflow-hidden rounded-[1.5rem] border border-[#f3d4de] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#e7789c]/15">
                <div className="grid gap-0 sm:grid-cols-[0.9fr_1.1fr]">
                  <Image
                    src={place.image}
                    alt={`${place.name} food review visual`}
                    width={900}
                    height={720}
                    className="h-64 w-full object-cover sm:h-full"
                  />
                  <div className="flex min-h-64 flex-col p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-bold text-[#c92865]">{place.category}</p>
                        <h3 className="mt-1 text-2xl font-black text-[#311925]">{place.name}</h3>
                      </div>
                      <div className="flex items-center gap-1 rounded-full bg-[#fff1c7] px-3 py-2 text-sm font-black text-[#7b4b00]">
                        <IconStarFilled className="size-4" aria-hidden="true" />
                        {place.score}
                      </div>
                    </div>
                    <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-[#7a5968]">
                      <IconMapPin className="size-4 text-[#f35b8f]" aria-hidden="true" />
                      {place.location}
                    </p>
                    <p className="mt-5 text-sm font-black uppercase text-[#9f2858]">{place.highlight}</p>
                    <p className="mt-3 leading-7 text-[#6b4c5d]">{place.note}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="collab" className="bg-[#311925] px-5 py-16 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-[#ff9bbb]">For brands</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Collab that still feels like a real recommendation.</h2>
            <p className="mt-5 leading-8 text-[#f6dce5]">
              Salma Eats keeps sponsored content warm, useful, and audience-first. The goal is simple: make people curious enough to save, visit, and order.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {contentFormats.map((format) => (
              <div key={format} className="rounded-[1.25rem] border border-white/15 bg-white/8 p-5">
                <IconSparkles className="size-5 text-[#ffe3a8]" aria-hidden="true" />
                <p className="mt-4 text-lg font-black">{format}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#f3d4de] bg-[#fff7f9] p-6 shadow-sm sm:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-black uppercase text-[#c92865]">Contact</p>
              <h2 className="mt-3 text-3xl font-black text-[#311925] sm:text-4xl">Ready for a pink little food story?</h2>
              <p className="mt-4 max-w-2xl leading-7 text-[#6b4c5d]">
                Untuk invitation, menu tasting, atau creator partnership, kirim brief singkat dan timeline campaign. Salma akan reply with availability and next steps.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:min-w-56">
              <Button asChild size="lg" className="h-12 bg-[#f35b8f] text-white hover:bg-[#d93f76]">
                <a href="mailto:hello@salmaeats.example">
                  <IconMail className="size-4" aria-hidden="true" />
                  Email Salma
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 border-[#e9a7bb] bg-white text-[#4d2a3a] hover:bg-[#fff1f5]">
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                  <IconBrandInstagram className="size-4" aria-hidden="true" />
                  Instagram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
