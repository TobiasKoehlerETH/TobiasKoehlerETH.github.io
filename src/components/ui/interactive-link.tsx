import React from "react"
import { cn } from "@/lib/utils"

interface InteractiveLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
}

export function InteractiveLink({
  href,
  children,
  className,
  target,
  rel,
}: InteractiveLinkProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cn(
        "relative text-gray-800 transition-colors duration-150",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50 rounded-sm",
        "after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current",
        "after:transition-[width] after:duration-150 hover:after:w-full",
        className
      )}
    >
      {children}
    </a>
  )
}


