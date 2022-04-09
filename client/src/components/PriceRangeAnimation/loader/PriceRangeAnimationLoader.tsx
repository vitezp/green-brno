import React from 'react'
import { AnimationControls, motion } from 'framer-motion'
import { color } from 'theme'
import { SVG_CIRC, SVG_RADIUS, SVG_WIDTH } from 'components/PriceRangeAnimation/PriceRangeAnimation.utils'
import { SContainer } from './PriceRangeAnimationLoader.styled'

const containerProps = {
  variants: {
    initial: { rotate: -90, x: '-50%', y: '-50%' },
    rotate: { rotate: 360, x: '-50%', y: '-50%' },
  },
  initial: 'initial',
  transition: { duration: 1.5, ease: 'linear' },
}

const loaderProps = {
  variants: {
    hidden: { strokeDashoffset: SVG_CIRC * 0.55 },
    half: { strokeDashoffset: 0.5 * SVG_CIRC * 0.55 },
    flip: { scaleX: -1, scaleY: 1 },
    unflip: { scaleX: 1, scaleY: 1 },
  },
  initial: 'hidden',
  transition: { duration: 0.5, ease: 'easeInOut' },
}

interface Props {
  loader: AnimationControls
  loaderContainer: AnimationControls
}

export function PriceRangeAnimationLoader({ loader, loaderContainer }: Props) {
  return (
    <SContainer
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={SVG_WIDTH * 0.55}
      height={SVG_WIDTH * 0.55}
      animate={loaderContainer}
      {...containerProps}
    >
      <motion.circle
        fill="none"
        stroke="#8ab633"
        strokeWidth={2}
        strokeDasharray={SVG_CIRC * 0.55}
        cx="50%"
        cy="50%"
        r={SVG_RADIUS * 0.55}
        animate={loader}
        {...loaderProps}
      />
    </SContainer>
  )
}
