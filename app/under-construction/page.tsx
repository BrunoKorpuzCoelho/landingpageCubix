"use client"

import { Construction, Home, Rocket, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"

export default function UnderConstructionPage() {
  const router = useRouter()
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#ED2009]/20 to-[#FF5B19]/20 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="h-24 w-24 rounded-2xl gradient-primary flex items-center justify-center animate-pulse">
              <Construction className="h-12 w-12 text-white" />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-balance">
              {t.underConstruction.title} <span className="gradient-text">{t.underConstruction.titleHighlight}</span>
            </h1>
            <p className="text-xl text-muted-foreground">{t.underConstruction.subtitle}</p>
          </div>

          {/* Message */}
          <div className="bg-card border border-border rounded-xl p-6 space-y-4">
            <p className="text-foreground leading-relaxed">{t.underConstruction.message}</p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Rocket className="h-4 w-4 text-accent" />
              <span>{t.underConstruction.eta}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => router.push("/")}
              className="gradient-primary hover:opacity-90 transition-all hover:scale-105"
            >
              <Home className="mr-2 h-5 w-5" />
              {t.underConstruction.backHome}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                router.push("/#demo")
                setTimeout(() => {
                  const element = document.getElementById("demo")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }, 100)
              }}
              className="border-2 border-border hover:border-primary/50 hover:bg-primary/5 bg-transparent"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              {t.underConstruction.signUpMVP}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
