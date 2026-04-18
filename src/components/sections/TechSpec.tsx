"use client"

import { useState } from "react"

export function TechSpec() {
  const [open, setOpen] = useState(false)

  return (
    <section className="bg-slate-950 text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">

        <button
          onClick={() => setOpen(!open)}
          className="bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg mb-6"
        >
          View System Architecture
        </button>

        {open && (
          <div className="text-left bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-4">

            <div>
              <h3 className="font-semibold">Rendering Strategy</h3>
              <p className="text-gray-400 text-sm">
                Static rendering con Next.js para carga rápida y óptima experiencia inicial.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Type Safety</h3>
              <p className="text-gray-400 text-sm">
                Validación con Zod para garantizar integridad de datos antes de envío.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Performance</h3>
              <p className="text-gray-400 text-sm">
                Optimización de imágenes con next/image y reducción de JavaScript en cliente.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Accesibilidad</h3>
              <p className="text-gray-400 text-sm">
                Uso de focus-visible, semántica HTML y contrastes adecuados.
              </p>
            </div>

          </div>
        )}

      </div>
    </section>
  )
}