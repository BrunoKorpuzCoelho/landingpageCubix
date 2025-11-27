"use client"

import { Sparkles, Wrench, Clock, Users, Timer, TrendingUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const featureIcons = [Sparkles, Wrench, Clock, Users, Timer, TrendingUp]

export function SolutionSection() {
  const { t } = useLanguage()

  return (
    <section id="product" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              {t.solution.title} <span className="gradient-text">{t.solution.titleHighlight}</span>
              {t.solution.titleEnd}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t.solution.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.solution.features.map((feature, index) => {
              const Icon = featureIcons[index]
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 space-y-4 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50 transition-all group"
                >
                  <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
