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
    <div className="w-full">
      {sidebarItems.map((section, index) => (
        <div key={index} className="pb-8">
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium">{section.title}</h4>
          <div className="grid grid-flow-row auto-rows-max text-sm">
            {section.items.map((item, itemIndex) => (
              <Link
                key={itemIndex}
                href={item.href}
                className={cn("flex w-full items-center rounded-md px-2 py-2 hover:underline", {
                  "bg-muted font-medium": pathname === item.href,
                })}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
