import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ExternalLink, MessageSquare, Github, AlertCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Ayuda - Pandoc",
  description: "Recursos de ayuda para Pandoc",
}

export default function HelpPage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="space-y-6">
        <div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Ayuda</h1>
          <p className="mt-2 text-lg text-muted-foreground">Recursos y opciones de soporte para Pandoc</p>
        </div>

        <div className="space-y-4">
          <div className="rounded-md bg-amber-50 dark:bg-amber-950/50 p-4 border border-amber-200 dark:border-amber-900">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-500" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-amber-700 dark:text-amber-400">
                  Pandoc es un software de código abierto, mantenido por voluntarios que trabajan en su tiempo libre.
                  Tenlo en cuenta al solicitar ayuda.
                </p>
              </div>
            </div>
          </div>

          <p className="leading-7">
            Si tienes alguna pregunta sobre Pandoc o si algo no funciona correctamente, lo primero que debes hacer es
            buscar en el foro de discusión. Probablemente alguien ya haya hecho una pregunta similar y haya recibido
            respuesta. Si no es así, puedes plantear la tuya allí.
          </p>

          <div className="grid gap-4 md:grid-cols-2 my-6">
            <div className="rounded-lg border p-4 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Foro de discusión</h2>
              </div>
              <p className="text-muted-foreground flex-grow">
                Busca respuestas o plantea tus preguntas en el foro oficial de Pandoc.
              </p>
              <div className="mt-4">
                <Link href="https://github.com/jgm/pandoc/discussions" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full">
                    Visitar foro <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-lg border p-4 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <Github className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Rastreador de errores</h2>
              </div>
              <p className="text-muted-foreground flex-grow">
                Reporta errores o problemas confirmados en el rastreador de GitHub.
              </p>
              <div className="mt-4">
                <Link href="https://github.com/jgm/pandoc/issues" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full">
                    Reportar error <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight pt-6">
            Directrices para solicitar ayuda
          </h2>

          <p className="leading-7">
            Si crees haber encontrado un error en Pandoc, puedes crear una incidencia en el rastreador de errores de
            GitHub. Sin embargo, a menos que estés seguro de que se trata de un error, es recomendable plantearla
            primero en el foro de discusión. Consulta las directrices para contribuir para obtener sugerencias sobre
            cómo escribir un informe de errores útil.
          </p>

          <p className="leading-7">
            Las sugerencias para mejorar Pandoc (por ejemplo, nuevos formatos, opciones o elementos estructurales)
            siempre deben discutirse en la lista de correo antes de crear una incidencia en el rastreador de GitHub.
          </p>

          <div className="rounded-md bg-muted p-4 my-6">
            <p className="text-sm">
              La gente suele hacer preguntas sobre Pandoc en                 <a className="text-primary hover:underline" href="https://stackoverflow.com/questions/tagged/pandoc">StackOverflow</a>. Pero los desarrolladores principales de
              pandoc no monitorean este sitio, por lo que es probable que obtengas mejores respuestas si publicas en el
              foro de discusión.
            </p>
          </div>

          <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight pt-6">Recursos adicionales</h2>

          <div className="grid gap-4 md:grid-cols-3 my-6">
            {/* <Link href="/docs/faq" className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
              <h3 className="font-medium">Preguntas frecuentes</h3>
              <p className="text-sm text-muted-foreground mt-1">Respuestas a las preguntas más comunes sobre Pandoc.</p>
            </Link>
            <Link href="/docs/contributing" className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
              <h3 className="font-medium">Contribuir</h3>
              <p className="text-sm text-muted-foreground mt-1">Cómo contribuir al desarrollo de Pandoc.</p>
            </Link> */}
            <Link href="/docs" className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
              <h3 className="font-medium">Documentación</h3>
              <p className="text-sm text-muted-foreground mt-1">Consulta la documentación completa de Pandoc.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
