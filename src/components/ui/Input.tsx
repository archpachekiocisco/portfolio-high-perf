import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full px-4 py-3 rounded-lg",
        "bg-slate-800 border border-slate-600",
        "text-white placeholder:text-slate-400",
        "hover:border-slate-500",
        "focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500",
        "transition-all duration-200",
        className
      )}
      {...props}
    />
  );
}