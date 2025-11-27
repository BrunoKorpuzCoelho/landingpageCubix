import { Database, Users, ShoppingCart, Warehouse, Package, Calculator } from "lucide-react"

const roadmapPhases = [
  {
    phase: "Phase 1",
    name: "CORE BASE",
    duration: "0-6/8 months",
    icon: Database,
    features: [
      "Complete system foundation",
      "Database & ORM",
      "Authentication & Security",
      "Views & UI",
      "REST API",
      "Native AI",
    ],
    isFoundation: true,
  },
  {
    phase: "Phase 2",
    name: "CRM APP",
    duration: "1-2 months",
    icon: Users,
    features: ["Complete CRM Module", "Leads & Opportunities", "Marketing Automation"],
  },
  {
    phase: "Phase 3",
    name: "SALES APP",
    duration: "1-2 months",
    icon: ShoppingCart,
    features: ["Complete Sales Module", "Quotes & Orders", "Invoices & Payments"],
  },
  {
    phase: "Phase 4",
    name: "INVENTORY APP",
    duration: "1-2 months",
    icon: Warehouse,
    features: ["Complete Inventory Module", "Warehouses & Stock", "Batches & Serial Numbers"],
  },
  {
    phase: "Phase 5",
    name: "PURCHASE APP",
    duration: "1-2 months",
    icon: Package,
    features: ["Complete Purchase Module", "Requisitions & Orders", "Supplier Management"],
  },
  {
    phase: "Phase 6",
    name: "ACCOUNTING APP",
    duration: "1-2 months",
    icon: Calculator,
    features: ["Complete Accounting Module", "Financial Management", "Advanced Reporting"],
  },
]

export function RoadmapSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              ROADMAP: <span className="gradient-text">12-16 MONTHS TO COMPLETE MVP</span>
            </h2>
            <p className="text-xl text-muted-foreground">Structured development timeline with parallel execution</p>
          </div>

          {/* Timeline Visualization */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-1 gradient-primary rounded-full"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {roadmapPhases.map((phase, index) => {
                const Icon = phase.icon
                return (
                  <div key={index} className={`relative ${phase.isFoundation ? "lg:col-span-3" : ""}`}>
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

          <p className="text-center text-muted-foreground">
            Parallel development after Phase 1 accelerates time to market
          </p>
        </div>
      </div>
    </section>
  )
}
