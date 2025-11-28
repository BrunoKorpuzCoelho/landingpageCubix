"use client";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const painPoints = [
  {
    title: "Ticket-based support",
    description: "Days of waiting for simple fixes",
  },
  {
    title: "Bug resolution",
    description: "4+ hours per incident",
  },
  {
    title: "Expensive consultants",
    description: "€100-200/hour ongoing costs",
  },
  {
    title: "AI as add-on",
    description: "No real autonomy, just assistance",
  },
  {
    title: "Zero proactive optimization",
    description: "Reactive systems, not predictive",
  },
];

export function ProblemSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-balance">
            {t.problem.title}{" "}
            <span className="gradient-text">{t.problem.titleHighlight}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.problem.painPoints.map((point, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 space-y-3 hover:border-destructive/50 transition-all"
              >
                <X className="h-8 w-8 text-destructive" />
                <h3 className="text-xl font-bold">{point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 border-l-4 border-l-[#ED2009] bg-card/80 p-8 rounded-r-xl">
            <p className="text-xl md:text-2xl font-medium italic leading-relaxed text-balance">
              {t.problem.quote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
