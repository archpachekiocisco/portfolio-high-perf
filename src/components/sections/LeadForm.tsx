"use client"

import { useState } from "react"
import { z } from "zod"

const schema = z.object({
  email: z.string().email("Email inválido"),
})

export function LeadForm() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const result = schema.safeParse({ email })

    if (!result.success) {
      setError(result.error.issues[0].message)
      return
    }

    setError("")
    alert("Formulario válido (simulación)")
  }

  return (
    <section className="py-20 bg-slate-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">
        Solicita una evaluación
      </h2>

      <form
        
        name="lead"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4"
      >
        <input type="hidden" name="form-name" value="lead" />

        <input
          type="email"
          placeholder="Tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-3 rounded-lg text-black w-80"
        />

        {error && <p className="text-red-400">{error}</p>}

        <button className="bg-sky-500 px-6 py-3 rounded-lg">
          Enviar
        </button>
      </form>
    </section>
  )
}