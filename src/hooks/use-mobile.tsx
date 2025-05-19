
import { useEffect, useState } from "react"

/**
 * A hook that returns whether the current viewport is mobile-sized.
 * By default, "mobile" is defined as a viewport width less than 768px.
 */
export function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  )

  useEffect(() => {
    if (typeof window === "undefined") return

    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    // Check on mount and whenever window is resized
    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [breakpoint])

  return isMobile
}
