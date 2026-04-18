"use client"

import { useState } from "react"
import { z } from "zod"
import { Input } from "../../components/ui/Input";

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
        className="flex flex-col items-center gap-6"
      >
        <input type="hidden" name="form-name" value="lead" />

        <div className="w-full max-w-md text-left">
          <label className="block text-slate-300 mb-2 text-sm">
            Tu email
          </label>

          <Input
            type="email"
            placeholder="ejemplo@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {error && <p className="text-red-400">{error}</p>}

        <button className="bg-sky-500 px-6 py-3 rounded-lg">
          Enviar
        </button>
      </form>
    </section>
  )
}