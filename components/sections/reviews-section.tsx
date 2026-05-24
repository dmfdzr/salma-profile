"use client"

import { useMemo, useState } from "react"
import { IconChevronLeft, IconChevronRight, IconMapPin, IconWallet, IconX } from "@tabler/icons-react"
import Image from "next/image"
import { Dialog } from "radix-ui"

import { Button } from "@/components/ui/button"
import { Review, reviews, reviewsPerPage } from "@/lib/profile-data"

import { RatingBadge } from "./rating-badge"

export function ReviewsSection() {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(reviews.length / reviewsPerPage)
  const pagedReviews = useMemo(() => {
    const start = (page - 1) * reviewsPerPage

    return reviews.slice(start, start + reviewsPerPage)
  }, [page])

  return (
    <div className="flex h-full min-h-0 flex-col gap-4">
      <div className="shrink-0 md:flex md:items-end md:justify-between md:gap-4">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase text-[#c92865] dark:text-[#ff9bbb]">Reviewed places</p>
          <h2 className="mt-3 text-2xl font-black text-[#311925] dark:text-white sm:text-5xl">20 Jogja reviews, 5 per page.</h2>
        </div>
        <p className="mt-3 max-w-md text-sm leading-6 text-[#6b4c5d] dark:text-[#f6dce5] md:mt-0 md:text-base md:leading-7">
          Click each review to see menu highlights, budget, vibe, best-for notes, and brand insight.
        </p>
      </div>

      <div className="grid min-h-0 flex-1 content-start gap-3 overflow-y-auto pb-2 pr-1">
        {pagedReviews.map((review) => (
          <ReviewDialog key={review.name} review={review} />
        ))}
      </div>

      <div className="shrink-0 rounded-[1.25rem] border border-[#f3d4de] bg-white/75 p-2 dark:border-white/10 dark:bg-white/8 sm:rounded-full">
        <div className="flex items-center justify-between gap-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled={page === 1}
          onClick={() => setPage((current) => Math.max(1, current - 1))}
          className="border-[#e9a7bb] bg-white text-[#4d2a3a] hover:bg-[#fff1f5] dark:border-white/10 dark:bg-white/8 dark:text-white dark:hover:bg-white/14"
        >
          <IconChevronLeft className="size-4" aria-hidden="true" />
          <span className="hidden sm:inline">Previous</span>
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
          <span className="hidden sm:inline">Next</span>
          <IconChevronRight className="size-4" aria-hidden="true" />
        </Button>
        </div>
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
        <Dialog.Content
          onEscapeKeyDown={(event) => event.preventDefault()}
          onPointerDownOutside={(event) => event.preventDefault()}
          className="fixed left-1/2 top-1/2 z-50 grid max-h-[88dvh] w-[min(92vw,56rem)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem] border border-[#f3d4de] bg-white shadow-2xl shadow-black/25 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 dark:border-white/10 dark:bg-[#21111a]"
        >
          <Dialog.Close asChild>
            <button
              type="button"
              className="absolute right-4 top-4 z-10 grid size-10 shrink-0 place-items-center rounded-full border border-[#e9a7bb] bg-white text-[#4d2a3a] shadow-lg shadow-black/10 transition hover:bg-[#fff1f5] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#f35b8f]/40 dark:border-white/10 dark:bg-[#2c1824] dark:text-white dark:hover:bg-[#3a2130]"
              aria-label="Close review detail"
            >
              <IconX className="size-5" aria-hidden="true" />
            </button>
          </Dialog.Close>
          <div className="grid max-h-[88dvh] overflow-y-auto lg:grid-cols-[0.95fr_1.05fr]">
            <Image src={review.image} alt={`${review.name} full detail visual`} width={1100} height={900} className="h-72 w-full object-cover lg:h-full" />
            <div className="p-6 pt-16 sm:p-8 sm:pt-16">
              <div>
                <div>
                  <p className="text-sm font-black uppercase text-[#c92865] dark:text-[#ff9bbb]">{review.category}</p>
                  <Dialog.Title className="mt-2 text-3xl font-black text-[#311925] dark:text-white">{review.name}</Dialog.Title>
                  <Dialog.Description className="mt-3 leading-7 text-[#6b4c5d] dark:text-[#f6dce5]">{review.note}</Dialog.Description>
                </div>
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
