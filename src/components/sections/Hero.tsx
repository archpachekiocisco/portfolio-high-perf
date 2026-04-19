import { Button } from "@/components/ui/Button"
import Image from "next/image"

export function Hero() {

  function handleScroll() {
    document.getElementById("tech")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-slate-950 text-white px-6">

    <div className="max-w-3xl">

        {/* 🧠 Headline */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Frontend Engineer enfocado en performance y conversión
        </h1>

        {/* ✍️ Subheadline */}
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          Construyo interfaces rápidas, accesibles y diseñadas para generar resultados reales.
        </p>

        {/* 🎯 CTA principal */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

        <a href="#tech">
          <Button>
          Ver arquitectura del sistema
        </Button>
        </a>

          {/* CTA secundario (opcional pero pro) */}
          <a
            href="#contacto"
            className="text-slate-400 hover:text-white transition-colors text-sm"
          >
            o solicitar evaluación →
          </a>

        </div>

        {/* 🖼️ Imagen */}
        <div className="mt-12">
          <Image
            src="/hero.webp"
            alt="Preview del proyecto"
            width={800}
            height={400}
            sizes="(max-width: 768px) 100vw, 800px" 
            className="rounded-xl shadow-xl border border-slate-800"
          />
        </div>

      </div>

    </section>
  )
}