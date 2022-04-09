import React from 'react'
// import { formatEur } from 'driverama-core/utils/formatting'
import { SRangeContainerLeft, SRangeContainerRight, SRangeMin, SRangeMax } from './PriceRangeAnimationRanges.styled'
import { AnimationControls } from 'framer-motion'

const propsL = {
  variants: {
    hidden: { y: '150%' },
    visible: { y: 0 },
  },
  initial: 'hidden',
  transition: { duration: 1.4, type: 'spring' },
}

const propsR = {
  ...propsL,
  transition: { duration: 1.4, type: 'spring', delay: 0.1 },
}

interface Props {
  from: number
  to: number
  ranges: AnimationControls
}

export function PriceRangeAnimationRanges({ from, to, ranges }: Props) {
  return (
    <>
      <SRangeContainerLeft>
        <SRangeMin animate={ranges} {...propsL}>
          {from}
        </SRangeMin>
      </SRangeContainerLeft>
      <SRangeContainerRight>
        <SRangeMax animate={ranges} {...propsR}>
          {to}
        </SRangeMax>
      </SRangeContainerRight>
    </>
  )
}
