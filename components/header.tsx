"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Search, Menu, X, Github } from "lucide-react"
import { ModeToggle } from "./mode-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/pandoc-logo.png"
              alt="Pandoc Logo"
              className="h-8 rounded-full object-fit"
            />
            <span className="inline-block font-bold text-xl">Pandoc</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Acerca de</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/installing" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Instalación</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/demo" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Demos</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger><Link href="/docs" className="no-underline">
                    Documentación
                  </Link>
                    </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {[
                        { title: "Primeros pasos", href: "/docs" },
                        { title: "Instalación", href: "/docs/installation" },
                        { title: "Guía de usuario", href: "/docs/users-guide" },
                        { title: "Formatos soportados", href: "/docs/formats" },
                        // { title: "Contribuir", href: "/docs/contributing" },
                        // { title: "FAQ", href: "/docs/faq" },
                        // { title: "Filtros", href: "/docs/filters" },
                        // { title: "Filtros Lua", href: "/docs/lua-filters" },
                        // { title: "Lectores personalizados", href: "/docs/custom-readers" },
                        // { title: "Escritores personalizados", href: "/docs/custom-writers" },
                        // { title: "Creando un ebook", href: "/docs/making-ebook" },
                        // { title: "Soporte para Emacs Org mode", href: "/docs/org-mode" },
                        // { title: "Soporte para JATS", href: "/docs/jats" },
                      ].map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/help" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Ayuda</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Buscar..." className="w-[200px] pl-8 md:w-[200px] lg:w-[300px]" />
          </div>
          {/* <ModeToggle /> */}
          <Button variant="outline" size="icon" onClick={() => window.open("https://github.com/jgm/pandoc")}>
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Button>
        </div>
        <button className="flex items-center space-x-2 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Menu</span>
        </button>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in md:hidden bg-background">
          <div className="relative z-20 grid gap-6 rounded-md p-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold">Pandoc</span>
            </Link>
            <nav className="grid grid-flow-row auto-rows-max text-sm">
              <Link
                href="/about"
                className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Acerca de
              </Link>
              <Link
                href="/installing"
                className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Instalación
              </Link>
              <Link
                href="/demo"
                className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Demos
              </Link>
              <Link
                href="/docs"
                className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Documentación
              </Link>
              <Link
                href="/help"
                className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Ayuda
              </Link>
            </nav>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar..." className="w-full pl-8" />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
