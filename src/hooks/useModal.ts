import { useState, useCallback, useEffect, useRef } from 'react'

export const useModal = () => {
  const [open, setOpen] = useState(false)
  const [event, setEvent] = useState(false)

  const handleOpen = useCallback((e: any) => {
    setOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  const ref = useRef<HTMLDivElement>(null)

  const handleClick = useCallback(
    (event: any) => {
      if (!open) return
      const element = ref.current
      if (open && !element?.contains(event.target)) {
        handleClose()
      }
    },
    [open, handleClose]
  )

  const disableScroll = useCallback((event: Event) => {
    event.preventDefault()
  }, [])

  useEffect(() => {
    setEvent(open)
  }, [open])

  useEffect(() => {
    if (!event) return
    window.addEventListener('click', handleClick, { passive: false })
    window.addEventListener('touchstart', handleClick, { passive: false })
    window.addEventListener('touchmove', disableScroll, { passive: false })
    window.addEventListener('mousewheel', disableScroll, { passive: false })

    return () => {
      window.removeEventListener('click', handleClick)
      window.removeEventListener('touchstart', handleClick)
      window.removeEventListener('touchmove', disableScroll)
      window.removeEventListener('mousewheel', disableScroll)
    }
  }, [disableScroll, handleClick, event])

  return {
    open,
    ref,
    handleOpen,
    handleClose,
  }
}
