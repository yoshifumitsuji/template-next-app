import { useState, useCallback } from 'react'

export const useModal = () => {
  const [id, setId] = useState('')
  const [open, setOpen] = useState(false)

  const handleOpen = useCallback((id: string) => {
    setId(id)
    setOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  return {
    id,
    open,
    handleOpen,
    handleClose,
  }
}
