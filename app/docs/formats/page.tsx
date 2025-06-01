import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Formatos Soportados - Pandoc",
  description: "Lista completa de formatos soportados por Pandoc",
}

export default function FormatsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Formatos Soportados</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Pandoc puede convertir entre numerosos formatos de documentos.
        </p>
      </div>

      <div className="space-y-4">
        <p className="leading-7">
          Pandoc puede convertir entre los siguientes formatos (← = desde; → = hacia; ↔︎ = ambos sentidos):
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Formatos de marcado ligero</h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>↔︎ Markdown (incluyendo CommonMark y GitHub-flavored Markdown)</li>
          <li>↔︎ reStructuredText</li>
          <li>→ AsciiDoc</li>
          <li>↔︎ Emacs Org-Mode</li>
          <li>↔︎ Emacs Muse</li>
          <li>↔︎ Textile</li>
          <li>→ Markua</li>
          <li>← txt2tags</li>
          <li>↔︎ djot</li>
        </ul>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Formatos HTML</h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>↔︎ (X)HTML 4</li>
          <li>↔︎ HTML5</li>
          <li>→ Chunked HTML</li>
        </ul>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Ebooks</h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>↔︎ EPUB versión 2 o 3</li>
          <li>↔︎ FictionBook2</li>
        </ul>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Formatos de documentación</h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>→ GNU TexInfo</li>
          <li>← pod</li>
          <li>↔︎ Haddock markup</li>
        </ul>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Formatos Roff</h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>↔︎ roff man</li>
          <li>→ roff ms</li>
          <li>← mdoc</li>
        </ul>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Formatos TeX</h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>↔︎ LaTeX</li>
          <li>→ ConTeXt</li>
        </ul>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Formatos XML</h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>↔︎ DocBook versión 4 o 5</li>
          <li>↔︎ JATS</li>
          <li>← BITS</li>
          <li>→ TEI Simple</li>
          <li>→ OpenDocument XML</li>
        </ul>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Formatos de procesadores de texto
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>↔︎ Microsoft Word docx</li>
          <li>↔︎ Rich Text Format RTF</li>
          <li>↔︎ OpenOffice/LibreOffice ODT</li>
        </ul>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">PDF</h2>
        <p className="leading-7">
          → A través de `pdflatex`, `lualatex`, `xelatex`, `latexmk`, `tectonic`, `wkhtmltopdf`, `weasyprint`, `prince`,
          `pagedjs-cli`, `context` o `pdfroff`.
        </p>
      </div>
    </div>
  )
}
