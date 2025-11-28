import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/language-context"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CUBIX ERP - The First AI-Native ERP with 90% Autonomy",
  description:
    "The first ERP with AI that works autonomously, not just assists. 90% autonomy, auto-fixes bugs, 24/7 instant support, zero consultants needed.",
  keywords: "ERP, AI ERP, autonomous ERP, business management, CRM, accounting, inventory",
  generator: "v0.app",
  icons: {
    icon: "/cubix_favicon.png",
    apple: "/cubix_favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
