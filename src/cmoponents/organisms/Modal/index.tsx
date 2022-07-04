import React, { useRef, useEffect, useCallback } from 'react'

import styles from './index.module.scss'

type MoviePlayerProps = {
  id: string
}

const MoviePlayer = React.forwardRef<HTMLIFrameElement, MoviePlayerProps>(function MoviePlayer(props, ref) {
  return (
    <iframe
      ref={ref}
      className={styles.modal__movie}
      src={`https://www.youtube-nocookie.com/embed/${props.id}?autoplay=1&mute=1&playsinline=1`}
      title='YouTube video player'
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    ></iframe>
  )
})

export type ModalProps = {
  open: boolean
  id?: string
  onClose: () => void
}

export const Modal = (props: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const handleClick = useCallback(
    (event: any) => {
      const element = ref.current
      if (props.open && !element?.contains(event.target)) {
        props.onClose()
      }
    },
    [props]
  )

  const disableScroll = useCallback((event: Event) => {
    event.preventDefault()
  }, [])

  useEffect(() => {
    if (props.open) {
      window.addEventListener('click', handleClick, { passive: false })
      window.addEventListener('touchstart', handleClick, { passive: false })
      window.addEventListener('touchmove', disableScroll, { passive: false })
      window.addEventListener('mousewheel', disableScroll, { passive: false })
    } else {
      window.removeEventListener('click', handleClick)
      window.removeEventListener('touchstart', handleClick)
      window.removeEventListener('touchmove', disableScroll)
      window.removeEventListener('mousewheel', disableScroll)
    }
    return () => {
      window.removeEventListener('click', handleClick)
      window.removeEventListener('touchmove', disableScroll)
      window.removeEventListener('mousewheel', disableScroll)
    }
  }, [disableScroll, handleClick, props.open])

  if (!props.open) {
    return null
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modal__bg} />
      <div className={styles.modal__wrapper}>
        <div className={styles.modal__content} ref={ref}>
          <button className={styles.modal__close} onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
