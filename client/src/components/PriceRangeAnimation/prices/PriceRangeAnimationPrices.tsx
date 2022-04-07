import React from 'react'
import CountUp from 'react-countup'
// import { formatEur } from 'driverama-core/utils/formatting'
import { AnimationControls } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  SPrice,
  SPriceCalculating,
  SPriceCalculatingContainer,
  SPriceContainer,
  SPriceType,
  SPriceTypeContainer,
  SPriceTypes,
} from './PriceRangeAnimationPrices.styled'

const priceTypeProps = {
  variants: {
    below: { y: '-150%' },
    lower: { y: '-50%' },
    higher: { y: '50%' },
    above: { y: '150%' },
  },
  initial: 'below',
  transition: { duration: 0.75 },
}

const pricesProps = {
  variants: {
    below: { y: '-150%' },
    visible: { y: 0 },
    above: { y: '150%' },
  },
  initial: 'below',
  transition: { duration: 0.75 },
}

interface Props {
  prices: AnimationControls
  priceType: AnimationControls
  counts: {
    start: number
    end: number
  }
}

export function PriceRangeAnimationPrices({ prices, priceType, counts }: Props) {
  const { t } = useTranslation(['buyingWizard'])

  return (
    <>
      <SPriceTypeContainer>
        <SPriceTypes animate={priceType} {...priceTypeProps}>
          <SPriceType>{t('higher')}</SPriceType>
          <SPriceType>{t('lower')}</SPriceType>
        </SPriceTypes>
      </SPriceTypeContainer>
      <SPriceContainer>
        <SPrice animate={prices} {...pricesProps}>
          <CountUp start={counts.start} end={counts.end} duration={0.75} formattingFn={(num) => `${num}` || ''} />
        </SPrice>
      </SPriceContainer>
      <SPriceCalculatingContainer>
        <SPriceCalculating animate={prices} {...pricesProps}>
          {t('calculating')}
        </SPriceCalculating>
      </SPriceCalculatingContainer>
    </>
  )
}
