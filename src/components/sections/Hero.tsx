"use client"

import { Button } from "@/components/ui/Button"
import Image from "next/image"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-slate-950 text-white px-6">

<motion.div
  className="max-w-3xl"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Convierte más clientes con una experiencia optimizada
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-8">
          Proyecto demostrativo enfocado en performance, accesibilidad y arquitectura frontend bajo restricciones reales.
        </p>

        <Button>
  Agendar llamada
</Button>

<div className="mt-12">
  <Image
    src="/hero.webp"
    alt="Preview del proyecto"
    width={800}
    height={400}
    priority
    className="rounded-xl"
  />
</div>

</motion.div>

    </section>

  )
}