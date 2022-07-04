import { useState, useEffect, useCallback } from 'react'

export const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState(0)

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
  }, [handleResize])

  return { windowWidth }
}
