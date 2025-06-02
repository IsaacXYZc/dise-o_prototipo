"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Search, FileText, ArrowLeft, AlertTriangle } from "lucide-react"
import FuzzyText from "@/components/FuzzyText"

export default function NotFound() {
  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-8rem)] py-12">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Error Code */}
        <div className="space-y-4">
          <div className="flex items-center justify-center">
            <div className="relative">
              <FuzzyText
              fontSize={220}
                baseIntensity={0.3}
                hoverIntensity={1}
                enableHover={true}
              >
                404
              </FuzzyText>
              <FuzzyText
              fontSize={100}
                baseIntensity={0.3}
                hoverIntensity={1}
                enableHover={true}
              >
                not found
              </FuzzyText>
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight">
            Página no encontrada
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Lo sentimos, no pudimos encontrar la página que estás buscando.
          </p>
        </div>
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver atrás
          </Button>

      </div>
    </div>
  );
}
