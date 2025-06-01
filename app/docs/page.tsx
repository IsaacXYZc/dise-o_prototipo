import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Documentación - Pandoc",
  description: "Documentación oficial de Pandoc",
}

export default function DocsPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Documentación de Pandoc</h1>
      <p className="leading-7">
        Bienvenido a la documentación oficial de Pandoc, el conversor universal de documentos. Aquí encontrarás guías,
        tutoriales y referencias para ayudarte a sacar el máximo provecho de Pandoc.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border p-4">
          <h2 className="text-xl font-semibold">Primeros pasos</h2>
          <p className="mt-2 text-muted-foreground">Aprende a instalar y usar Pandoc para tus primeras conversiones.</p>
        </div>
        <div className="rounded-lg border p-4">
          <h2 className="text-xl font-semibold">Guía de usuario</h2>
          <p className="mt-2 text-muted-foreground">
            Documentación completa sobre todas las características y opciones de Pandoc.
          </p>
        </div>
      </div>
    </div>
  )
}
