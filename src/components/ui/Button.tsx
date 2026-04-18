import { cn } from "@/lib/utils"

type ButtonProps = {
  children: React.ReactNode
  className?: string
}

export function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={cn(
        "bg-sky-500 hover:bg-sky-600 transition px-6 py-3 rounded-lg font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400",
        className
      )}
    >
      {children}
    </button>
  )
}