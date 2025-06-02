import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Code, BookOpen, Zap, Users } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Acerca de - Pandoc",
  description: "Información sobre Pandoc, el conversor universal de documentos",
}

export default function AboutPage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="space-y-8">
        <div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Acerca de Pandoc</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            El conversor universal de documentos que entiende múltiples formatos
          </p>
        </div>

        {/* Markdown Extensions */}
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Extensiones de Markdown</h2>
          <p className="leading-7">
            Pandoc entiende una serie de extensiones útiles de la sintaxis de Markdown, incluyendo metadatos del
            documento (título, autor, fecha); notas al pie; tablas; listas de definiciones; superíndice y subíndice;
            tachado; listas ordenadas mejoradas (el número de inicio y el estilo de numeración son significativos);
            listas de ejemplos en ejecución; bloques de código delimitados con resaltado de sintaxis; comillas
            inteligentes, guiones y puntos suspensivos; markdown dentro de bloques HTML; y LaTeX en línea.
          </p>
          <p className="leading-7">
            Si se desea compatibilidad estricta con markdown, todas estas extensiones se pueden desactivar.
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Metadatos del documento",
              "Notas al pie",
              "Tablas",
              "Listas de definiciones",
              "Superíndice y subíndice",
              "Tachado",
              "Listas ordenadas mejoradas",
              "Bloques de código con resaltado",
              "Comillas inteligentes",
              "Markdown en HTML",
              "LaTeX en línea",
            ].map((feature) => (
              <Badge key={feature} variant="secondary" className="justify-center p-2">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        {/* LaTeX Math */}
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Matemáticas LaTeX</h2>
          <p className="leading-7">
            Las matemáticas LaTeX (e incluso macros) se pueden usar en documentos markdown. Se proporcionan varios
            métodos diferentes para renderizar matemáticas en HTML, incluyendo MathJax y traducción a MathML. Las
            matemáticas LaTeX se convierten (según sea necesario por el formato de salida) a unicode, objetos de
            ecuación nativos de Word, MathML, o roff eqn.
          </p>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Métodos de renderizado matemático
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2 md:grid-cols-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">MathJax</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">MathML</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Unicode</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Word equation objects</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">roff eqn</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Citations and Bibliography */}
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
            Citas y bibliografías automáticas
          </h2>
          <p className="leading-7">
            Pandoc incluye un sistema poderoso para citas automáticas y bibliografías. Esto significa que puedes
            escribir una cita como:
          </p>

          <div className="rounded-md bg-muted p-4">
            <code className="text-sm">[see @doe99, pp. 33-35; also @smith04, ch. 1]</code>
          </div>

          <p className="leading-7">
            y Pandoc la convertirá en una cita correctamente formateada usando cualquiera de cientos de estilos <a className="text-primary hover:underline" href="http://citationstyles.org/">CSL</a>.
            (incluyendo estilos de notas al pie, estilos numéricos y estilos autor-fecha), y agregará una bibliografía
            correctamente formateada al final del documento.
          </p>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Formatos de datos bibliográficos soportados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2 md:grid-cols-2">
                <a className="flex items-center gap-2 hover:underline" href="http://tug.org/bibtex/">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">BibTeX</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
                <a className="flex items-center gap-2 hover:underline" href="https://github.com/plk/biblatex">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">BibLaTeX</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
                <a className="flex items-center gap-2 hover:underline" href="https://citeproc-js.readthedocs.io/en/latest/csl-json/markup.html">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">CSL JSON</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">CSL YAML</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3">Las citas funcionan en todos los formatos de salida.</p>
            </CardContent>
          </Card>
        </div>

        {/* Customization */}
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Personalización</h2>
          <p className="leading-7">
            Hay muchas formas de personalizar Pandoc para satisfacer tus necesidades, incluyendo un sistema de
            plantillas y un sistema poderoso para escribir filtros.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Sistema de plantillas
                </CardTitle>
                <CardDescription>Personaliza la apariencia y estructura de tus documentos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Crea plantillas personalizadas para controlar exactamente cómo se ve tu salida final.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Sistema de filtros
                </CardTitle>
                <CardDescription>Extiende la funcionalidad con filtros personalizados</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Escribe filtros en Lua o Haskell para transformar documentos de maneras específicas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Architecture */}
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Arquitectura</h2>
          <p className="leading-7">
            Pandoc incluye una biblioteca Haskell y un programa de línea de comandos independiente. La biblioteca
            incluye módulos separados para cada formato de entrada y salida, por lo que agregar un nuevo formato de
            entrada o salida solo requiere agregar un nuevo módulo.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Biblioteca Haskell</CardTitle>
                <CardDescription>API programática para integración</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Integra Pandoc directamente en tus aplicaciones Haskell con una API completa y bien documentada.
                </p>
                {/* <div className="mt-3">
                  <Link href="/docs/api" className="text-primary hover:underline text-sm">
                    Ver documentación de la API →
                  </Link>
                </div> */}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Programa de línea de comandos</CardTitle>
                <CardDescription>Herramienta independiente y fácil de usar</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Usa Pandoc desde la terminal con una interfaz de línea de comandos potente y flexible.
                </p>
                {/* <div className="mt-3">
                  <Link href="/docs/users-guide" className="text-primary hover:underline text-sm">
                    Ver guía de usuario →
                  </Link>
                </div> */}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* License and Copyright */}
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Licencia y derechos</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Software libre
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-7">
                Pandoc es software libre, liberado bajo la GPL. Copyright 2006–2025 John MacFarlane.
              </p>
              <div className="flex gap-4 mt-4">
                <Link href="https://github.com/jgm/pandoc" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    Ver en GitHub <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    Licencia GPL <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to action */}
        <div className="text-center space-y-4 pt-8">
          <h2 className="text-2xl font-semibold">¿Listo para comenzar?</h2>
          <p className="text-muted-foreground">
            Descubre todo lo que Pandoc puede hacer por ti y tu flujo de trabajo de documentos.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/docs/installation">
              <Button>Instalar Pandoc</Button>
            </Link>
            <Link href="/demo">
              <Button variant="outline">Ver demos</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
