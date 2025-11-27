export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-2xl font-bold gradient-text">CUBIX</div>
            <p className="text-muted-foreground max-w-xs">The first ERP with AI that works autonomously</p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-bold">PRODUCT</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#product" className="hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#technology" className="hover:text-foreground transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-bold">COMPANY</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-bold">LEGAL</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 CUBIX ERP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
