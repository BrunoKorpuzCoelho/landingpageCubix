"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
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
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient-primary group-hover:w-full transition-all duration-200"></span>
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("product")}
              className="text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              Product
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient-primary group-hover:w-full transition-all duration-200"></span>
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("technology")}
              className="text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              Technology
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient-primary group-hover:w-full transition-all duration-200"></span>
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("demo")}
              className="text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient-primary group-hover:w-full transition-all duration-200"></span>
            </button>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <Button
            onClick={() => scrollToSection("demo")}
            className="hidden md:inline-flex gradient-primary hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
          >
            Schedule Demo
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
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("product")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Product
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("technology")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Technology
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("demo")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
            </li>
            <li>
              <Button onClick={() => scrollToSection("demo")} className="gradient-primary w-full">
                Schedule Demo
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
