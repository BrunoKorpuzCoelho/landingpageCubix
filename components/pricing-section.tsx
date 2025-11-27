"use client"

import { Cloud, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

const tierIcons = [Cloud, Server]

export function PricingSection() {
  const { t } = useLanguage()

  const scrollToDemo = () => {
    const element = document.getElementById("demo")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              {t.pricing.title} <span className="gradient-text">{t.pricing.titleHighlight}</span> {t.pricing.titleEnd}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t.pricing.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {t.pricing.tiers.map((tier, index) => {
              const Icon = tierIcons[index]
              const highlighted = index === 1
              return (
                <div
                  key={index}
                  className={`bg-card border rounded-xl p-8 space-y-6 hover:scale-105 transition-all ${
                    highlighted ? "border-primary shadow-xl shadow-primary/20 md:-translate-y-4" : "border-border"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{tier.name}</h3>
                    <p className="text-muted-foreground">{tier.subtitle}</p>
                  </div>

                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-accent mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={highlighted ? "default" : "outline"}
                    className={`w-full ${highlighted ? "gradient-primary" : ""}`}
                    onClick={scrollToDemo}
                  >
                    {t.pricing.cta}
                  </Button>
                </div>
              )
            })}
          </div>

          <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 text-center">
            <p className="text-accent font-semibold">{t.pricing.alert}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
