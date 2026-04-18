import { Hero } from "@/components/sections/Hero"
import { ProblemGrid } from "@/components/sections/ProblemGrid"
import { CEF } from "@/components/sections/CEF"
import { TechSpec } from "@/components/sections/TechSpec"
import { LeadForm } from "@/components/sections/LeadForm"

export default function Page() {
  return (
    <>
      <Hero />
      <ProblemGrid />
      <CEF />
      <TechSpec />
      <LeadForm />
    </>
  )
}