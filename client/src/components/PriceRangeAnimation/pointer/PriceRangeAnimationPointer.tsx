import React from 'react'
import { AnimationControls } from 'framer-motion'
import {
  SPointer,
  SPointerBallEnd,
  SPointerBallStart,
  SPointerBody,
  SPointerContainer,
} from './PriceRangeAnimationPointer.styled'

const props = {
  variants: {
    hidden: { scale: 0, rotate: 135 },
    visible: { scale: 1, rotate: 0 },
    lowerEase: {
      rotate: 0.95 * 90,
      transition: { duration: 0.95 * 0.75, ease: 'easeIn' },
    },
    lowerSpring: { rotate: 90, transition: { type: 'spring', stiffness: 300 } },
    start: { rotate: 0, transition: { duration: 0.75 } },
    higherEase: {
      rotate: 0.95 * 180,
      transition: { duration: 0.95, ease: 'easeIn' },
    },
    higherSpring: {
      rotate: 180,
      transition: { type: 'spring', stiffness: 200 },
    },
    exit: { rotate: 180, scale: 0 },
  },
  initial: 'hidden',
  transition: { duration: 1 },
}

interface Props {
  pointer: AnimationControls
}

export function PriceRangeAnimationPointer({ pointer }: Props) {
  return (
    <SPointerContainer>
      <SPointer animate={pointer} {...props}>
        <SPointerBody />
        <SPointerBallStart />
        <SPointerBallEnd />
      </SPointer>
    </SPointerContainer>
  )
}
