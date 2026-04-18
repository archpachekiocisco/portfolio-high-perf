"use client"

import { useState } from "react"
import { z } from "zod"
import { Input } from "../../components/ui/Input";

const schema = z.object({
  email: z.string().email("Email inválido"),
})

export function LeadForm() {
  const [success, setSuccess] = useState(false)
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
  
    const result = schema.safeParse({ email })
  
    if (!result.success) {
      setError(result.error.issues[0].message)
      return
    }
  
    setError("")
    setLoading(true)
  
    // Simulación de envío (luego aquí irá Netlify real)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setEmail("")
  
      setTimeout(() => {
        setSuccess(false)
      }, 4000)
  
    }, 1000)
  }

  return (
    <section className="py-20 bg-slate-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-2">
  Solicita una evaluación gratuita
</h2>

<p className="text-slate-400 mb-6">
  Te responderé en menos de 24 horas
</p>

      <form
  name="lead"
  method="POST"
  data-netlify="true"
  onSubmit={handleSubmit}
  className="flex flex-col items-center gap-4 w-full max-w-md mx-auto"
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
  onChange={(e) => {
    setEmail(e.target.value)
    setError("")
  }}
  className={error ? "border-red-500 focus:ring-red-500" : ""}
/>
  </div>

  {error && <p className="text-red-400">{error}</p>}

{success && (
  <p className="text-green-400">
    ✅ Gracias, te contactaré pronto
  </p>
)}

<button
  type="submit"
  disabled={loading || !email}
  className="
    w-full max-w-md
    bg-sky-500 hover:bg-sky-600
    disabled:opacity-50
    transition-colors
    px-6 py-3 rounded-lg
    font-medium
  "
>
  {loading ? "Enviando..." : "Solicitar evaluación"}
</button>
</form>
    </section>
  )
}