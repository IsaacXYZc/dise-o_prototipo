import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Copy, Play } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Demo - Pandoc",
  description: "Ejemplos y demostraciones de Pandoc",
}

const examples = [
  {
    category: "HTML",
    items: [
      {
        title: "HTML fragment",
        command: "pandoc MANUAL.txt -o example1.html",
        output: "example1.html",
        description: "Convierte texto a un fragmento HTML básico",
      },
      {
        title: "Standalone HTML file",
        command: "pandoc -s MANUAL.txt -o example2.html",
        output: "example2.html",
        description: "Genera un archivo HTML completo y autónomo",
      },
      {
        title: "HTML with table of contents, CSS, and custom footer",
        command: "pandoc -s --toc -c pandoc.css -A footer.html MANUAL.txt -o example3.html",
        output: "example3.html",
        description: "HTML con tabla de contenidos, CSS personalizado y pie de página",
      },
    ],
  },
  {
    category: "LaTeX y PDF",
    items: [
      {
        title: "LaTeX",
        command: "pandoc -s MANUAL.txt -o example4.tex",
        output: "example4.tex",
        description: "Convierte texto a formato LaTeX",
      },
      {
        title: "From LaTeX to markdown",
        command: "pandoc -s example4.tex -o example5.text",
        output: "example5.text",
        description: "Convierte de LaTeX de vuelta a markdown",
      },
      {
        title: "From markdown to PDF",
        command: "pandoc MANUAL.txt --pdf-engine=xelatex -o example13.pdf",
        output: "example13.pdf",
        description: "Genera PDF directamente desde markdown",
      },
      {
        title: "PDF with numbered sections and custom LaTeX header",
        command:
          'pandoc -N --variable "geometry=margin=1.2in" --variable mainfont="Palatino" --variable sansfont="Helvetica" --variable monofont="Menlo" --variable fontsize=12pt --variable version=2.0 MANUAL.txt --include-in-header fancyheaders.tex --pdf-engine=lualatex --toc -o example14.pdf',
        output: "example14.pdf",
        description: "PDF con secciones numeradas y encabezado LaTeX personalizado",
      },
    ],
  },
  {
    category: "Formatos de documentos",
    items: [
      {
        title: "reStructuredText",
        command: "pandoc -s -t rst --toc MANUAL.txt -o example6.text",
        output: "example6.text",
        description: "Convierte a formato reStructuredText con tabla de contenidos",
      },
      {
        title: "Rich text format (RTF)",
        command: "pandoc -s MANUAL.txt -o example7.rtf",
        output: "example7.rtf",
        description: "Genera archivo en formato RTF",
      },
      {
        title: "DocBook XML",
        command: "pandoc -s -t docbook MANUAL.txt -o example9.db",
        output: "example9.db",
        description: "Convierte a formato DocBook XML",
      },
      {
        title: "Man page",
        command: "pandoc -s -t man pandoc.1.md -o example10.1",
        output: "example10.1",
        description: "Genera una página de manual Unix",
      },
      {
        title: "ConTeXt",
        command: "pandoc -s -t context MANUAL.txt -o example11.tex",
        output: "example11.tex",
        description: "Convierte a formato ConTeXt",
      },
    ],
  },
  {
    category: "Presentaciones",
    items: [
      {
        title: "Beamer slide show",
        command: "pandoc -t beamer SLIDES -o example8.pdf",
        output: "example8.pdf",
        description: "Crea presentación en PDF usando Beamer",
      },
      {
        title: "HTML slide shows (DZSlides)",
        command: "pandoc -s --mathml -i -t dzslides SLIDES -o example16a.html",
        output: "example16a.html",
        description: "Presentación HTML con DZSlides",
      },
      {
        title: "HTML slide shows (Slidy)",
        command: "pandoc -s --webtex -i -t slidy SLIDES -o example16b.html",
        output: "example16b.html",
        description: "Presentación HTML con Slidy",
      },
      {
        title: "HTML slide shows (reveal.js)",
        command: "pandoc -s --mathjax -i -t revealjs SLIDES -o example16d.html",
        output: "example16d.html",
        description: "Presentación HTML con reveal.js",
      },
    ],
  },
  {
    category: "Matemáticas y código",
    items: [
      {
        title: "TeX math in HTML (Default)",
        command: "pandoc math.text -s -o mathDefault.html",
        output: "mathDefault.html",
        description: "Matemáticas con renderizado por defecto",
      },
      {
        title: "TeX math in HTML (MathML)",
        command: "pandoc math.text -s --mathml -o mathMathML.html",
        output: "mathMathML.html",
        description: "Matemáticas usando MathML",
      },
      {
        title: "TeX math in HTML (WebTeX)",
        command: "pandoc math.text -s --webtex -o mathWebTeX.html",
        output: "mathWebTeX.html",
        description: "Matemáticas usando WebTeX",
      },
      {
        title: "TeX math in HTML (MathJax)",
        command: "pandoc math.text -s --mathjax -o mathMathJax.html",
        output: "mathMathJax.html",
        description: "Matemáticas usando MathJax",
      },
      {
        title: "TeX math in HTML (KaTeX)",
        command: "pandoc math.text -s --katex -o mathKaTeX.html",
        output: "mathKaTeX.html",
        description: "Matemáticas usando KaTeX",
      },
    ],
  },
  {
    category: "Otros formatos",
    items: [
      {
        title: "Converting a web page to markdown",
        command: "pandoc -s -r html http://www.gnu.org/software/make/ -o example12.text",
        output: "example12.text",
        description: "Convierte una página web a markdown",
      },
      {
        title: "ipynb (Jupyter notebook)",
        command: "pandoc example15.md -o example15.ipynb",
        output: "example15.ipynb",
        description: "Convierte markdown a notebook de Jupyter",
      },
      {
        title: "GNU Texinfo",
        command: "pandoc MANUAL.txt -s -o example19.texi",
        output: "example19.texi",
        description: "Convierte a formato GNU Texinfo",
      },
      {
        title: "OpenDocument XML",
        command: "pandoc MANUAL.txt -s -t opendocument -o example20.xml",
        output: "example20.xml",
        description: "Genera OpenDocument XML",
      },
      {
        title: "ODT (OpenDocument Text)",
        command: "pandoc MANUAL.txt -o example21.odt",
        output: "example21.odt",
        description: "Archivo ODT legible por OpenOffice",
      },
      {
        title: "MediaWiki markup",
        command: "pandoc -s -t mediawiki --toc MANUAL.txt -o example22.wiki",
        output: "example22.wiki",
        description: "Convierte a formato MediaWiki",
      },
      {
        title: "EPUB ebook",
        command: "pandoc MANUAL.txt -o MANUAL.epub",
        output: "MANUAL.epub",
        description: "Crea un libro electrónico EPUB",
      },
      {
        title: "Word docx",
        command: "pandoc -s MANUAL.txt -o example29.docx",
        output: "example29.docx",
        description: "Convierte a formato Word docx",
      },
    ],
  },
]

function CommandBlock({ command, output, description }: { command: string; output: string; description: string }) {
  return (
    <div className="rounded-md border p-4 space-y-3">
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="rounded-md bg-muted p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-muted-foreground">Comando</span>
          <Button variant="ghost" size="sm" className="h-6 px-2">
            <Copy className="h-3 w-3" />
          </Button>
        </div>
        <code className="text-sm break-all">{command}</code>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Salida:</span>
        <Button variant="link" className="h-auto p-0 text-primary hover:underline">
          {output}
        </Button>
      </div>
    </div>
  )
}

export default function DemoPage() {
  return (
    <div className="container max-w-6xl py-12">
      <div className="space-y-8">
        <div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Demo</h1>
          <p className="mt-2 text-lg text-muted-foreground">Prueba Pandoc online y explora ejemplos de conversión</p>
        </div>

        {/* Try Online Section */}
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Prueba Pandoc online</h2>
          <p className="leading-7">Puedes probar Pandoc online aquí.</p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2 mb-2">
                <Play className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Pandoc Online</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Prueba Pandoc directamente en tu navegador con la versión online completa.
              </p>
              <Link href="/try" target="_self" rel="noopener noreferrer">
                <Button className="w-full">
                  {/* Probar online <ExternalLink className="ml-2 h-4 w-4" /> */}
                </Button>
              </Link>
            </div>
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2 mb-2">
                <Play className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Versión WebAssembly</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                También hay una versión (limitada) de WebAssembly de Pandoc que funciona en tu navegador.
              </p>
              <Link href="https://tweag.github.io/pandoc-wasm/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full">
                  Versión WebAssembly <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Examples Section */}
        <div className="space-y-6">
          <div>
            <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Ejemplos</h2>
            <p className="mt-2 text-muted-foreground">
              Para ver la salida creada por cada uno de los comandos a continuación, haz clic en el nombre del archivo
              de salida:
            </p>
          </div>

          <Tabs defaultValue="HTML" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
              {examples.map((category) => (
                <TabsTrigger key={category.category} value={category.category} className="text-xs">
                  {category.category}
                </TabsTrigger>
              ))}
            </TabsList>

            {examples.map((category) => (
              <TabsContent key={category.category} value={category.category} className="space-y-4">
                <div className="grid gap-4">
                  {category.items.map((example, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-medium mb-3">{example.title}</h3>
                      <CommandBlock
                        command={example.command}
                        output={example.output}
                        description={example.description}
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Additional Examples */}
        <div className="space-y-6">
          <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Ejemplos adicionales</h2>

          <div className="grid gap-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Resaltado de sintaxis</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { style: "pygments", file: "example18a.html" },
                  { style: "kate", file: "example18b.html" },
                  { style: "monochrome", file: "example18c.html" },
                  { style: "espresso", file: "example18d.html" },
                  { style: "haddock", file: "example18e.html" },
                  { style: "tango", file: "example18f.html" },
                  { style: "zenburn", file: "example18g.html" },
                ].map((item, index) => (
                  <CommandBlock
                    key={index}
                    command={`pandoc code.text -s --highlight-style ${item.style} -o ${item.file}`}
                    output={item.file}
                    description={`Resaltado de sintaxis con estilo ${item.style}`}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Citas y bibliografías</h3>
              <div className="grid gap-4">
                <CommandBlock
                  command="pandoc -s --bibliography biblio.bib --citeproc CITATIONS -o example24a.html"
                  output="example24a.html"
                  description="Citas de Markdown con bibliografía BibTeX"
                />
                <CommandBlock
                  command="pandoc -s --bibliography biblio.json --citeproc --csl chicago-fullnote-bibliography.csl CITATIONS -o example24b.html"
                  output="example24b.html"
                  description="Citas con bibliografía JSON y estilo Chicago"
                />
                <CommandBlock
                  command="pandoc -s --bibliography biblio.yaml --citeproc --csl ieee.csl CITATIONS -t man -o example24c.1"
                  output="example24c.1"
                  description="Citas con bibliografía YAML y estilo IEEE"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Conversiones especializadas</h3>
              <div className="grid gap-4">
                <CommandBlock
                  command="pandoc -t chunkedhtml --split-level=2 --toc --toc-depth=2 --number-sections -o example33 MANUAL.txt"
                  output="example33"
                  description="HTML dividido en chunks con tabla de contenidos"
                />
                <CommandBlock
                  command="pandoc --reference-doc twocolumns.docx -o UsersGuide.docx MANUAL.txt"
                  output="UsersGuide.docx"
                  description="Docx con documento de referencia personalizado"
                />
                <CommandBlock
                  command="pandoc fishwatch.yaml -t rst --template fishtable.rst -o fish.rst"
                  output="fish.rst"
                  description="Usando plantilla para producir tabla desde datos estructurados"
                />
                <CommandBlock
                  command="pandoc biblio.bib -t csljson -o biblio2.json"
                  output="biblio2.json"
                  description="Convirtiendo bibliografía de BibTeX a CSL JSON"
                />
                <CommandBlock
                  command="pandoc biblio.bib --citeproc --csl ieee.csl -s -o biblio.html"
                  output="biblio.html"
                  description="Produciendo versión formateada de una bibliografía"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
