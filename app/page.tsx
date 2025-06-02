import Squares from "@/components/Squares"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, RefreshCw, Code, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 lg:min-h-[500px] relative overflow-hidden">
        <div className="container px-4 md:px-6 ">
          <div className="flex flex-col items-center space-y-4 text-center z-10">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl z-2">
                Pandoc: Un Conversor Universal de Documentos
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Convierte documentos entre múltiples formatos con una
                herramienta potente y flexible.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/docs/installation">
                <Button className="bg-primary text-primary-foreground">
                  Comenzar <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://pandoc.org/try/">
                <Button variant="outline">
                  Probar online
                  <ExternalLink className="ml-2 h-4 w-4" />{" "}
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 -z-10 h-full w-full">
          <Squares
            speed={0.5}
            squareSize={40}
            direction="diagonal" // up, down, left, right, diagonal
            borderColor="#030c22"
            hoverFillColor="#030c22"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-primary/10 p-3">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Múltiples Formatos</h3>
                <p className="text-muted-foreground">
                  Soporte para más de 50 formatos de entrada y salida,
                  incluyendo Markdown, HTML, LaTeX, Word y muchos más.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-primary/10 p-3">
                <RefreshCw className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Conversión Flexible</h3>
                <p className="text-muted-foreground">
                  Convierte entre formatos con precisión, manteniendo la
                  estructura y el formato del documento original.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-primary/10 p-3">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Extensible</h3>
                <p className="text-muted-foreground">
                  Personaliza el proceso de conversión con filtros, plantillas y
                  extensiones de Markdown.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formats Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Formatos Soportados
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Pandoc puede convertir entre una amplia variedad de formatos de
                documentos.
              </p>
            </div>
            <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {[
                "Markdown",
                "HTML",
                "LaTeX",
                "Word",
                "EPUB",
                "PDF",
                "reStructuredText",
                "AsciiDoc",
                "Org-Mode",
                "DocBook",
                "JATS",
                "TEI",
                "OpenDocument",
                "RTF",
                "MediaWiki",
              ].map((format) => (
                <div
                  key={format}
                  className="flex items-center justify-center rounded-lg border border-border bg-background p-4 shadow-sm"
                >
                  <span className="text-sm font-medium">{format}</span>
                </div>
              ))}
            </div>
            <Link href="/docs/formats">
              <Button variant="outline">Ver todos los formatos</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Comienza a usar Pandoc hoy
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Instala Pandoc y descubre cómo puede simplificar tu flujo de
                trabajo de documentos.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/docs/installation">
                <Button className="bg-primary text-primary-foreground">
                  Instalación <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="outline">Ver demos</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
