import type { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Copy, Download, AlertTriangle, ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Instalación - Pandoc",
  description: "Guía completa de instalación de Pandoc",
}

function CodeBlock({ children, title }: { children: string; title?: string }) {
  return (
    <div className="rounded-md bg-muted p-4">
      {title && (
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium">{title}</h3>
          <Button variant="ghost" size="sm" className="h-8 px-2">
            <Copy className="h-4 w-4" />
            <span className="sr-only">Copiar</span>
          </Button>
        </div>
      )}
      <pre className="overflow-x-auto text-sm">
        <code>{children}</code>
      </pre>
    </div>
  )
}

export default function InstallationPage() {
  return (
    <div className="container max-w-6xl py-12">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Instalación de Pandoc</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Guía completa para instalar Pandoc en diferentes sistemas operativos.
        </p>
      </div>

      {/* Quick Start */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Instalación rápida</h2>
        <p className="leading-7">
          La forma más sencilla de obtener la última versión de Pandoc es usar el instalador oficial.
        </p>
        <div className="flex gap-4">
          <Link href="https://github.com/jgm/pandoc/releases/latest" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary text-primary-foreground">
              <Download className="mr-2 h-4 w-4" />
              Descargar último instalador
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>Nota:</strong> Los binarios de Pandoc enlazados estáticamente que proporcionamos (o los disponibles
            en Conda Forge) tienen una limitación. No pueden utilizar filtros Lua que dependan de módulos Lua escritos
            en C. Si necesitas esta funcionalidad, considera un método alternativo de instalación.
          </AlertDescription>
        </Alert>
      </div>

      {/* Platform-specific installation */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Instalación por sistema operativo
        </h2>

        <Tabs defaultValue="windows" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="windows">Windows</TabsTrigger>
            <TabsTrigger value="macos">macOS</TabsTrigger>
            <TabsTrigger value="linux">Linux</TabsTrigger>
            <TabsTrigger value="other">Otros</TabsTrigger>
          </TabsList>

          <TabsContent value="windows" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Windows</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium mb-2">Instalador MSI (Recomendado)</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Hay un instalador de paquete en la página de descarga de Pandoc. Esto instalará Pandoc, reemplazando
                    versiones anteriores, y actualizará tu PATH.
                  </p>
                  <Link href="https://pandoc.org/installing.html" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">
                      Descargar instalador MSI <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2">Chocolatey</h4>
                  <p className="text-sm text-muted-foreground mb-3">Instala Pandoc usando Chocolatey:</p>
                  <CodeBlock title="Instalar Pandoc">choco install pandoc</CodeBlock>
                  <p className="text-sm text-muted-foreground mt-2 mb-3">
                    Chocolatey también puede instalar software adicional que se integra con Pandoc:
                  </p>
                  <CodeBlock title="Instalar dependencias adicionales">
                    choco install rsvg-convert python miktex
                  </CodeBlock>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2">Winget</h4>
                  <CodeBlock title="Instalar con winget">
                    winget install --source winget --exact --id JohnMacFarlane.Pandoc
                  </CodeBlock>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2">Archivo ZIP</h4>
                  <p className="text-sm text-muted-foreground">
                    También proporcionamos un archivo zip que contiene los binarios y documentación de Pandoc.
                    Simplemente descomprime el archivo y mueve los binarios a un directorio de tu elección.
                  </p>
                </div>

                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    Por defecto, Pandoc crea PDFs usando LaTeX. Recomendamos instalarlo vía MiKTeX. Con la opción
                    --pdf-engine, puedes especificar otros programas para esta tarea.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="macos" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">macOS</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium mb-2">Instalador de paquete (Recomendado)</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Hay un instalador de paquete en la página de descarga de Pandoc.
                  </p>
                  <Link href="https://pandoc.org/installing.html" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">
                      Descargar instalador <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <p className="text-sm text-muted-foreground mt-2">
                    Para desinstalar más tarde, descarga{" "}
                    <Link
                      href="https://raw.githubusercontent.com/jgm/pandoc/master/macos/uninstall-pandoc.pl"
                      className="text-primary hover:underline"
                    >
                      este script
                    </Link>{" "}
                    y ejecútalo con <code>perl uninstall-pandoc.pl</code>.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2">Homebrew</h4>
                  <CodeBlock title="Instalar Pandoc">brew install pandoc</CodeBlock>
                  <p className="text-sm text-muted-foreground mt-2 mb-3">
                    Homebrew también puede instalar software adicional:
                  </p>
                  <CodeBlock title="Instalar dependencias adicionales">
                    brew install librsvg python homebrew/cask/basictex
                  </CodeBlock>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2">MacPorts</h4>
                  <CodeBlock title="Instalar con MacPorts">port install pandoc</CodeBlock>
                </div>

                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    Por defecto, Pandoc crea PDFs usando LaTeX. Como una instalación completa de MacTeX usa cuatro
                    gigabytes de espacio en disco, recomendamos BasicTeX o TinyTeX. Si recibes errores sobre fuentes no
                    encontradas: <code>tlmgr install collection-fontsrecommended</code>
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="linux" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Linux</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium mb-2">Gestores de paquetes</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Verifica que la versión de Pandoc en tu gestor de paquetes no esté desactualizada. Pandoc está en
                    los repositorios de Debian, Ubuntu, Slackware, Arch, Fedora, NixOS, openSUSE, Gentoo y Void.
                  </p>

                  <div className="grid gap-3 md:grid-cols-2">
                    <CodeBlock title="Debian/Ubuntu">sudo apt-get install pandoc</CodeBlock>
                    <CodeBlock title="Fedora">sudo dnf install pandoc</CodeBlock>
                    <CodeBlock title="Arch Linux">sudo pacman -S pandoc</CodeBlock>
                    <CodeBlock title="openSUSE">sudo zypper install pandoc</CodeBlock>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2">Paquete binario (Última versión)</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Para obtener la última versión, proporcionamos un paquete binario para arquitectura amd64 en la
                    página de descarga.
                  </p>

                  <div className="space-y-3">
                    <CodeBlock title="Instalar paquete DEB">sudo dpkg -i $DEB</CodeBlock>
                    <p className="text-sm text-muted-foreground">donde $DEB es la ruta al archivo deb descargado.</p>

                    <CodeBlock title="Instalar desde tarball">tar xvzf $TGZ --strip-components 1 -C $DEST</CodeBlock>
                    <p className="text-sm text-muted-foreground">
                      donde $TGZ es la ruta al tarball comprimido y $DEST es el directorio de destino (ej: /usr/local/ o
                      $HOME/.local).
                    </p>
                  </div>
                </div>

                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    Por defecto, Pandoc crea PDFs usando LaTeX. Recomendamos instalar TeX Live vía tu gestor de
                    paquetes. En Debian/Ubuntu: <code>apt-get install texlive</code>
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="other" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Otros sistemas</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium mb-2">Chrome OS</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    En Chrome OS, Pandoc se puede instalar usando el gestor de paquetes chromebrew:
                  </p>
                  <CodeBlock title="Chrome OS">crew install pandoc</CodeBlock>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2">BSD</h4>
                  <p className="text-sm text-muted-foreground">
                    Pandoc está en los repositorios de ports de NetBSD, FreeBSD y OpenBSD.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Cross-platform methods */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Métodos multiplataforma</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Conda Forge</h3>
            <p className="text-sm text-muted-foreground">
              Puedes instalar Pandoc usando herramientas de Conda Forge como Conda, Mamba o Pixi:
            </p>
            <div className="space-y-2">
              <CodeBlock>conda install -c conda-forge pandoc</CodeBlock>
              <CodeBlock>pixi global install pandoc</CodeBlock>
              <CodeBlock>micromamba install pandoc</CodeBlock>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Docker</h3>
            <p className="text-sm text-muted-foreground">
              Las imágenes oficiales de Docker para Pandoc están disponibles en GitHub y DockerHub:
            </p>
            <CodeBlock title="Convertir con Docker">
              docker run --rm --volume "`pwd`:/data" --user `id -u`:`id -g` pandoc/latex README.md -o README.pdf
            </CodeBlock>
            <div className="flex gap-2">
              <Link href="https://github.com/pandoc/dockerfiles" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">
                  GitHub <ExternalLink className="ml-1 h-3 w-3" />
                </Button>
              </Link>
              <Link href="https://hub.docker.com/u/pandoc" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">
                  DockerHub <ExternalLink className="ml-1 h-3 w-3" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">GitHub Actions</h3>
            <p className="text-sm text-muted-foreground">Pandoc puede ejecutarse a través de GitHub Actions.</p>
            <Link href="https://github.com/pandoc/pandoc-action-example" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                Ver ejemplos <ExternalLink className="ml-1 h-3 w-3" />
              </Button>
            </Link>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">GitLab CI/CD</h3>
            <p className="text-sm text-muted-foreground">Pandoc puede ejecutarse a través de GitLab CI/CD.</p>
            <Link href="https://gitlab.com/pandoc/pandoc-ci-example" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                Ver ejemplos <ExternalLink className="ml-1 h-3 w-3" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Compiling from source */}
      <div className="space-y-6">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Compilar desde el código fuente
        </h2>
        <p className="leading-7">
          Si por alguna razón no hay un paquete binario disponible para tu plataforma, o si quieres modificar Pandoc o
          usar una versión no liberada, puedes instalar desde el código fuente.
        </p>

        <Tabs defaultValue="stack" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="stack">Stack (Rápido)</TabsTrigger>
            <TabsTrigger value="cabal">Cabal (Rápido)</TabsTrigger>
            <TabsTrigger value="custom">Cabal (Personalizado)</TabsTrigger>
          </TabsList>

          <TabsContent value="stack" className="space-y-4">
            <h3 className="text-lg font-semibold">Método rápido con Stack</h3>
            <p className="text-sm text-muted-foreground">
              La forma más fácil de compilar Pandoc desde el código fuente es usar stack:
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium mb-2">1. Instala stack (requiere stack &gt;= 1.7.0)</p>
                <CodeBlock>stack setup</CodeBlock>
              </div>
              <div>
                <p className="text-sm font-medium mb-2">2. Instala pandoc-cli</p>
                <CodeBlock>stack install pandoc-cli</CodeBlock>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              stack setup descargará automáticamente el compilador ghc si no lo tienes. stack install instalará el
              ejecutable de Pandoc en ~/.local/bin, que debes agregar a tu PATH.
            </p>
          </TabsContent>

          <TabsContent value="cabal" className="space-y-4">
            <h3 className="text-lg font-semibold">Método rápido con Cabal</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium mb-2">1. Instala ghcup (te dará ghc y cabal)</p>
                <Link href="https://www.haskell.org/ghcup/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    Instalar ghcup <ExternalLink className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </div>
              <div>
                <p className="text-sm font-medium mb-2">2. Actualiza la base de datos de paquetes</p>
                <CodeBlock>cabal update</CodeBlock>
              </div>
              <div>
                <p className="text-sm font-medium mb-2">3. Instala pandoc-cli</p>
                <CodeBlock>cabal install pandoc-cli</CodeBlock>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              El ejecutable de Pandoc se colocará en $HOME/.cabal/bin en linux/unix/macOS y en %APPDATA%\cabal\bin en
              Windows. Asegúrate de que este directorio esté en tu PATH.
            </p>
          </TabsContent>

          <TabsContent value="custom" className="space-y-4">
            <h3 className="text-lg font-semibold">Método personalizado con Cabal</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Este es un procedimiento paso a paso que ofrece control máximo sobre la compilación e instalación.
              Requiere cabal versión 2.0 o superior.
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium mb-2">1. Instalar dependencias</p>
                <CodeBlock>cabal update cabal install --only-dependencies</CodeBlock>
              </div>
              <div>
                <p className="text-sm font-medium mb-2">2. Configurar</p>
                <CodeBlock>
                  cabal configure --prefix=DIR --bindir=DIR --libdir=DIR \ --datadir=DIR --libsubdir=DIR
                  --datasubdir=DIR --docdir=DIR \ --htmldir=DIR --program-prefix=PREFIX --program-suffix=SUFFIX \
                  --mandir=DIR --flags=FLAGSPEC --enable-tests
                </CodeBlock>
              </div>
              <div>
                <p className="text-sm font-medium mb-2">3. Compilar</p>
                <CodeBlock>cabal build cabal test</CodeBlock>
              </div>
              <div>
                <p className="text-sm font-medium mb-2">4. Generar documentación de la API</p>
                <CodeBlock>cabal haddock --html-location=URL --hyperlink-source</CodeBlock>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Obtener el código fuente</h3>
          <p className="text-sm text-muted-foreground">
            Los tarballs del código fuente se pueden encontrar en Hackage. Por ejemplo, para obtener el código fuente de
            la versión 1.17.0.3:
          </p>
          <CodeBlock>
            wget https://hackage.haskell.org/package/pandoc-1.17.0.3/pandoc-1.17.0.3.tar.gz tar xvzf
            pandoc-1.17.0.3.tar.gz cd pandoc-1.17.0.3
          </CodeBlock>
          <p className="text-sm text-muted-foreground">
            O puedes obtener el código de desarrollo clonando el repositorio:
          </p>
          <CodeBlock>git clone https://github.com/jgm/pandoc cd pandoc</CodeBlock>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Crear un binario relocatable</h3>
          <p className="text-sm text-muted-foreground">
            Es posible compilar Pandoc de tal manera que los archivos de datos que usa estén incrustados en el binario.
            El binario resultante puede ejecutarse desde cualquier directorio y es completamente autónomo.
          </p>
          <div className="space-y-2">
            <CodeBlock title="Con cabal">cabal configure -fembed_data_files</CodeBlock>
            <CodeBlock title="Con stack">stack build --flag pandoc:embed_data_files</CodeBlock>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Ejecutar pruebas</h3>
          <p className="text-sm text-muted-foreground">Pandoc viene con un conjunto de pruebas automatizadas:</p>
          <div className="space-y-2">
            <CodeBlock title="Con cabal">cabal test</CodeBlock>
            <CodeBlock title="Con stack">stack test</CodeBlock>
            <CodeBlock title="Ejecutar pruebas específicas">cabal test --test-options='-p markdown'</CodeBlock>
          </div>
        </div>
      </div>

      {/* Verification */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Verificar la instalación</h2>
        <p className="leading-7">
          Para verificar que Pandoc se ha instalado correctamente, abre una terminal y ejecuta:
        </p>
        <CodeBlock title="Verificar instalación">pandoc --version</CodeBlock>
        <p className="leading-7">
          Esto mostrará la versión de Pandoc instalada y una lista de las extensiones disponibles.
        </p>
      </div>
    </div>
  )
}
