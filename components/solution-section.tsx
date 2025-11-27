import { Sparkles, Wrench, Clock, Users, Timer, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "90% Autonomy",
    description: "AI handles operations end-to-end without human intervention",
  },
  {
    icon: Wrench,
    title: "Bugs Auto-Fix Themselves",
    description: "Self-healing system detects and resolves issues automatically",
  },
  {
    icon: Clock,
    title: "24/7 Support <1sec",
    description: "Instant AI responses, no tickets, no waiting",
  },
  {
    icon: Users,
    title: "Zero Consultants",
    description: "Save €100-200/hour with autonomous operations",
  },
  {
    icon: Timer,
    title: "MTTR: 30min vs 4h",
    description: "8x faster mean time to resolution",
  },
  {
    icon: TrendingUp,
    title: "Self-Evolving System",
    description: "Learns and optimizes continuously from your data",
  },
]

export function SolutionSection() {
  return (
    <section id="product" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              CUBIX: <span className="gradient-text">STRUCTURAL AI</span>, NOT ADD-ON
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built from the ground up with AI at its core, not bolted on as an afterthought
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
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
