import React from 'react'
import { AnimationControls } from 'framer-motion'
import { SReveal1, SReveal2 } from './PriceRangeAnimationReveal.styled'

const props = {
  variants: {
    hidden: { scale: 0, x: '-50%', y: '-50%' },
    large: { scale: 1.25, x: '-50%', y: '-50%' },
    normal: { scale: 1, x: '-50%', y: '-50%' },
  },
  initial: 'hidden',
  transition: { duration: 0.5, ease: 'easeInOut' },
}

interface Props {
  reveal1: AnimationControls
  reveal2: AnimationControls
}

export function PriceRangeAnimationReveal({ reveal1, reveal2 }: Props) {
  return (
    <>
      <SReveal1 animate={reveal1} {...props} />
      <SReveal2 animate={reveal2} {...props} />
    </>
  )
}
