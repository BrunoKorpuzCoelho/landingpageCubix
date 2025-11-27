import { Shield, FileCode, Database } from "lucide-react"

const technologies = ["DeepSeek", "Llama", "PostgreSQL", "Python", "REST API", "JWT"]

const metrics = [
  { icon: FileCode, text: "156 specialized Python files" },
  { icon: Database, text: "16 autonomous analysis modules" },
  { icon: Shield, text: "100+ intelligent analysis functions" },
]

export function TechStackSection() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              BUILT WITH <span className="gradient-text">CUTTING-EDGE TECHNOLOGY</span>
            </h2>
          </div>

          <div className="bg-card border-l-4 border-l-[#ED2009] p-8 rounded-r-xl">
            <p className="text-xl md:text-2xl font-medium italic leading-relaxed text-balance">
              Patentable architecture with unique confidence-based escalation system
            </p>
          </div>

          {/* Technology Logos */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-card border border-border rounded-lg font-semibold text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all"
              >
                {tech}
              </div>
            ))}
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <div key={index} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
                  <div className="h-10 w-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-sm font-medium">{metric.text}</p>
                </div>
              )
            })}
          </div>

          <div className="flex items-center justify-center gap-2 pt-4">
            <Shield className="h-5 w-5 text-accent" />
            <p className="text-accent font-semibold">Open Source & Privacy-First</p>
          </div>
        </div>
      </div>
    </section>
  )
}
