"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Play,
  FileText,
  Download,
  Copy,
  Settings,
  Code,
  Eye,
  Sparkles,
  FileInput,
  FileOutput,
  Zap,
  BookOpen,
  RefreshCw,
} from "lucide-react"

const inputFormats = [
  { value: "markdown", label: "Markdown", icon: "📝", popular: true },
  { value: "html", label: "HTML", icon: "🌐", popular: true },
  { value: "latex", label: "LaTeX", icon: "📄", popular: true },
  { value: "docx", label: "Word (DOCX)", icon: "📄", popular: true },
  { value: "rst", label: "reStructuredText", icon: "📋" },
  { value: "org", label: "Org-mode", icon: "📊" },
  { value: "mediawiki", label: "MediaWiki", icon: "📖" },
  { value: "textile", label: "Textile", icon: "🧵" },
  { value: "json", label: "JSON", icon: "🔧" },
  { value: "csv", label: "CSV", icon: "📊" },
]

const outputFormats = [
  { value: "html5", label: "HTML5", icon: "🌐", popular: true },
  { value: "latex", label: "LaTeX", icon: "📄", popular: true },
  { value: "docx", label: "Word (DOCX)", icon: "📄", popular: true },
  { value: "pdf", label: "PDF", icon: "📕", popular: true },
  { value: "rst", label: "reStructuredText", icon: "📋" },
  { value: "epub", label: "EPUB", icon: "📚" },
  { value: "revealjs", label: "Reveal.js", icon: "🎯" },
  { value: "beamer", label: "Beamer", icon: "🎭" },
  { value: "plain", label: "Plain Text", icon: "📝" },
  { value: "json", label: "JSON", icon: "🔧" },
]

const examples = [
  {
    name: "Hello World",
    description: "Ejemplo básico de Markdown a HTML",
    input: "# Hello World\n\nThis is a **simple** example of *Pandoc* conversion.\n\n- Item 1\n- Item 2\n- Item 3",
    from: "markdown",
    to: "html5",
  },
  {
    name: "Matemáticas",
    description: "LaTeX con ecuaciones matemáticas",
    input:
      "# Mathematical Example\n\nThe quadratic formula is:\n\n$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$\n\nInline math: $E = mc^2$",
    from: "markdown",
    to: "html5",
  },
  {
    name: "Tabla",
    description: "Markdown con tabla a HTML",
    input:
      "# Sales Report\n\n| Product | Q1 | Q2 | Q3 | Q4 |\n|---------|----|----|----|----|  \n| Widget A | 100 | 150 | 200 | 180 |\n| Widget B | 80 | 120 | 160 | 140 |\n| Widget C | 60 | 90 | 110 | 100 |",
    from: "markdown",
    to: "html5",
  },
  {
    name: "Citas",
    description: "Documento con citas bibliográficas",
    input:
      "# Research Paper\n\nAccording to recent studies [@smith2023; @doe2024], the effectiveness of this approach has been demonstrated.\n\n## References\n\n::: {#refs}\n:::",
    from: "markdown",
    to: "html5",
  },
]

export default function TryPandocClientPage() {
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [fromFormat, setFromFormat] = useState("markdown")
  const [toFormat, setToFormat] = useState("html5")
  const [isConverting, setIsConverting] = useState(false)
  const [options, setOptions] = useState({
    standalone: false,
    embedResources: false,
    citeproc: false,
    toc: false,
    numberSections: false,
    mathMethod: "plain",
    wrap: "auto",
    highlightStyle: "",
  })

  const copyToClipboard = (text: string) => {
    // navigator.clipboard.writeText(text)
  }

  return (
    <div className="container max-w-7xl py-8">
      {/* Header */}
      <div className="text-center space-y-4 mb-8">
        <div className="flex items-center justify-center gap-3">
          <div className="p-3 bg-primary/10 rounded-full">
            <Zap className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold">Probar Pandoc Online</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Convierte documentos entre diferentes formatos directamente en tu navegador. Experimenta con Pandoc sin
          necesidad de instalación.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Input Panel */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileInput className="h-5 w-5" />
              Entrada
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Format Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Formato de entrada</label>
              <Select value={fromFormat} onValueChange={setFromFormat}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <div className="p-2">
                    <div className="text-xs font-medium text-muted-foreground mb-2">POPULARES</div>
                    {inputFormats
                      .filter((f) => f.popular)
                      .map((format) => (
                        <SelectItem key={format.value} value={format.value}>
                          <div className="flex items-center gap-2">
                            <span>{format.icon}</span>
                            <span>{format.label}</span>
                          </div>
                        </SelectItem>
                      ))}
                    <div className="text-xs font-medium text-muted-foreground mb-2 mt-4">OTROS</div>
                    {inputFormats
                      .filter((f) => !f.popular)
                      .map((format) => (
                        <SelectItem key={format.value} value={format.value}>
                          <div className="flex items-center gap-2">
                            <span>{format.icon}</span>
                            <span>{format.label}</span>
                          </div>
                        </SelectItem>
                      ))}
                  </div>
                </SelectContent>
              </Select>
            </div>

            {/* Input Text */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Texto de entrada</label>
                <Button variant="ghost" size="sm" onClick={() => setInputText("")}>
                  Limpiar
                </Button>
              </div>
              <Textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Escribe o pega tu contenido aquí..."
                className="min-h-[300px] font-mono text-sm"
              />
            </div>

            {/* Convert Button */}
            <Button 
             disabled={!inputText || isConverting} className="w-full" size="lg">
              {isConverting ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Convirtiendo...
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" />
                  Convertir
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Output Panel */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileOutput className="h-5 w-5" />
              Salida
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Format Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Formato de salida</label>
              <Select value={toFormat} onValueChange={setToFormat}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <div className="p-2">
                    <div className="text-xs font-medium text-muted-foreground mb-2">POPULARES</div>
                    {outputFormats
                      .filter((f) => f.popular)
                      .map((format) => (
                        <SelectItem key={format.value} value={format.value}>
                          <div className="flex items-center gap-2">
                            <span>{format.icon}</span>
                            <span>{format.label}</span>
                          </div>
                        </SelectItem>
                      ))}
                    <div className="text-xs font-medium text-muted-foreground mb-2 mt-4">OTROS</div>
                    {outputFormats
                      .filter((f) => !f.popular)
                      .map((format) => (
                        <SelectItem key={format.value} value={format.value}>
                          <div className="flex items-center gap-2">
                            <span>{format.icon}</span>
                            <span>{format.label}</span>
                          </div>
                        </SelectItem>
                      ))}
                  </div>
                </SelectContent>
              </Select>
            </div>

            {/* Output Display */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Resultado</label>
                {outputText && (
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" onClick={() => copyToClipboard(outputText)}>
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
              <Tabs defaultValue="preview" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="preview" className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    Vista previa
                  </TabsTrigger>
                  <TabsTrigger value="code" className="flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    Código
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="preview" className="mt-2">
                  <div className="min-h-[300px] p-4 border rounded-md bg-background">
                    {outputText ? (
                      <div dangerouslySetInnerHTML={{ __html: outputText }} />
                    ) : (
                      <div className="flex items-center justify-center h-full text-muted-foreground">
                        <div className="text-center">
                          <FileText className="h-12 w-12 mx-auto mb-2 opacity-50" />
                          <p>El resultado aparecerá aquí después de la conversión</p>
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="code" className="mt-2">
                  <Textarea
                    value={outputText}
                    readOnly
                    className="min-h-[300px] font-mono text-sm"
                    placeholder="El código fuente aparecerá aquí..."
                  />
                </TabsContent>
              </Tabs>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Advanced Options */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Opciones avanzadas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="standalone"
                checked={options.standalone}
                onCheckedChange={(checked) => setOptions({ ...options, standalone: checked as boolean })}
              />
              <label
                htmlFor="standalone"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Documento independiente
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="toc"
                checked={options.toc}
                onCheckedChange={(checked) => setOptions({ ...options, toc: checked as boolean })}
              />
              <label
                htmlFor="toc"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Tabla de contenidos
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="numberSections"
                checked={options.numberSections}
                onCheckedChange={(checked) => setOptions({ ...options, numberSections: checked as boolean })}
              />
              <label
                htmlFor="numberSections"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Numerar secciones
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="citeproc"
                checked={options.citeproc}
                onCheckedChange={(checked) => setOptions({ ...options, citeproc: checked as boolean })}
              />
              <label
                htmlFor="citeproc"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Procesar citas
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="embedResources"
                checked={options.embedResources}
                onCheckedChange={(checked) => setOptions({ ...options, embedResources: checked as boolean })}
              />
              <label
                htmlFor="embedResources"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Incrustar recursos
              </label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Command Line Equivalent */}
      {inputText && (
        <Alert className="mt-8">
          <Code className="h-4 w-4" />
          <AlertDescription>
            <div className="space-y-2">
              <div className="font-medium">Comando equivalente:</div>
              <code className="text-sm bg-muted px-2 py-1 rounded">
                pandoc --from {fromFormat} --to {toFormat}
                {options.standalone && " --standalone"}
                {options.toc && " --toc"}
                {options.numberSections && " --number-sections"}
                {options.citeproc && " --citeproc"}
                {options.embedResources && " --embed-resources"}
              </code>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* Help Section */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            ¿Necesitas ayuda?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center">
              <FileText className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-medium mb-1">Documentación</h3>
              <p className="text-sm text-muted-foreground mb-2">Consulta la guía completa de Pandoc</p>
              <Button variant="outline" size="sm" asChild>
                <a href="/docs">Ver docs</a>
              </Button>
            </div>
            <div className="text-center">
              <Sparkles className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-medium mb-1">Ejemplos</h3>
              <p className="text-sm text-muted-foreground mb-2">Explora más ejemplos de conversión</p>
              <Button variant="outline" size="sm" asChild>
                <a href="/demo">Ver ejemplos</a>
              </Button>
            </div>
            <div className="text-center">
              <Download className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-medium mb-1">Instalar</h3>
              <p className="text-sm text-muted-foreground mb-2">Instala Pandoc en tu sistema</p>
              <Button variant="outline" size="sm" asChild>
                <a href="/docs/installation">Instalar</a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
