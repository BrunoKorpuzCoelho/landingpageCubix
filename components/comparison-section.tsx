"use client";
import { Check, X } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function ComparisonSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-balance">
            {t.comparison.title}{" "}
            <span className="text-muted-foreground">
              {t.comparison.titleEnd}
            </span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-4 font-bold text-lg">
                    {t.comparison.tableHeaders.feature}
                  </th>
                  <th className="text-center py-4 px-4 font-bold text-lg text-muted-foreground">
                    {t.comparison.tableHeaders.traditional}
                  </th>
                  <th className="text-center py-4 px-4 font-bold text-lg gradient-text">
                    {t.comparison.tableHeaders.cubix}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.comparison.features.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-border hover:bg-card/50 transition-colors"
                  >
                    <td className="py-4 px-4 font-medium">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {row.traditional ? (
                        <span className="text-muted-foreground">
                          {row.traditional}
                        </span>
                      ) : (
                        <X className="h-6 w-6 text-destructive mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-4 text-center bg-primary/5">
                      {row.cubix ? (
                        <span className="font-semibold text-accent">
                          {row.cubix}
                        </span>
                      ) : (
                        <Check className="h-6 w-6 text-accent mx-auto" />
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
  );
}
