"use client"

import { motion } from "framer-motion"
import { MessageSquareOff, ZapOff, AlertCircle } from "lucide-react"

const pains = [
  {
    title: "Baja Conversión",
    desc: "Tienes tráfico, pero no leads. Tu mensaje no conecta con la urgencia del cliente.",
    icon: <MessageSquareOff className="text-sky-400 w-6 h-6" />,
  },
  {
    title: "Performance Pobre",
    desc: "Cada segundo de carga extra reduce la conversión. El código importa.",
    icon: <ZapOff className="text-sky-400 w-6 h-6" />,
  },
  {
    title: "Experiencia Confusa",
    desc: "El usuario no entiende qué hacer. Pierdes oportunidades por fricción.",
    icon: <AlertCircle className="text-sky-400 w-6 h-6" />,
  },
]

export function ProblemGrid() {
  return (
    <section className="bg-slate-950 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Estás perdiendo clientes sin darte cuenta
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {pains.map((pain, index) => (
            <motion.div
            key={index}
            className="bg-slate-900 p-6 rounded-xl border border-slate-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
              <div className="mb-4">{pain.icon}</div>

              <h3 className="text-xl font-semibold mb-2">
                {pain.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {pain.desc}
              </p>
              </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}