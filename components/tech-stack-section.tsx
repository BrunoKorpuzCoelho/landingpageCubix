"use client"
import { Shield, FileCode, Database, Award } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const technologies = ["DeepSeek", "Llama", "PostgreSQL", "Python", "REST API", "JWT"]
const metricIcons = [FileCode, Database, Shield]

export function TechStackSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              {t.techStack.title} <span className="gradient-text">{t.techStack.titleHighlight}</span>
            </h2>
          </div>

          <div className="bg-gradient-to-r from-[#ED2009] to-[#FF5B19] p-[2px] rounded-xl">
            <div className="bg-card border-l-4 border-l-[#ED2009] p-8 rounded-xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent mb-2">{t.techStack.patentTitle}</h3>
                  <p className="text-xl md:text-2xl font-medium italic leading-relaxed text-balance">
                    {t.techStack.quote}
                  </p>
                </div>
              </div>
            </div>
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
            {t.techStack.metrics.map((metric, index) => {
              const Icon = metricIcons[index]
              return (
                <div key={index} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
                  <div className="h-10 w-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <p className={`text-sm font-medium ${index === 0 ? "text-green-500 font-semibold" : ""}`}>{metric}</p>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col items-center justify-center gap-2 pt-4">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-accent" />
              <p className="text-accent font-semibold">{t.techStack.badge}</p>
            </div>
            <p className="text-sm text-muted-foreground italic">{t.techStack.dateNote}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
