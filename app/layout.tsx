import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "WashLink - Car Wash, Anywhere, Anytime",
  description: "Book vetted mobile detailers in minutes. Get quality care where your car is — home, office, or anywhere.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

