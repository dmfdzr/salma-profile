import { personalityNotes } from "@/lib/profile-data"

export function AboutSection() {
  return (
    <div className="grid h-full min-h-136 gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
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
