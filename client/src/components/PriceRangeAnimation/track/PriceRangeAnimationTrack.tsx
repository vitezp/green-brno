import React from 'react'
import { AnimationControls, motion } from 'framer-motion'
import { color } from 'theme'
import { SVG_CIRC, SVG_RADIUS, SVG_WIDTH } from 'components/PriceRangeAnimation/PriceRangeAnimation.utils'

const containerProps = {
  variants: {
    initial: { scale: 0.7, rotate: -90 },
    rotate: { scale: 0.7, rotate: 270 },
    rotateHalf: { scale: 0.7, rotate: 90, transition: { duration: 0.75 } },
    finish: { scale: 1, transition: { duration: 1.5 } },
    flip: { scaleX: -1, scaleY: 1 },
  },
  initial: 'initial',
  transition: { duration: 1.5, ease: 'linear' },
}

const trackProps = {
  variants: {
    hidden: {
      strokeWidth: 0,
      strokeDashoffset: 2 * SVG_CIRC,
      rotate: 180,
    },
    fill: { strokeWidth: 0.2 * SVG_RADIUS },
    unstroke: { strokeDashoffset: SVG_CIRC },
    stroke: { strokeDashoffset: 0 },
    reset: { strokeDashoffset: 2 * SVG_CIRC },
    base: {
      strokeDashoffset: 0.25 * SVG_CIRC,
      rotate: 405,
      transition: { duration: 1.25, ease: 'easeInOut' },
    },
    lower: {
      strokeDashoffset: 0.5 * SVG_CIRC,
      transition: { duration: 0.75, ease: 'easeIn' },
    },
    higher: {
      strokeDashoffset: 0.75 * SVG_CIRC,
      transition: { duration: 1, ease: 'easeIn' },
    },
    return: { strokeDashoffset: 0.25 * SVG_CIRC },
    finish: {
      scale: 0.625,
      rotate: 45,
      strokeWidth: SVG_RADIUS,
      transition: { duration: 1.5, ease: 'easeInOut' },
    },
  },
  initial: 'hidden',
  transition: { duration: 0.75, ease: 'easeInOut' },
}

interface Props {
  container: AnimationControls
  track: AnimationControls
}

export function PriceRangeAnimationTrack({ container, track }: Props) {
  return (
    <motion.svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={SVG_WIDTH}
      height={SVG_WIDTH}
      animate={container}
      {...containerProps}
    >
      <motion.circle
        fill="none"
        stroke={color('night-l-700')}
        strokeDasharray={SVG_CIRC}
        cx="50%"
        cy="50%"
        r={SVG_RADIUS}
        animate={track}
        {...trackProps}
      />
    </motion.svg>
  )
}
