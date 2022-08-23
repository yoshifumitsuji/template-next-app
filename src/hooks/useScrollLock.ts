import { useCallback } from 'react'

export const useScrollLock = () => {
  const handleMouseWheel = useCallback((e: any) => {
    e.preventDefault()
  }, [])

  const handleTouchMove = useCallback((e: any) => {
    e.preventDefault()
  }, [])

  const handleKeyDown = useCallback((e: any) => {
    switch (e.keyCode) {
      case 0x25:
      case 0x26:
      case 0x27:
      case 0x28:
        e.preventDefault()
        break
    }
  }, [])

  const lockScroll = useCallback(() => {
    document.addEventListener('mousewheel', handleMouseWheel, { passive: false })
    document.addEventListener('touchmove', handleTouchMove, { passive: false })
    document.addEventListener('keydown', handleKeyDown, { passive: false })
    document.body.style.overflow = 'hidden'
  }, [handleMouseWheel, handleTouchMove, handleKeyDown])

  const unLockScroll = useCallback(() => {
    document.removeEventListener('mousewheel', handleMouseWheel)
    document.removeEventListener('touchmove', handleTouchMove)
    document.removeEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'visible'
  }, [handleMouseWheel, handleTouchMove, handleKeyDown])

  return {
    lockScroll,
    unLockScroll,
  }
}
