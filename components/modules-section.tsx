import { Users, ShoppingCart, Package, Warehouse, Calculator, BarChart3, Workflow, Shield, Globe } from "lucide-react"
;("use client")
import { useLanguage } from "@/contexts/language-context"

const moduleIcons = [Users, ShoppingCart, Package, Warehouse, Calculator, BarChart3, Workflow, Shield, Globe]

export function ModulesSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              {t.modules.title} <span className="gradient-text">{t.modules.titleHighlight}</span>
            </h2>
            <p className="text-xl text-muted-foreground">{t.modules.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.modules.items.map((module, index) => {
              const Icon = moduleIcons[index]
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 text-center space-y-4 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 transition-all group cursor-pointer"
                  title={module.description}
                >
                  <div className="flex justify-center">
                    <div className="h-16 w-16 rounded-full gradient-primary flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold">{module.name}</h3>
                </div>
              )
            })}
          </div>

          <p className="text-center text-muted-foreground text-lg pt-8">{t.modules.note}</p>
        </div>
      </div>
    </section>
  )
}
