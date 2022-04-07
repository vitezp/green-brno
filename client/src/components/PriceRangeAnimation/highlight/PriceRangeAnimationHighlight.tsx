import React, { AnimationControls, motion } from 'framer-motion'
import { color } from 'theme'
import { SVG_CIRC, SVG_RADIUS, SVG_WIDTH } from 'components/PriceRangeAnimation/PriceRangeAnimation.utils'
import { SContainer } from './PriceRangeAnimationHighlight.styled'

const props = {
  variants: {
    hidden: { strokeDashoffset: SVG_CIRC * 0.75, rotate: 135 },
    visible: { strokeDashoffset: 0.75 * SVG_CIRC * 0.75, rotate: 225 },
  },
  initial: 'hidden',
  transition: { duration: 1, ease: 'easeOut' },
}

interface Props {
  highlight: AnimationControls
}

export function PriceRangeAnimationHighlight({ highlight }: Props) {
  return (
    <SContainer version="1.1" xmlns="http://www.w3.org/2000/svg" width={SVG_WIDTH} height={SVG_WIDTH}>
      <motion.circle
        fill="none"
        stroke={color('blue')}
        strokeDasharray={SVG_CIRC * 0.75}
        strokeWidth={SVG_RADIUS * 0.75}
        cx="50%"
        cy="50%"
        r={SVG_RADIUS * 0.75}
        animate={highlight}
        {...props}
      />
    </SContainer>
  )
}
