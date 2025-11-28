"use client"

import { Button } from "@/components/ui/button"
import { Play, Rocket, Award } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useRouter } from "next/navigation"

export function HeroSection() {
  const { t } = useLanguage()
  const router = useRouter()

  const scrollToDemo = () => {
    const element = document.getElementById("demo")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#ED2009]/20 to-[#FF5B19]/20 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="bg-gradient-to-r from-[#ED2009] to-[#FF5B19] p-[1px] rounded-full">
              <div className="bg-background px-4 py-1.5 rounded-full flex items-center gap-2">
                <Award className="h-4 w-4 text-accent" />
                <span className="text-sm font-semibold text-accent">{t.hero.patentBadge}</span>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance text-foreground">
            {t.hero.title} <span className="gradient-text">{t.hero.titleHighlight}</span>
            {t.hero.titleEnd}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            <span className="text-accent font-semibold">{t.hero.subtitle}</span> • {t.hero.subtitleFeatures}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={scrollToDemo}
              className="gradient-primary text-lg px-8 hover:opacity-90 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/50"
            >
              <Rocket className="mr-2 h-5 w-5" />
              {t.hero.ctaPrimary}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => router.push("/under-construction")}
              className="text-lg px-8 border-2 border-border hover:border-primary/50 hover:bg-primary/5 bg-transparent text-foreground"
            >
              <Play className="mr-2 h-5 w-5" />
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
