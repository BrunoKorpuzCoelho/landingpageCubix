"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Does CUBIX really work without consultants?",
    answer:
      "Yes! CUBIX is designed with 90% autonomy. The AI handles configuration, troubleshooting, and optimization automatically. Unlike traditional ERPs that require expensive consultants (€100-200/hour), CUBIX self-manages and self-heals, eliminating the need for ongoing consulting fees.",
  },
  {
    question: "How does local AI vs central AI work?",
    answer:
      "CUBIX uses a unique 4-tier confidence-based escalation system. Simple queries (70%) are handled by Local AI (<100ms). More complex issues escalate to Support AI, then Central AI, and finally DevOps AI for code-level fixes. This ensures optimal response time while maintaining high accuracy.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Implementation is significantly faster than traditional ERPs. Basic setup can be completed in days, not months. The AI assists with data migration, configuration, and user training. Most companies are operational within 2-4 weeks, compared to 6-12 months for legacy systems.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. CUBIX follows enterprise-grade security standards with end-to-end encryption, role-based access control, and regular security audits. We offer both cloud and on-premise deployment options. All AI processing respects your data privacy, and we never train on your proprietary information.",
  },
  {
    question: "Can I integrate with existing systems?",
    answer:
      "Yes, CUBIX offers a comprehensive REST API and supports standard integration protocols. Our AI can help map and migrate data from existing systems including SAP, Oracle, Odoo, and custom solutions. We also provide pre-built connectors for common business tools.",
  },
  {
    question: "What's the difference vs SAP/Oracle/Odoo?",
    answer:
      "Traditional ERPs bolt AI on as an assistant - it still requires human intervention. CUBIX has AI in its structural core, enabling true autonomy. We achieve 90% autonomous operation, <1 second support response, 30-minute MTTR vs 4+ hours, and eliminate consulting costs entirely.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-balance">
            FREQUENTLY ASKED <span className="gradient-text">QUESTIONS</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-card border rounded-xl overflow-hidden transition-all ${
                  openIndex === index ? "border-primary/50" : "border-border"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-card/80 transition-colors"
                >
                  <span className="font-bold text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-5 border-l-4 border-l-primary/50">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <button
              onClick={() => {
                const element = document.getElementById("demo")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2 group"
            >
              Still have questions? Contact us
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
