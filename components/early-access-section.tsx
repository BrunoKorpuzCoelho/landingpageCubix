"use client"
import { Gift, Zap, Trophy, Target, CheckCircle2, Sparkles, Calendar } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const benefitIcons = {
  Gift,
  Zap,
  Trophy,
  Target,
}

export function EarlyAccessSection() {
  const { t } = useLanguage()
  const router = useRouter()

  const handleAlphaSignup = () => {
    router.push("/under-construction")
  }

  const handleBetaSignup = () => {
    router.push("/under-construction")
  }

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              {t.earlyAccess.title} <span className="gradient-text">{t.earlyAccess.titleHighlight}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t.earlyAccess.subtitle}</p>
          </div>

          {/* Alpha & Beta Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.earlyAccess.tiers.map((tier, index) => {
              const isAlpha = index === 0
              return (
                <div key={index} className="bg-gradient-to-r from-[#ED2009] to-[#FF5B19] p-[2px] rounded-2xl">
                  <div className="bg-card rounded-2xl p-8 h-full space-y-6">
                    {/* Header */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {isAlpha ? (
                            <Sparkles className="h-6 w-6 text-primary" />
                          ) : (
                            <Calendar className="h-6 w-6 text-accent" />
                          )}
                          <h3 className="text-2xl font-bold">{tier.name}</h3>
                        </div>
                        <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full">
                          {tier.badge}
                        </span>
                      </div>
                      <p className="text-muted-foreground font-mono text-sm">{tier.date}</p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button
                      onClick={isAlpha ? handleAlphaSignup : handleBetaSignup}
                      className="w-full gradient-primary text-white hover:opacity-90 transition-opacity"
                      size="lg"
                    >
                      {isAlpha ? t.earlyAccess.cta.alpha : t.earlyAccess.cta.beta}
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Benefits Section */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 space-y-8">
            <h3 className="text-3xl font-bold text-center">{t.earlyAccess.benefits.title}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.earlyAccess.benefits.items.map((benefit, index) => {
                const Icon = benefitIcons[benefit.icon as keyof typeof benefitIcons]
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Note */}
            <div className="pt-4 border-t border-border">
              <p className="text-center text-sm text-muted-foreground leading-relaxed">{t.earlyAccess.benefits.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
