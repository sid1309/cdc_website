"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavClick = (href) => {
    const targetId = href.substring(1) // Remove the # from href
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const navbarHeight = 80 // Approximate navbar height
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }

    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { href: "#academic-info", label: "Overview" },
    { href: "#why-recruit", label: "Why Recruit" },
    { href: "#directors-message", label: "Director's Message" },
    { href: "#recruitment-process", label: "Recruitment Process" },
    { href: "#contact", label: "Contact Us" },
  ]

  return (
    <header className="bg-[#113F67]  text-white sticky top-0 z-50 ">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/images/logo1.jpg" style={{ width: '60px'}}
            alt="IIT Tirupati Logo"
          />
          <h1 className="text-xl font-semibold tracking-wide">Career Development Center, IIT Tirupati</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="hover:text-[#d92c54] transition-colors cursor-pointer font-semibold tracking-wide text-base tracking-wide"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:bg-white/10"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#113F67] border-t border-white/20 z-40 shadow-lg">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="hover:text-[#d92c54]  transition-colors py-2 border-b border-white/10 last:border-b-0 text-left cursor-pointer font-medium text-base tracking-wide"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
