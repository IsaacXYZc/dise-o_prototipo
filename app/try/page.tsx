import type { Metadata } from "next"
import TryPandocClientPage from "./TryPandocClientPage"

export const metadata: Metadata = {
  title: "Probar Pandoc - Conversor Online",
  description: "Prueba Pandoc online con nuestro conversor interactivo",
}

export default function TryPandocPage() {
  return <TryPandocClientPage />
}
