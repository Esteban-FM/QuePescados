import { useEffect, useRef, useState } from 'react'

export default function useAnimateOnScroll(animation = 'animate__fadeInUp', threshold = 0.2) {
  const ref = useRef(null)
  const [classes, setClasses] = useState('opacity-0')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setClasses(`animate__animated ${animation}`)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [animation, threshold])

  return { ref, classes }
}