import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { ArchitectureSection } from "@/components/architecture-section"
import { ComparisonSection } from "@/components/comparison-section"
import { ModulesSection } from "@/components/modules-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { EarlyAccessSection } from "@/components/early-access-section"
import { PricingSection } from "@/components/pricing-section"
import { DemoForm } from "@/components/demo-form"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { ConstructionBanner } from "@/components/construction-banner"
import { Rocket } from "lucide-react"
import { TeamSection } from "@/components/team-section"
;("use client")
import { useLanguage } from "@/contexts/language-context"

export default function Page() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      <ConstructionBanner />
      <div className="pt-24">
        <Header />
        <main>
          <HeroSection />
          <ProblemSection />
          <SolutionSection />
          <ArchitectureSection />
          <ComparisonSection />
          <ModulesSection />
          <RoadmapSection />
          <TechStackSection />
          <PricingSection />
          <EarlyAccessSection />
          <TeamSection />

          {/* Demo Form Section */}
          <section id="demo" className="py-20">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center gap-3">
                    <Rocket className="h-8 w-8 text-primary" />
                    <h2 className="text-4xl md:text-5xl font-bold">
                      {t.demo.title} <span className="gradient-text">{t.demo.titleHighlight}</span>
                    </h2>
                  </div>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.demo.subtitle}</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
                  <DemoForm />
                </div>
              </div>
            </div>
          </section>

          <FAQSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
