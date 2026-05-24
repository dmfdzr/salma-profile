"use client"

import { useMemo, useState } from "react"
import {
  IconBrandInstagram,
  IconCameraHeart,
  IconChefHat,
  IconChevronLeft,
  IconChevronRight,
  IconHeartHandshake,
  IconMail,
  IconMapPin,
  IconMoon,
  IconSparkles,
  IconStarFilled,
  IconSun,
  IconWallet,
  IconX,
} from "@tabler/icons-react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Dialog } from "radix-ui"

import { Button } from "@/components/ui/button"

type Review = {
  name: string
  category: string
  area: string
  rating: number
  highlight: string
  budget: string
  vibe: string
  bestFor: string
  note: string
  insight: string
  image: string
}

const reviews: Review[] = [
  {
    name: "Kopi Klotok",
    category: "Javanese Comfort Food",
    area: "Pakem",
    rating: 4.8,
    highlight: "pisang goreng, sayur lodeh, and homey rice plates",
    budget: "Rp25k-60k",
    vibe: "rural, nostalgic, ramai tapi hangat",
    bestFor: "family breakfast and weekend food trip",
    note: "Rasa rumahan yang konsisten, ambience sawahnya kuat, dan cocok banget untuk konten Jogja yang feels authentic.",
    insight: "Strong for brands that want heritage, local warmth, and high save potential.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Tempo Gelato",
    category: "Gelato",
    area: "Prawirotaman",
    rating: 4.7,
    highlight: "pistachio gelato and seasonal fruit flavors",
    budget: "Rp30k-55k",
    vibe: "touristy, colorful, easy to recommend",
    bestFor: "after-lunch dessert and quick reels",
    note: "Flavor banyak, queue-nya iconic, dan visual gelato selalu aman untuk carousel yang playful.",
    insight: "Great for high-traffic dessert campaigns and quick visual hooks.",
    image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Mediterranea Restaurant",
    category: "Mediterranean",
    area: "Tirtodipuran",
    rating: 4.6,
    highlight: "pasta, steak, and warm bread basket",
    budget: "Rp80k-180k",
    vibe: "polished, intimate, dinner-friendly",
    bestFor: "date night and premium menu tasting",
    note: "Service rapi, menu luas, dan plating-nya punya feel upscale tanpa terasa kaku.",
    insight: "Good fit for restaurants targeting couples, expats, and premium casual diners.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Epic Coffee",
    category: "Cafe",
    area: "Palagan",
    rating: 4.5,
    highlight: "brunch plates and iced coffee",
    budget: "Rp45k-120k",
    vibe: "industrial, spacious, work-friendly",
    bestFor: "remote work and brunch content",
    note: "Tempatnya lega, lighting oke, dan mudah dipakai untuk konten cafe productivity yang modern.",
    insight: "Useful for lifestyle brands that want cafe-working audience exposure.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Chocolate Monggo",
    category: "Chocolate Shop",
    area: "Kotagede",
    rating: 4.4,
    highlight: "local chocolate tasting and souvenir boxes",
    budget: "Rp35k-150k",
    vibe: "sweet, local craft, giftable",
    bestFor: "souvenir hunting and product content",
    note: "Packaging cantik, rasa cokelat lokalnya kuat, dan cocok untuk konten oleh-oleh premium dari Jogja.",
    insight: "Strong product storytelling angle for gifting and local craft positioning.",
    image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Gudeg Yu Djum",
    category: "Gudeg",
    area: "Wijilan",
    rating: 4.6,
    highlight: "classic gudeg krecek and ayam kampung",
    budget: "Rp35k-85k",
    vibe: "legendary, local, no-frills",
    bestFor: "first-time Jogja food guide",
    note: "Manisnya khas Jogja, porsinya satisfying, dan wajib masuk list untuk audience luar kota.",
    insight: "Best for destination content and local culinary identity.",
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Roaster and Bear",
    category: "Cafe",
    area: "Gowongan",
    rating: 4.3,
    highlight: "coffee, pancakes, and cute bear-themed corners",
    budget: "Rp45k-130k",
    vibe: "cute, central, photo-friendly",
    bestFor: "casual meetups and cute cafe posts",
    note: "Lokasi strategis, menu aman untuk banyak selera, dan visual interiornya gampang dipakai untuk soft content.",
    insight: "Good for accessible creator meetups and everyday cafe campaigns.",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Sate Klathak Pak Pong",
    category: "Satay",
    area: "Imogiri",
    rating: 4.7,
    highlight: "sate klathak, gulai, and smoky skewers",
    budget: "Rp40k-95k",
    vibe: "rustic, busy, deeply local",
    bestFor: "night food trip and local legend content",
    note: "Smoky, sederhana, dan punya cerita kuat. Ini tipe tempat yang bikin audience pengin road trip malam.",
    insight: "High story value for local food trail and travel food content.",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Milas Vegetarian",
    category: "Vegetarian",
    area: "Prawirotaman",
    rating: 4.5,
    highlight: "plant-based bowls and garden dining",
    budget: "Rp35k-90k",
    vibe: "green, mindful, slow afternoon",
    bestFor: "healthy lunch and vegan-friendly guides",
    note: "Rasanya clean tanpa hambar, suasananya adem, dan cocok untuk konten mindful eating di Jogja.",
    insight: "Good for wellness brands and conscious dining positioning.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Warung Bu Ageng",
    category: "Indonesian",
    area: "Tirtodipuran",
    rating: 4.4,
    highlight: "nasi campur, brongkos, and traditional sides",
    budget: "Rp35k-100k",
    vibe: "heritage, warm, family-friendly",
    bestFor: "traditional lunch and group dining",
    note: "Menu Indonesia-nya approachable, ambience rumah lama terasa, dan cocok untuk review yang informatif.",
    insight: "Solid for family dining and local heritage campaigns.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Hayati Specialty Coffee",
    category: "Coffee",
    area: "Demangan",
    rating: 4.6,
    highlight: "manual brew and pastry pairing",
    budget: "Rp35k-95k",
    vibe: "minimal, calm, coffee-serious",
    bestFor: "coffee tasting and slow content",
    note: "Kopinya clean, baristanya informatif, dan cocok untuk audience yang suka detail flavor notes.",
    insight: "Best for specialty coffee storytelling and education-led posts.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Nanamia Pizzeria",
    category: "Pizza",
    area: "Tirtodipuran",
    rating: 4.5,
    highlight: "wood-fired pizza and casual Italian plates",
    budget: "Rp65k-160k",
    vibe: "garden, casual, group-friendly",
    bestFor: "dinner with friends",
    note: "Pizza crust-nya enjoyable, tempatnya nyaman, dan cocok untuk konten sharing menu.",
    insight: "Good for social dining content and group package promotions.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Soto Kadipiro",
    category: "Soto",
    area: "Wirobrajan",
    rating: 4.4,
    highlight: "clear chicken soto and classic sides",
    budget: "Rp20k-55k",
    vibe: "classic, quick, comforting",
    bestFor: "breakfast and local food list",
    note: "Kuahnya ringan tapi gurih, service cepat, dan cocok untuk konten sarapan Jogja.",
    insight: "Strong evergreen content for affordable local recommendations.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "The House of Raminten",
    category: "Indonesian",
    area: "Kotabaru",
    rating: 4.3,
    highlight: "traditional menu and theatrical ambience",
    budget: "Rp25k-95k",
    vibe: "quirky, cultural, late-night friendly",
    bestFor: "unique Jogja experience",
    note: "Experience-nya kuat, menu banyak, dan cocok untuk audience yang cari tempat makan sekaligus cerita.",
    insight: "Useful for experience-led campaigns with strong local character.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "ViaVia Jogja",
    category: "Global Casual",
    area: "Prawirotaman",
    rating: 4.4,
    highlight: "global comfort plates and bakery treats",
    budget: "Rp45k-130k",
    vibe: "traveler-friendly, relaxed, artsy",
    bestFor: "brunch and travel audience",
    note: "Menu internasionalnya approachable, bakery enak, dan vibe-nya cocok untuk konten travel slow day.",
    insight: "Good for tourism, travel, and mixed local-international audience.",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Sate Ratu",
    category: "Satay",
    area: "Sleman",
    rating: 4.7,
    highlight: "sate merah and spicy grilled chicken skewers",
    budget: "Rp35k-85k",
    vibe: "bold, casual, flavor-forward",
    bestFor: "spicy food hunters",
    note: "Bumbunya nendang, konsepnya jelas, dan sangat mudah dibuat jadi konten reaction yang engaging.",
    insight: "Strong hook for bold flavor launches and spicy food campaigns.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Klinik Kopi",
    category: "Coffee Experience",
    area: "Sleman",
    rating: 4.6,
    highlight: "single-origin coffee storytelling",
    budget: "Rp30k-75k",
    vibe: "intimate, educational, slow",
    bestFor: "coffee lovers and story-first content",
    note: "Experience minum kopinya personal, cerita bijinya kuat, dan cocok untuk konten naratif.",
    insight: "Best for brands that value education, process, and origin stories.",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Jejamuran",
    category: "Mushroom Restaurant",
    area: "Sleman",
    rating: 4.5,
    highlight: "mushroom satay, soup, and crispy mushroom",
    budget: "Rp30k-90k",
    vibe: "family-friendly, unique, local favorite",
    bestFor: "group lunch and unique menu guide",
    note: "Konsep jamurnya beda, menu variatif, dan recommended untuk audience yang ingin tempat family-friendly.",
    insight: "Good for unique menu positioning and family dining campaigns.",
    image: "https://images.unsplash.com/photo-1504545102780-26774c1bb073?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Bakmi Jawa Mbah Gito",
    category: "Bakmi Jawa",
    area: "Kotagede",
    rating: 4.6,
    highlight: "bakmi godog and rustic wooden ambience",
    budget: "Rp30k-75k",
    vibe: "rustic, warm, deeply Jogja",
    bestFor: "dinner and local atmosphere content",
    note: "Bakmi-nya comforting, interiornya punya karakter, dan bagus untuk storytelling visual malam.",
    insight: "Strong for local dining campaigns that need atmosphere and heritage.",
    image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Il Tempo del Gelato",
    category: "Dessert",
    area: "Kaliurang",
    rating: 4.4,
    highlight: "creamy gelato and casual hangout setup",
    budget: "Rp25k-55k",
    vibe: "sweet, simple, student-friendly",
    bestFor: "dessert break and campus-area content",
    note: "Pilihan rasanya fun, harga masih friendly, dan cocok untuk list dessert Jogja yang accessible.",
    insight: "Good for student audience and affordable dessert campaigns.",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=900&q=85",
  },
]

const profileStats = [
  { value: "20", label: "Jogja reviews" },
  { value: "5", label: "shown per page" },
  { value: "4.6/5", label: "avg rating" },
]

const contentFormats = [
  "Jogja cafe review reels",
  "Menu tasting story set",
  "Soft-launch visit",
  "Photo carousel recap",
]

const personalityNotes = [
  {
    icon: IconChefHat,
    title: "Honest taste notes",
    copy: "Bahasa ringan, tapi tetap jelas soal rasa, texture, price point, dan service.",
  },
  {
    icon: IconCameraHeart,
    title: "Pretty food visuals",
    copy: "Konten dibuat saveable, shareable, dan membantu tempat makan Jogja terlihat inviting.",
  },
  {
    icon: IconHeartHandshake,
    title: "Brand-friendly workflow",
    copy: "Scope collaboration transparan supaya ekspektasi brand dan creator align dari awal.",
  },
]

const sections = ["Home", "About", "Reviews", "Collab", "Contact"] as const
const reviewsPerPage = 5

type Section = (typeof sections)[number]

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
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <Button asChild size="sm" className="bg-[#3b2330] text-white hover:bg-[#5a3347] dark:bg-[#ff8db2] dark:text-[#24131d]">
                <a href="mailto:hello@salmadwiyanti.example">Contact</a>
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <nav aria-label="Profile sections" className="flex gap-2 overflow-x-auto rounded-full bg-[#fff1f5] p-1 dark:bg-white/8">
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
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
          </div>
        </header>

        <section className="mx-auto mt-4 min-h-0 w-full max-w-7xl flex-1">
          <div className="h-full overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 shadow-2xl shadow-[#d66a8d]/20 backdrop-blur dark:border-white/10 dark:bg-[#24131d]/72 dark:shadow-black/30">
            <div className="h-full overflow-y-auto p-4 sm:p-6 lg:p-8">
              {activeSection === "Home" && <HomeSection setActiveSection={setActiveSection} />}
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

function ThemeToggle() {
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

function HomeSection({ setActiveSection }: { setActiveSection: (section: Section) => void }) {
  return (
    <div className="grid h-full min-h-[34rem] gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
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
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button
            type="button"
            size="lg"
            onClick={() => setActiveSection("Reviews")}
            className="h-12 bg-[#f35b8f] px-5 text-white shadow-lg shadow-[#f35b8f]/25 hover:bg-[#d93f76]"
          >
            View Jogja reviews
          </Button>
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={() => setActiveSection("Contact")}
            className="h-12 border-[#e9a7bb] bg-white/70 px-5 text-[#4d2a3a] hover:bg-white dark:border-white/10 dark:bg-white/8 dark:text-white dark:hover:bg-white/14"
          >
            Contact for collab
          </Button>
        </div>
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
            className="h-[27rem] w-full object-cover"
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

function AboutSection() {
  return (
    <div className="grid h-full min-h-[34rem] gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
      <div>
        <p className="text-sm font-black uppercase text-[#c92865] dark:text-[#ff9bbb]">Profile snapshot</p>
        <h2 className="mt-3 text-3xl font-black text-[#311925] dark:text-white sm:text-5xl">Tasteful, cute, and easy to trust.</h2>
        <p className="mt-5 leading-8 text-[#6b4c5d] dark:text-[#f6dce5]">
          Salma Dwiyanti is personal-first: warm Jogja recommendations for followers, but structured enough for brands to understand review style, audience fit, and collaboration value.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
        {personalityNotes.map((item) => {
          const Icon = item.icon

          return (
            <article key={item.title} className="rounded-[1.5rem] border border-[#f4d8e1] bg-[#fff8fa] p-5 shadow-sm dark:border-white/10 dark:bg-white/8">
              <div className="grid size-12 place-items-center rounded-2xl bg-[#f35b8f] text-white">
                <Icon className="size-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-black text-[#311925] dark:text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-[#6b4c5d] dark:text-[#f6dce5]">{item.copy}</p>
            </article>
          )
        })}
      </div>
    </div>
  )
}

function ReviewsSection() {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(reviews.length / reviewsPerPage)
  const pagedReviews = useMemo(() => {
    const start = (page - 1) * reviewsPerPage

    return reviews.slice(start, start + reviewsPerPage)
  }, [page])

  return (
    <div className="grid h-full min-h-[34rem] grid-rows-[auto_1fr_auto] gap-4">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase text-[#c92865] dark:text-[#ff9bbb]">Reviewed places</p>
          <h2 className="mt-3 text-3xl font-black text-[#311925] dark:text-white sm:text-5xl">20 Jogja reviews, 5 per page.</h2>
        </div>
        <p className="max-w-md leading-7 text-[#6b4c5d] dark:text-[#f6dce5]">
          Click each review to see menu highlights, budget, vibe, best-for notes, and brand insight.
        </p>
      </div>

      <div className="grid min-h-0 gap-3 overflow-y-auto pr-1">
        {pagedReviews.map((review) => (
          <ReviewDialog key={review.name} review={review} />
        ))}
      </div>

      <div className="flex items-center justify-between gap-3 rounded-full border border-[#f3d4de] bg-white/75 p-2 dark:border-white/10 dark:bg-white/8">
        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled={page === 1}
          onClick={() => setPage((current) => Math.max(1, current - 1))}
          className="border-[#e9a7bb] bg-white text-[#4d2a3a] hover:bg-[#fff1f5] dark:border-white/10 dark:bg-white/8 dark:text-white dark:hover:bg-white/14"
        >
          <IconChevronLeft className="size-4" aria-hidden="true" />
          Previous
        </Button>
        <p className="text-sm font-black text-[#7a5968] dark:text-[#f6dce5]">
          Page {page} / {totalPages}
        </p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled={page === totalPages}
          onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
          className="border-[#e9a7bb] bg-white text-[#4d2a3a] hover:bg-[#fff1f5] dark:border-white/10 dark:bg-white/8 dark:text-white dark:hover:bg-white/14"
        >
          Next
          <IconChevronRight className="size-4" aria-hidden="true" />
        </Button>
      </div>
    </div>
  )
}

function ReviewDialog({ review }: { review: Review }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="group w-full overflow-hidden rounded-[1.25rem] border border-[#f3d4de] bg-white text-left shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#e7789c]/20 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#f35b8f]/40 dark:border-white/10 dark:bg-[#1f1019]"
        >
          <div className="grid gap-0 sm:grid-cols-[11rem_1fr_auto] sm:items-stretch">
            <Image src={review.image} alt={`${review.name} food review visual`} width={900} height={720} className="h-36 w-full object-cover sm:h-full" />
            <div className="p-4">
              <p className="text-sm font-bold text-[#c92865] dark:text-[#ff9bbb]">{review.category}</p>
              <h3 className="mt-1 text-xl font-black text-[#311925] dark:text-white">{review.name}</h3>
              <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-[#7a5968] dark:text-[#e9c2cf]">
                <IconMapPin className="size-4 text-[#f35b8f]" aria-hidden="true" />
                {review.area}, Yogyakarta
              </p>
              <p className="mt-3 text-sm leading-6 text-[#6b4c5d] dark:text-[#f6dce5]">{review.highlight}</p>
            </div>
            <div className="flex items-center justify-between gap-3 border-t border-[#f3d4de] p-4 sm:flex-col sm:border-l sm:border-t-0 dark:border-white/10">
              <RatingBadge rating={review.rating} />
              <span className="text-sm font-black text-[#c92865] dark:text-[#ff9bbb]">View detail</span>
            </div>
          </div>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-[#160b12]/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 grid max-h-[88dvh] w-[min(92vw,56rem)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem] border border-[#f3d4de] bg-white shadow-2xl shadow-black/25 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 dark:border-white/10 dark:bg-[#21111a]">
          <div className="grid max-h-[88dvh] overflow-y-auto lg:grid-cols-[0.95fr_1.05fr]">
            <Image src={review.image} alt={`${review.name} full detail visual`} width={1100} height={900} className="h-72 w-full object-cover lg:h-full" />
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-black uppercase text-[#c92865] dark:text-[#ff9bbb]">{review.category}</p>
                  <Dialog.Title className="mt-2 text-3xl font-black text-[#311925] dark:text-white">{review.name}</Dialog.Title>
                  <Dialog.Description className="mt-3 leading-7 text-[#6b4c5d] dark:text-[#f6dce5]">{review.note}</Dialog.Description>
                </div>
                <Dialog.Close asChild>
                  <button
                    type="button"
                    className="grid size-10 shrink-0 place-items-center rounded-full border border-[#e9a7bb] bg-white text-[#4d2a3a] transition hover:bg-[#fff1f5] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#f35b8f]/40 dark:border-white/10 dark:bg-white/8 dark:text-white dark:hover:bg-white/14"
                    aria-label="Close review detail"
                  >
                    <IconX className="size-5" aria-hidden="true" />
                  </button>
                </Dialog.Close>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <DetailPill label="Rating" value={`${review.rating.toFixed(1)}/5`} />
                <DetailPill label="Area" value={`${review.area}, Jogja`} />
                <DetailPill label="Budget" value={review.budget} icon="wallet" />
                <DetailPill label="Best for" value={review.bestFor} />
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-[#f3d4de] bg-[#fff7f9] p-5 dark:border-white/10 dark:bg-white/8">
                <p className="text-sm font-black uppercase text-[#c92865] dark:text-[#ff9bbb]">Menu highlight</p>
                <p className="mt-2 text-lg font-black text-[#311925] dark:text-white">{review.highlight}</p>
                <p className="mt-4 text-sm font-black uppercase text-[#7a5968] dark:text-[#e9c2cf]">Vibe</p>
                <p className="mt-2 leading-7 text-[#6b4c5d] dark:text-[#f6dce5]">{review.vibe}</p>
              </div>

              <div className="mt-4 rounded-[1.5rem] bg-[#311925] p-5 text-white dark:bg-[#ff8db2] dark:text-[#24131d]">
                <p className="text-sm font-black uppercase opacity-80">Collaboration insight</p>
                <p className="mt-2 leading-7">{review.insight}</p>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

function RatingBadge({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-1 rounded-full bg-[#fff1c7] px-3 py-2 text-sm font-black text-[#7b4b00] dark:bg-[#4a3515] dark:text-[#ffe3a8]">
      <IconStarFilled className="size-4" aria-hidden="true" />
      {rating.toFixed(1)}/5
    </span>
  )
}

function DetailPill({ label, value, icon }: { label: string; value: string; icon?: "wallet" }) {
  return (
    <div className="rounded-2xl border border-[#f3d4de] bg-white p-4 dark:border-white/10 dark:bg-white/8">
      <p className="flex items-center gap-2 text-xs font-black uppercase text-[#c92865] dark:text-[#ff9bbb]">
        {icon === "wallet" && <IconWallet className="size-4" aria-hidden="true" />}
        {label}
      </p>
      <p className="mt-2 font-black text-[#311925] dark:text-white">{value}</p>
    </div>
  )
}

function CollabSection() {
  return (
    <div className="grid h-full min-h-[34rem] gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
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

function ContactSection() {
  return (
    <div className="grid h-full min-h-[34rem] place-items-center">
      <div className="w-full max-w-5xl rounded-[2rem] border border-[#f3d4de] bg-[#fff7f9] p-6 shadow-sm dark:border-white/10 dark:bg-white/8 sm:p-10">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-black uppercase text-[#c92865] dark:text-[#ff9bbb]">Contact</p>
            <h2 className="mt-3 text-3xl font-black text-[#311925] dark:text-white sm:text-5xl">Ready for a pink little Jogja food story?</h2>
            <p className="mt-4 max-w-2xl leading-7 text-[#6b4c5d] dark:text-[#f6dce5]">
              Untuk invitation, menu tasting, atau creator partnership di Yogyakarta, kirim brief singkat dan timeline campaign. Salma will reply with availability and next steps.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:min-w-56">
            <Button asChild size="lg" className="h-12 bg-[#f35b8f] text-white hover:bg-[#d93f76]">
              <a href="mailto:hello@salmadwiyanti.example">
                <IconMail className="size-4" aria-hidden="true" />
                Email Salma
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 border-[#e9a7bb] bg-white text-[#4d2a3a] hover:bg-[#fff1f5] dark:border-white/10 dark:bg-white/8 dark:text-white dark:hover:bg-white/14">
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <IconBrandInstagram className="size-4" aria-hidden="true" />
                Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
