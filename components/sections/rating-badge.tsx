import { IconStarFilled } from "@tabler/icons-react"

export function RatingBadge({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-1 rounded-full bg-[#fff1c7] px-3 py-2 text-sm font-black text-[#7b4b00] dark:bg-[#4a3515] dark:text-[#ffe3a8]">
      <IconStarFilled className="size-4" aria-hidden="true" />
      {rating.toFixed(1)}/5
    </span>
  )
}
