import type React from "react"
import type { Metadata } from "next"
import { DocsSidebar } from "@/components/docs-sidebar"

export const metadata: Metadata = {
  title: "Documentación - Pandoc",
  description: "Documentación oficial de Pandoc",
}

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container flex-1">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr]">
          <aside className="fixed top-16 z-30 hidden h-[calc(100vh-4rem)] w-full shrink-0 overflow-y-auto border-r border-border py-6 pr-2 md:sticky md:block lg:py-10">
            <DocsSidebar />
          </aside>
          <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_100px]">
            <div className="mx-auto w-full min-w-0">
              <div className="pb-12 pt-4">{children}</div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
