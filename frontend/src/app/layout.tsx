import "./index.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "My Next.js App",
  // Bez "icons", żeby nie wymuszać favikony
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
