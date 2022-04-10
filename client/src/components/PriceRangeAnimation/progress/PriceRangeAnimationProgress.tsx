import React from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence } from 'framer-motion'
import { size } from 'theme'
import { SContainer, SText } from './PriceRangeAnimationProgress.styled'

const props = {
  animate: { y: 0 },
  initial: { y: size(5) },
  exit: { y: size(5) },
  transition: { duration: 0.25, ease: 'easeInOut' },
}

interface Props {
  progress?: 1 | 2 | 3
}

export function PriceRangeAnimationProgress({ progress }: Props) {
  return (
    <SContainer>
      <AnimatePresence exitBeforeEnter>
        {progress === 1 && (
          <SText key={1} {...props}>
            Získavání dat
          </SText>
        )}
        {progress === 2 && (
          <SText key={2} {...props}>
            Spracování dat
          </SText>
        )}
        {progress === 3 && (
          <SText key={3} {...props}>
            Porovnání dat
          </SText>
        )}
      </AnimatePresence>
    </SContainer>
  )
}
