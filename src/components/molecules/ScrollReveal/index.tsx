import React, { useState, useEffect, useRef } from 'react'

import { useGetElementProperty } from 'src/hooks/useGetElementProperty'
import { useScroll } from 'src/hooks/useScroll'

import styles from './index.module.scss'

type ScrollRevealProps = {
  scale: number
  children: React.ReactNode
}

export const ScrollReveal = (props: ScrollRevealProps) => {
  const [isActive, setIsActive] = useState(false)

  const ref = useRef(null)
  const { top } = useGetElementProperty<HTMLDivElement>(ref)
  const { scrollY } = useScroll()

  useEffect(() => {
    if (isActive) return
    setIsActive(scrollY > top * props.scale)
  }, [props.scale, isActive, top, scrollY, setIsActive])

  return (
    <div ref={ref} className={`${styles.reveal} ${isActive ? styles.active : ''}`}>
      {props.children}
    </div>
  )
}
