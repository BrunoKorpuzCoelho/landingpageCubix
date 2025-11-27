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
import { Rocket } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen">
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

        {/* Demo Form Section */}
        <section id="demo" className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Rocket className="h-8 w-8 text-primary" />
                  <h2 className="text-4xl md:text-5xl font-bold">
                    SCHEDULE YOUR FREE <span className="gradient-text">DEMONSTRATION</span>
                  </h2>
                </div>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  See CUBIX in action and discover how AI can revolutionize your company's management
                </p>
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
  )
}
