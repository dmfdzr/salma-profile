import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Salma Dwiyanti | Yogyakarta Food Reviewer",
  description:
    "Personal food reviewer profile for Salma Dwiyanti, featuring Yogyakarta reviewed places, cute cafe finds, and brand collaboration contact.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
