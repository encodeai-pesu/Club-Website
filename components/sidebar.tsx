"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Calendar, Menu, X, Users } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/events", label: "Events", icon: Calendar },
    { href: "/teams", label: "Teams", icon: Users },
  ]

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed left-4 top-4 z-50 text-white md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-64 border-r-4 border-white bg-black transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex items-center gap-3 border-b-4 border-white px-6 py-8">
            <img src="/logo.png" alt="Encode AI" className="h-10 w-10 rounded-none border-2 border-white" />
            <span className="text-2xl font-bold uppercase tracking-tight text-white">encode ai</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2 px-4 py-8">
            {links.map((link) => {
              const Icon = link.icon
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 rounded-none border-2 px-6 py-4 text-sm font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? "border-white bg-[rgb(255,102,0)] text-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
                      : "border-transparent text-white hover:border-white hover:bg-zinc-900"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="border-t-4 border-white px-6 py-6">
            <p className="text-xs font-mono uppercase tracking-wider text-white">© 2025 encode ai</p>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-white/10 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
