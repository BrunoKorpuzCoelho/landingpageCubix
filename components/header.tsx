"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useRouter } from "next/navigation"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useLanguage()
  const router = useRouter()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-12 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold gradient-text">CUBIX</div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className="text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {t.nav.home}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient-primary group-hover:w-full transition-all duration-200"></span>
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("product")}
              className="text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {t.nav.product}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient-primary group-hover:w-full transition-all duration-200"></span>
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("technology")}
              className="text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {t.nav.technology}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient-primary group-hover:w-full transition-all duration-200"></span>
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("demo")}
              className="text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {t.nav.contact}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient-primary group-hover:w-full transition-all duration-200"></span>
            </button>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Button
            onClick={() => router.push("/under-construction")}
            className="hidden md:inline-flex gradient-primary hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
          >
            {t.nav.signUpMVP}
          </Button>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-foreground">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <ul className="flex flex-col gap-4 p-6">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.home}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("product")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.product}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("technology")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.technology}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("demo")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.contact}
              </button>
            </li>
            <li>
              <Button onClick={() => router.push("/under-construction")} className="gradient-primary w-full">
                {t.nav.signUpMVP}
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
