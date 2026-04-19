"use client"

import { useState } from "react"

export function TechSpec() {
  const [open, setOpen] = useState(false)

  return (
    <section id="tech" className="bg-slate-950 text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">

        {/* 🧠 Título + contexto */}
        <h2 className="text-3xl font-bold mb-4">
          Cómo está construido este proyecto
        </h2>

        <p className="text-slate-400 mb-8">
          Este no es solo un diseño visual. Aquí explico las decisiones técnicas
          que optimizan performance, accesibilidad y escalabilidad.
        </p>

        {/* 🔘 Botón mejorado */}
        <button
          onClick={() => setOpen(!open)}
          className="
            bg-sky-500 hover:bg-sky-600
            transition-colors
            px-6 py-3 rounded-lg
            mb-6 font-medium
          "
        >
          {open ? "Ocultar arquitectura" : "Ver arquitectura del sistema"}
        </button>

        {/* 🎬 Contenedor animado */}
        <div
          className={`
            transition-all duration-300 overflow-hidden
            ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="text-left bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-4">

            {/* ⚙️ Rendering */}
            <div>
              <h3 className="font-semibold">Rendering Strategy</h3>
              <p className="text-gray-400 text-sm">
                Se implementó renderizado estático (SSG) para eliminar latencia de servidor
                y mejorar el tiempo de carga percibido desde el primer paint.
              </p>
            </div>

            {/* 🧪 Type Safety */}
            <div>
              <h3 className="font-semibold">Type Safety</h3>
              <p className="text-gray-400 text-sm">
                Validación con Zod para asegurar consistencia en los datos y prevenir errores
                antes de cualquier integración con backend.
              </p>
            </div>

            {/* ⚡ Performance */}
            <div>
              <h3 className="font-semibold">Performance</h3>
              <p className="text-gray-400 text-sm">
                Optimización mediante next/image, reducción de JavaScript en cliente
                y enfoque en métricas Core Web Vitals.
              </p>
            </div>

            {/* ♿ Accesibilidad */}
            <div>
              <h3 className="font-semibold">Accesibilidad</h3>
              <p className="text-gray-400 text-sm">
                Uso de semántica HTML, focus-visible y contrastes adecuados para
                garantizar navegación accesible en distintos dispositivos.
              </p>
            </div>

            {/* ⚖️ Trade-offs */}
            <div>
              <h3 className="font-semibold">Trade-offs</h3>
              <p className="text-gray-400 text-sm">
                Se priorizó performance y simplicidad eliminando backend en esta versión,
                lo que reduce complejidad pero limita persistencia de datos.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}