"use client"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { ArchitectureSection } from "@/components/architecture-section"
import { ComparisonSection } from "@/components/comparison-section"
import { ModulesSection } from "@/components/modules-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { PricingSection } from "@/components/pricing-section"
import { DemoForm } from "@/components/demo-form"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { ConstructionBanner } from "@/components/construction-banner"
import { Rocket } from "lucide-react"
import { TeamSection } from "@/components/team-section"
import { AnimatedSection } from "@/components/animated-section"
import { EarlyAccessSection } from "@/components/early-access-section" // Import EarlyAccessSection
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

          <AnimatedSection animation="slide-left">
            <ProblemSection />
          </AnimatedSection>

          <AnimatedSection animation="slide-right">
            <SolutionSection />
          </AnimatedSection>

          <AnimatedSection animation="fade-in">
            <ArchitectureSection />
          </AnimatedSection>

          <AnimatedSection animation="slide-left">
            <ComparisonSection />
          </AnimatedSection>

          <AnimatedSection animation="slide-right">
            <ModulesSection />
          </AnimatedSection>

          <AnimatedSection animation="fade-in">
            <RoadmapSection />
          </AnimatedSection>

          <AnimatedSection animation="scale-fade-in">
            <TechStackSection />
          </AnimatedSection>

          <AnimatedSection animation="slide-left">
            <PricingSection />
          </AnimatedSection>

          <AnimatedSection animation="slide-right">
            <EarlyAccessSection /> // Use EarlyAccessSection
          </AnimatedSection>

          <AnimatedSection animation="fade-in">
            <TeamSection />
          </AnimatedSection>

          {/* Demo Form Section */}
          <AnimatedSection animation="scale-fade-in" id="demo" className="py-20">
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
          </AnimatedSection>

          <AnimatedSection animation="fade-in">
            <FAQSection />
          </AnimatedSection>
        </main>
        <Footer />
      </div>
    </div>
  )
}
