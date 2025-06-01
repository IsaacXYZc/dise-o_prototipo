import type { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"

export const metadata: Metadata = {
  title: "Guía de Usuario - Pandoc",
  description: "Guía completa de usuario de Pandoc",
}

export default function UsersGuidePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Guía de Usuario</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Documentación completa sobre todas las características y opciones de Pandoc.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Sinopsis</h2>
        <div className="rounded-md bg-muted p-4">
          <pre className="overflow-x-auto text-sm">
            <code>pandoc [opciones] [archivo-entrada]... -o archivo-salida</code>
          </pre>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight pt-6">Descripción</h2>
        <p className="leading-7">
          Pandoc es un conversor de documentos, creado por John MacFarlane, que puede leer varios formatos y escribir en
          casi cualquier formato. Pandoc puede convertir entre numerosos formatos de marcado y procesamiento de texto,
          incluyendo, pero no limitado a, varios sabores de Markdown, HTML, LaTeX y Word docx.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight pt-6">Opciones</h2>
        <p className="leading-7">
          Pandoc proporciona numerosas opciones para controlar el proceso de conversión. Aquí hay algunas de las más
          comunes:
        </p>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Opciones generales</h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              <code>-f FORMAT</code>, <code>-r FORMAT</code>, <code>--from=FORMAT</code>, <code>--read=FORMAT</code>:
              Especifica el formato de entrada.
            </li>
            <li>
              <code>-t FORMAT</code>, <code>-w FORMAT</code>, <code>--to=FORMAT</code>, <code>--write=FORMAT</code>:
              Especifica el formato de salida.
            </li>
            <li>
              <code>-o FILENAME</code>, <code>--output=FILENAME</code>: Escribe la salida en FILENAME.
            </li>
            <li>
              <code>--data-dir=DIRECTORY</code>: Especifica el directorio de datos del usuario.
            </li>
          </ul>

          <h3 className="text-xl font-semibold">Opciones que afectan al formato de salida</h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              <code>-s</code>, <code>--standalone</code>: Produce un documento completo, no solo un fragmento.
            </li>
            <li>
              <code>--template=FILENAME</code>: Usa FILENAME como plantilla para la salida.
            </li>
            <li>
              <code>-V KEY[=VAL]</code>, <code>--variable=KEY[:VAL]</code>: Establece la variable KEY al valor VAL.
            </li>
            <li>
              <code>-c URL</code>, <code>--css=URL</code>: Enlaza a la hoja de estilo CSS.
            </li>
          </ul>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight pt-6">Ejemplos</h2>
        <p className="leading-7">Aquí hay algunos ejemplos de uso común de Pandoc:</p>

        <Tabs defaultValue="markdown-to-html" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="markdown-to-html">Markdown a HTML</TabsTrigger>
            <TabsTrigger value="markdown-to-pdf">Markdown a PDF</TabsTrigger>
            <TabsTrigger value="docx-to-markdown">DOCX a Markdown</TabsTrigger>
          </TabsList>
          <TabsContent value="markdown-to-html" className="space-y-4">
            <div className="rounded-md bg-muted p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Convertir Markdown a HTML</h3>
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copiar</span>
                </Button>
              </div>
              <pre className="mt-2 overflow-x-auto text-sm">
                <code>pandoc -f markdown -t html -o salida.html entrada.md</code>
              </pre>
            </div>
            <p className="text-sm text-muted-foreground">
              Este comando convierte un archivo Markdown a HTML y guarda el resultado en salida.html.
            </p>
          </TabsContent>
          <TabsContent value="markdown-to-pdf" className="space-y-4">
            <div className="rounded-md bg-muted p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Convertir Markdown a PDF</h3>
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copiar</span>
                </Button>
              </div>
              <pre className="mt-2 overflow-x-auto text-sm">
                <code>pandoc -f markdown -o salida.pdf entrada.md</code>
              </pre>
            </div>
            <p className="text-sm text-muted-foreground">
              Este comando convierte un archivo Markdown a PDF utilizando LaTeX como intermediario.
            </p>
          </TabsContent>
          <TabsContent value="docx-to-markdown" className="space-y-4">
            <div className="rounded-md bg-muted p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Convertir DOCX a Markdown</h3>
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copiar</span>
                </Button>
              </div>
              <pre className="mt-2 overflow-x-auto text-sm">
                <code>pandoc -f docx -t markdown -o salida.md entrada.docx</code>
              </pre>
            </div>
            <p className="text-sm text-muted-foreground">
              Este comando convierte un archivo Word DOCX a formato Markdown.
            </p>
          </TabsContent>
        </Tabs>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight pt-6">
          Extensiones de Markdown
        </h2>
        <p className="leading-7">Pandoc admite varias extensiones útiles de la sintaxis de Markdown, incluyendo:</p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Metadatos del documento (título, autor, fecha)</li>
          <li>Notas al pie</li>
          <li>Tablas</li>
          <li>Listas de definiciones</li>
          <li>Superíndice y subíndice</li>
          <li>Tachado</li>
          <li>Listas ordenadas mejoradas</li>
          <li>Bloques de código delimitados con resaltado de sintaxis</li>
          <li>Comillas inteligentes, guiones y puntos suspensivos</li>
          <li>Markdown dentro de bloques HTML</li>
          <li>LaTeX en línea</li>
        </ul>
      </div>
    </div>
  )
}
