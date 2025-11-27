"use client"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-2xl font-bold gradient-text">CUBIX</div>
            <p className="text-muted-foreground max-w-xs">{t.footer.tagline}</p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-bold">{t.footer.product.title}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#product" className="hover:text-foreground transition-colors">
                  {t.footer.product.features}
                </a>
              </li>
              <li>
                <a href="#technology" className="hover:text-foreground transition-colors">
                  {t.footer.product.technology}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  {t.footer.product.pricing}
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-bold">{t.footer.company.title}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  {t.footer.company.about}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  {t.footer.company.blog}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  {t.footer.company.careers}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-bold">{t.footer.legal.title}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  {t.footer.legal.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  {t.footer.legal.terms}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  {t.footer.legal.cookies}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
