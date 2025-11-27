import { ArrowDown } from "lucide-react"

const layers = [
  {
    name: "LOCAL AI",
    
    description: "70% queries resolved locally, <100ms response time",
    gradient: "from-[#ED2009] to-[#FF5B19]",
  },
  {
    name: "SUPPORT AI",
    
    description: "Specialized 24/7 analysis, no tickets required",
    gradient: "from-[#FF5B19] to-[#FF8040]",
  },
  {
    name: "CENTRAL AI",
    
    description: "Complex bug optimization and system-wide decisions",
    gradient: "from-[#FF8040] to-[#FFA060]",
  },
  {
    name: "DEVOPS AI",
    
    description: "Code auto-healing, autonomous resolution, continuous deployment",
    gradient: "from-[#FFA060] to-[#FFC080]",
  },
]

export function ArchitectureSection() {
  return (
    <section id="technology" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              MULTI-LAYER <span className="gradient-text">4-TIER AI ARCHITECTURE</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Confidence-based escalation system routes queries to the optimal AI layer
            </p>
          </div>

          <div className="space-y-6">
            {layers.map((layer, index) => (
              <div key={index} className="space-y-4">
                <div
                  className={`bg-gradient-to-r ${layer.gradient} p-[2px] rounded-xl hover:shadow-xl hover:shadow-primary/20 transition-all`}
                >
                  <div className="bg-card rounded-xl p-6 space-y-3">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h3 className="text-2xl font-bold">{layer.name}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{layer.description}</p>
                  </div>
                </div>

                {index < layers.length - 1 && (
                  <div className="flex justify-center">
                    <ArrowDown className="h-6 w-6 text-muted-foreground/50" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <button className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2 group">
              See Technical Demo
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
