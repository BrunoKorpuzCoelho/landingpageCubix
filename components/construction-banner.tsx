"use client"
import { useLanguage } from "@/contexts/language-context"

export function ConstructionBanner() {
  const { t } = useLanguage()

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-[#ED2009] to-[#FF5B19] text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-3">
          <svg className="h-5 w-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <p className="text-sm font-medium">{t.banner.message}</p>
        </div>
      </div>
    </div>
  )
}
