import React from 'react'
// import { formatEur } from 'driverama-core/utils/formatting'
import { SRange, SRangeContainerLeft, SRangeContainerRight } from './PriceRangeAnimationRanges.styled'
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
        <SRange animate={ranges} {...propsL}>
          {from}
        </SRange>
      </SRangeContainerLeft>
      <SRangeContainerRight>
        <SRange animate={ranges} {...propsR}>
          {to}
        </SRange>
      </SRangeContainerRight>
    </>
  )
}
