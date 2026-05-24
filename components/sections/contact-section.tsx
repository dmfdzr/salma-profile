import { IconBrandInstagram, IconBrandTiktok, IconBrandWhatsapp, IconMail } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"

const contactLinks = [
  {
    label: "Email Salma",
    href: "mailto:hello@salmadwiyanti.example",
    icon: IconMail,
    primary: true,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/6281234567890",
    icon: IconBrandWhatsapp,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: IconBrandInstagram,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/",
    icon: IconBrandTiktok,
  },
]

export function ContactSection() {
  return (
    <div className="grid h-full min-h-136 place-items-center">
      <div className="w-full max-w-5xl rounded-[2rem] border border-[#f3d4de] bg-[#fff7f9] p-6 shadow-sm dark:border-white/10 dark:bg-white/8 sm:p-10">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-black uppercase text-[#c92865] dark:text-[#ff9bbb]">Contact</p>
            <h2 className="mt-3 text-3xl font-black text-[#311925] dark:text-white sm:text-5xl">Ready for a pink little Jogja food story?</h2>
            <p className="mt-4 max-w-2xl leading-7 text-[#6b4c5d] dark:text-[#f6dce5]">
              Untuk invitation, menu tasting, atau creator partnership di Yogyakarta, kirim brief singkat dan timeline campaign. Salma will reply with availability and next steps.
            </p>
          </div>
          <div className="grid gap-3 sm:min-w-64 sm:grid-cols-2 md:grid-cols-1">
            {contactLinks.map((item) => {
              const Icon = item.icon

              return (
                <Button
                  key={item.label}
                  asChild
                  size="lg"
                  variant={item.primary ? "default" : "outline"}
                  className={
                    item.primary
                      ? "h-12 bg-[#f35b8f] text-white hover:bg-[#d93f76]"
                      : "h-12 border-[#e9a7bb] bg-white text-[#4d2a3a] hover:bg-[#fff1f5] dark:border-white/10 dark:bg-white/8 dark:text-white dark:hover:bg-white/14"
                  }
                >
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>
                    <Icon className="size-4" aria-hidden="true" />
                    {item.label}
                  </a>
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
