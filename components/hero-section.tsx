"use client"

import { Button } from "@/components/ui/button"
import { Play, Rocket } from "lucide-react"

export function HeroSection() {
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
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance">
            THE FIRST ERP WITH AI THAT <span className="gradient-text">WORKS AUTONOMOUSLY</span>, NOT JUST ASSISTS
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            <span className="text-accent font-semibold">90% Autonomy</span> • Auto-Fixes Bugs • 24/7 Instant Support •
            Zero Consultants
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={scrollToDemo}
              className="gradient-primary text-lg px-8 hover:opacity-90 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/50"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Schedule Free Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-2 border-border hover:border-primary/50 hover:bg-primary/5 bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch How It Works
            </Button>
          </div>

          {/* Hero Visual Placeholder */}
          <div className="mt-16 relative">
            <div className="relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 shadow-2xl">
              <img src="/futuristic-ai-erp-dashboard-with-dark-theme-and-re.jpg" alt="CUBIX ERP Dashboard" className="rounded-lg w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
