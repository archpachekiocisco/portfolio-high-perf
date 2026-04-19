import { cn } from "@/lib/utils"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "bg-sky-500 hover:bg-sky-600",
        "text-white font-medium",
        "px-6 py-3 rounded-lg",
        "transition-all active:scale-[0.98]",
        className
      )}
      {...props}
    />
  )
}