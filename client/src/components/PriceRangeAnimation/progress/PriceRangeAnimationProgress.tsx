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
  const { t } = useTranslation(['buyingWizard'])

  return (
    <SContainer>
      <AnimatePresence exitBeforeEnter>
        {progress === 1 && (
          <SText key={1} {...props}>
            {t('assessing')}
          </SText>
        )}
        {progress === 2 && (
          <SText key={2} {...props}>
            {t('analysing')}
          </SText>
        )}
        {progress === 3 && (
          <SText key={3} {...props}>
            {t('comparing')}
          </SText>
        )}
      </AnimatePresence>
    </SContainer>
  )
}
