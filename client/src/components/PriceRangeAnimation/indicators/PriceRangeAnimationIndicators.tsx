import React from 'react'
import { AnimationControls } from 'framer-motion'
import {
  SIndicator,
  SIndicatorContainerHigher,
  SIndicatorContainerLower,
  SIndicators,
} from './PriceRangeAnimationIndicators.styled'

const props = {
  variants: {
    hidden: { scaleY: 0, y: '50%' },
    visible: { scaleY: 1, y: 0 },
  },
  initial: 'hidden',
  transition: { duration: 0.5 },
}

interface Props {
  lower: AnimationControls
  higher: AnimationControls
}

export function PriceRangeAnimationIndicators({ lower, higher }: Props) {
  return (
    <SIndicators>
      <SIndicatorContainerLower>
        <SIndicator animate={lower} {...props} />
      </SIndicatorContainerLower>
      <SIndicatorContainerHigher>
        <SIndicator animate={higher} {...props} />
      </SIndicatorContainerHigher>
    </SIndicators>
  )
}
