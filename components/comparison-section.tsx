import { Check, X } from "lucide-react"

const comparisonData = [
  { feature: "AI native in core", traditional: false, cubix: true },
  { feature: "Full autonomy (90%)", traditional: false, cubix: true },
  { feature: "Auto-healing bugs", traditional: false, cubix: true },
  { feature: "Instant support (<1sec)", traditional: false, cubix: true },
  { feature: "Zero consultants needed", traditional: false, cubix: true },
  { feature: "Response time", traditional: "Hours/Days", cubix: "<1 second" },
  { feature: "Consulting cost", traditional: "€100-200/hour", cubix: "€0" },
  { feature: "Mean time to repair", traditional: "4+ hours", cubix: "30 minutes" },
]

export function ComparisonSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-balance">
            CUBIX vs <span className="text-muted-foreground">SAP/ORACLE/ODOO</span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-4 font-bold text-lg">Feature</th>
                  <th className="text-center py-4 px-4 font-bold text-lg text-muted-foreground">Traditional ERPs</th>
                  <th className="text-center py-4 px-4 font-bold text-lg gradient-text">CUBIX</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-border hover:bg-card/50 transition-colors">
                    <td className="py-4 px-4 font-medium">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.traditional === "boolean" ? (
                        row.traditional ? (
                          <Check className="h-6 w-6 text-accent mx-auto" />
                        ) : (
                          <X className="h-6 w-6 text-destructive mx-auto" />
                        )
                      ) : (
                        <span className="text-muted-foreground">{row.traditional}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center bg-primary/5">
                      {typeof row.cubix === "boolean" ? (
                        row.cubix ? (
                          <Check className="h-6 w-6 text-accent mx-auto" />
                        ) : (
                          <X className="h-6 w-6 text-destructive mx-auto" />
                        )
                      ) : (
                        <span className="font-semibold text-accent">{row.cubix}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
