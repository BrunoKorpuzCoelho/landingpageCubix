"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import type { HTMLAttributes, ReactNode } from "react"

interface AnimatedSectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  animation?: "slide-left" | "slide-right" | "fade-in" | "scale-fade-in"
  delay?: number
  className?: string
}

export function AnimatedSection({
  children,
  animation = "fade-in",
  delay = 0,
  className = "",
  ...props
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ triggerOnce: false })

  const animationClasses = {
    "slide-left": "animate-slide-in-left",
    "slide-right": "animate-slide-in-right",
    "fade-in": "animate-fade-in",
    "scale-fade-in": "animate-scale-fade-in",
  }

  return (
    <section
      ref={ref}
      className={`${animationClasses[animation]} ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </section>
  )
}
