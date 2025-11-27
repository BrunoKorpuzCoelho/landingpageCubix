import { Users, ShoppingCart, Package, Warehouse, Calculator, BarChart3, Workflow, Shield, Globe } from "lucide-react"

const modules = [
  { icon: Users, name: "CRM & Leads", description: "Customer relationship management and lead tracking" },
  { icon: ShoppingCart, name: "Sales & Invoicing", description: "Complete sales cycle and automated billing" },
  { icon: Package, name: "Purchase Orders", description: "Procurement and supplier management" },
  { icon: Warehouse, name: "Inventory Management", description: "Real-time stock control and warehousing" },
  { icon: Calculator, name: "Accounting", description: "Full financial management and reporting" },
  { icon: BarChart3, name: "AI-Powered Reports", description: "Intelligent analytics and forecasting" },
  { icon: Workflow, name: "Automated Workflows", description: "Custom business process automation" },
  { icon: Shield, name: "Permissions & Security", description: "Role-based access and data protection" },
  { icon: Globe, name: "Multi-language", description: "International support and localization" },
]

export function ModulesSection() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              COMPLETE <span className="gradient-text">MODULES INCLUDED</span>
            </h2>
            <p className="text-xl text-muted-foreground">Everything you need to run your business, powered by AI</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => {
              const Icon = module.icon
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

          <p className="text-center text-muted-foreground text-lg pt-8">
            + 1,500 features across 46 development phases
          </p>
        </div>
      </div>
    </section>
  )
}
