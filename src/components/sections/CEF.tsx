import { Code, LineChart, Layout } from "lucide-react"

const pillars = [
  {
    title: "Estrategia & Copy",
    desc: "Mensajes diseñados para conectar con la intención del usuario y maximizar conversión.",
    icon: <LineChart className="w-6 h-6 text-sky-400" />,
  },
  {
    title: "Ingeniería Frontend",
    desc: "Optimización de performance usando Next.js, Server Components y buenas prácticas.",
    icon: <Code className="w-6 h-6 text-sky-400" />,
  },
  {
    title: "UX & Accesibilidad",
    desc: "Flujos claros, diseño usable y cumplimiento de estándares accesibles.",
    icon: <Layout className="w-6 h-6 text-sky-400" />,
  },
]

export function CEF() {
  return (
    <section className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Un sistema diseñado para convertir
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {pillars.map((item, index) => (
            <div
              key={index}
              className="bg-slate-950 p-6 rounded-xl border border-slate-800"
            >
              <div className="mb-4 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}