"use client"

import { Briefcase, Building2, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

const pricingTiers = [
  {
    icon: Briefcase,
    name: "STARTER",
    subtitle: "For SMBs",
    features: ["Up to 10 users", "Core modules included", "Email support", "Monthly updates"],
  },
  {
    icon: Building2,
    name: "BUSINESS",
    subtitle: "Medium Enterprises",
    features: [
      "Up to 50 users",
      "All modules included",
      "Priority AI support",
      "Custom workflows",
      "Advanced analytics",
    ],
    highlighted: true,
  },
  {
    icon: Rocket,
    name: "ENTERPRISE",
    subtitle: "Large Scale",
    features: [
      "Unlimited users",
      "Full customization",
      "Dedicated AI layer",
      "On-premise option",
      "White-label available",
    ],
  },
]

export function PricingSection() {
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
              FLEXIBLE <span className="gradient-text">PLANS</span> FOR YOUR BUSINESS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, index) => {
              const Icon = tier.icon
              return (
                <div
                  key={index}
                  className={`bg-card border rounded-xl p-8 space-y-6 hover:scale-105 transition-all ${
                    tier.highlighted ? "border-primary shadow-xl shadow-primary/20 md:-translate-y-4" : "border-border"
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
                    variant={tier.highlighted ? "default" : "outline"}
                    className={`w-full ${tier.highlighted ? "gradient-primary" : ""}`}
                    onClick={scrollToDemo}
                  >
                    Contact Us
                  </Button>
                </div>
              )
            })}
          </div>

          <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 text-center">
            <p className="text-accent font-semibold">
              ⚠️ Due to high demand, we are prioritizing companies that schedule a demonstration
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
