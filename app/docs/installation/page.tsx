import type { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"

export const metadata: Metadata = {
  title: "Instalación - Pandoc",
  description: "Guía de instalación de Pandoc",
}

export default function InstallationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Instalación</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Aprende a instalar Pandoc en diferentes sistemas operativos.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Comenzar con Pandoc</h2>
        <p className="leading-7">
          Pandoc funciona convirtiendo documentos de un formato a otro. Para instalar Pandoc, sigue las instrucciones
          para tu sistema operativo.
        </p>

        <Tabs defaultValue="windows" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="windows">Windows</TabsTrigger>
            <TabsTrigger value="macos">macOS</TabsTrigger>
            <TabsTrigger value="linux">Linux</TabsTrigger>
          </TabsList>
          <TabsContent value="windows" className="space-y-4">
            <div className="rounded-md bg-muted p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Instalador de Windows</h3>
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copiar</span>
                </Button>
              </div>
              <pre className="mt-2 overflow-x-auto text-sm">
                <code>
                  # Descarga el instalador desde https://pandoc.org/installing.html # Ejecuta el instalador y sigue las
                  instrucciones
                </code>
              </pre>
            </div>
            <div className="rounded-md bg-muted p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Chocolatey</h3>
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copiar</span>
                </Button>
              </div>
              <pre className="mt-2 overflow-x-auto text-sm">
                <code>choco install pandoc</code>
              </pre>
            </div>
          </TabsContent>
          <TabsContent value="macos" className="space-y-4">
            <div className="rounded-md bg-muted p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Homebrew</h3>
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copiar</span>
                </Button>
              </div>
              <pre className="mt-2 overflow-x-auto text-sm">
                <code>brew install pandoc</code>
              </pre>
            </div>
            <div className="rounded-md bg-muted p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Instalador de macOS</h3>
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copiar</span>
                </Button>
              </div>
              <pre className="mt-2 overflow-x-auto text-sm">
                <code>
                  # Descarga el instalador desde https://pandoc.org/installing.html # Abre el archivo .pkg y sigue las
                  instrucciones
                </code>
              </pre>
            </div>
          </TabsContent>
          <TabsContent value="linux" className="space-y-4">
            <div className="rounded-md bg-muted p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Debian/Ubuntu</h3>
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copiar</span>
                </Button>
              </div>
              <pre className="mt-2 overflow-x-auto text-sm">
                <code>sudo apt-get install pandoc</code>
              </pre>
            </div>
            <div className="rounded-md bg-muted p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Fedora</h3>
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copiar</span>
                </Button>
              </div>
              <pre className="mt-2 overflow-x-auto text-sm">
                <code>sudo dnf install pandoc</code>
              </pre>
            </div>
            <div className="rounded-md bg-muted p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Arch Linux</h3>
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copiar</span>
                </Button>
              </div>
              <pre className="mt-2 overflow-x-auto text-sm">
                <code>sudo pacman -S pandoc</code>
              </pre>
            </div>
          </TabsContent>
        </Tabs>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight pt-6">
          Verificar la instalación
        </h2>
        <p className="leading-7">
          Para verificar que Pandoc se ha instalado correctamente, abre una terminal o línea de comandos y ejecuta:
        </p>

        <div className="rounded-md bg-muted p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">Terminal</h3>
            <Button variant="ghost" size="sm" className="h-8 px-2">
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copiar</span>
            </Button>
          </div>
          <pre className="mt-2 overflow-x-auto text-sm">
            <code>pandoc --version</code>
          </pre>
        </div>

        <p className="leading-7">
          Esto mostrará la versión de Pandoc instalada y una lista de las extensiones disponibles.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight pt-6">Siguiente paso</h2>
        <p className="leading-7">
          Una vez instalado Pandoc, puedes comenzar a convertir documentos. Consulta la sección de{" "}
          <a href="/docs/getting-started" className="text-primary hover:underline">
            Primeros pasos
          </a>{" "}
          para aprender a usar Pandoc.
        </p>
      </div>
    </div>
  )
}
