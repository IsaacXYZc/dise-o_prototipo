"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const sidebarItems = [
  {
    title: "Primeros pasos",
    items: [
      { title: "Introducción", href: "/docs" },
      { title: "Instalación", href: "/docs/installation" },
    ],
  },
  {
    title: "Guías",
    items: [
      { title: "Guía de usuario", href: "/docs/users-guide" },
      { title: "Contribuir", href: "/docs/contributing" },
      { title: "FAQ", href: "/docs/faq" },
    ],
  },
  {
    title: "Formatos",
    items: [
      { title: "Formatos soportados", href: "/docs/formats" },
      { title: "Creando un ebook", href: "/docs/making-ebook" },
      { title: "Soporte para Emacs Org mode", href: "/docs/org-mode" },
      { title: "Soporte para JATS", href: "/docs/jats" },
    ],
  },
  {
    title: "Extensiones",
    items: [
      { title: "Filtros", href: "/docs/filters" },
      { title: "Filtros Lua", href: "/docs/lua-filters" },
      { title: "Lectores personalizados", href: "/docs/custom-readers" },
      { title: "Escritores personalizados", href: "/docs/custom-writers" },
    ],
  },
  {
    title: "API",
    items: [
      { title: "Usando la API de Pandoc", href: "/docs/api" },
      { title: "Documentación de la API", href: "/docs/api-docs" },
    ],
  },
]

export function DocsSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-full bg-slate-900 dark:bg-slate-900 text-slate-300 p-4 rounded-lg">
      {sidebarItems.map((section, index) => (
        <div key={index} className="pb-6 last:pb-0">
          <h4 className="mb-3 text-sm font-semibold text-slate-100 uppercase tracking-wider">{section.title}</h4>
          <div className="space-y-1">
            {section.items.map((item, itemIndex) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={itemIndex}
                  href={item.href}
                  className={cn(
                    "relative flex items-center py-2 px-3 text-sm rounded-md transition-colors duration-200",
                    "hover:text-slate-100 hover:bg-slate-800",
                    {
                      "text-cyan-400 bg-slate-800 font-medium": isActive,
                      "text-slate-400": !isActive,
                    },
                  )}
                >
                  {isActive && <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-cyan-400 rounded-full" />}
                  <span className={cn("ml-2", { "ml-3": isActive })}>{item.title}</span>
                </Link>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
