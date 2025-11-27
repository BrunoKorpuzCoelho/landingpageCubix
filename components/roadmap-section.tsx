"use client"
import { Database, Users, ShoppingCart, Warehouse, Package, Calculator, Calendar, Rocket, Sparkles } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const phaseIcons = [Database, Users, ShoppingCart, Warehouse, Package, Calculator]

export function RoadmapSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              {t.roadmap.title} <span className="gradient-text">{t.roadmap.titleHighlight}</span>
            </h2>
            <p className="text-xl text-muted-foreground">{t.roadmap.subtitle}</p>
          </div>

          <div className="bg-gradient-to-r from-[#ED2009] to-[#FF5B19] p-[2px] rounded-2xl">
            <div className="bg-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-center mb-8">{t.roadmap.timeline.title}</h3>

              {/* Timeline Container */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute top-6 left-0 right-0 h-1 gradient-primary hidden md:block"></div>

                {/* Timeline Milestones */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                  {/* Closed Alpha */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="h-12 w-12 rounded-full gradient-primary flex items-center justify-center z-10 bg-card border-4 border-card shadow-lg">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground font-mono">{t.roadmap.timeline.closedAlpha.date}</p>
                      <h4 className="text-lg font-bold text-accent">{t.roadmap.timeline.closedAlpha.label}</h4>
                      <p className="text-sm text-muted-foreground">{t.roadmap.timeline.closedAlpha.description}</p>
                    </div>
                  </div>

                  {/* Open Beta */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="h-12 w-12 rounded-full gradient-primary flex items-center justify-center z-10 bg-card border-4 border-card shadow-lg">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground font-mono">{t.roadmap.timeline.openBeta.date}</p>
                      <h4 className="text-lg font-bold text-accent">{t.roadmap.timeline.openBeta.label}</h4>
                      <p className="text-sm text-muted-foreground">{t.roadmap.timeline.openBeta.description}</p>
                    </div>
                  </div>

                  {/* MVP Launch */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="h-12 w-12 rounded-full gradient-primary flex items-center justify-center z-10 bg-card border-4 border-card shadow-lg">
                      <Rocket className="h-6 w-6 text-white" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground font-mono">{t.roadmap.timeline.mvp.date}</p>
                      <h4 className="text-lg font-bold text-accent">{t.roadmap.timeline.mvp.label}</h4>
                      <p className="text-sm text-muted-foreground">{t.roadmap.timeline.mvp.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Development Phases Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-1 gradient-primary rounded-full"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {t.roadmap.phases.map((phase, index) => {
                const Icon = phaseIcons[index]
                const isFoundation = index === 0
                return (
                  <div key={index} className={`relative ${isFoundation ? "lg:col-span-3" : ""}`}>
                    <div className="bg-gradient-to-r from-[#ED2009] to-[#FF5B19] p-[2px] rounded-xl h-full">
                      <div className="bg-card rounded-xl p-6 space-y-4 h-full">
                        {/* Phase Icon */}
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground font-mono">{phase.phase}</p>
                            <h3 className="text-xl font-bold">{phase.name}</h3>
                          </div>
                        </div>

                        {/* Duration */}
                        <p className="text-accent font-semibold">{phase.duration}</p>

                        {/* Features */}
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {phase.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-accent mt-0.5">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <p className="text-center text-muted-foreground">{t.roadmap.note}</p>
        </div>
      </div>
    </section>
  )
}
