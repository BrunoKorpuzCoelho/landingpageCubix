"use client";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const layerGradients = [
  "from-[#ED2009] to-[#FF5B19]",
  "from-[#FF5B19] to-[#FF8040]",
  "from-[#FF8040] to-[#FFA060]",
  "from-[#FFA060] to-[#FFC080]",
];

export function ArchitectureSection() {
  const { t } = useLanguage();

  return (
    <section id="technology" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              {t.architecture.title}{" "}
              <span className="gradient-text">
                {t.architecture.titleHighlight}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              {t.architecture.subtitle}
            </p>
          </div>

          <div className="space-y-6">
            {t.architecture.layers.map((layer, index) => (
              <div key={index} className="space-y-4">
                <div
                  className={`bg-gradient-to-r ${layerGradients[index]} p-[2px] rounded-xl hover:shadow-xl hover:shadow-primary/20 transition-all`}
                >
                  <div className="bg-card rounded-xl p-6 space-y-3">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h3 className="text-2xl font-bold">{layer.name}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {layer.description}
                    </p>
                  </div>
                </div>

                {index < t.architecture.layers.length - 1 && (
                  <div className="flex justify-center">
                    <ArrowDown className="h-6 w-6 text-muted-foreground/50" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center pt-8"></div>
        </div>
      </div>
    </section>
  );
}
