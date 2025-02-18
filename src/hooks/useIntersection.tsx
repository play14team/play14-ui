import { useEffect, useState } from "react"

export const useIntersection = (
  element: React.RefObject<Element>,
  rootMargin: string,
): boolean => {
  const [isVisible, setState] = useState(false)

  useEffect(() => {
    const current = element?.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting)
      },
      { rootMargin },
    )
    if (current) {
      observer?.observe(current)
    }

    return () => current && observer.unobserve(current)
  }, [element, rootMargin])

  return isVisible
}
