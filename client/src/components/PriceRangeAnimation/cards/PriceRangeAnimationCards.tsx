import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { delay } from 'utils'
import { SCard, SCardContainerTop } from './PriceRangeAnimationCards.styled'

const contProps = {
  initial: { scaleY: 0.5, y: '-25%' },
  animate: { scaleY: 1, y: '-50%' },
  transition: { duration: 0.5 },
}

const contPropsTop = {
  initial: { scaleY: 0.5, y: '25%', x: '-50%' },
  animate: { scaleY: 1, y: 0, x: '-50%' },
  transition: { duration: 0.5 },
}

const cardProps = {
  initial: { y: 64 },
  animate: { y: 0 },
  transition: { duration: 1, type: 'spring', stiffness: 50 },
}

export function PriceRangeAnimationCards() {
  const { t } = useTranslation(['buyingWizard'])
  const [show, setShow] = useState<{
    left?: boolean
    right?: boolean
    top?: boolean
  }>({
    left: false,
    right: false,
    top: false,
  })

  const animate = useCallback(async () => {
    setShow({ left: true })
    await delay(150)
    setShow({ left: true, right: true })
    await delay(150)
    setShow({ left: true, right: true, top: true })
  }, [])

  useEffect(() => {
    void animate()
  }, [animate])

  return (
    <>
      {/*{show.left && (*/}
      {/*  <SCardContainerLeft {...contProps}>*/}
      {/*    <SCard {...cardProps}>{t('suspicious')}</SCard>*/}
      {/*  </SCardContainerLeft>*/}
      {/*)}*/}
      {/*{show.right && (*/}
      {/*  <SCardContainerRight {...contProps}>*/}
      {/*    <SCard {...cardProps}>{t('overpriced')}</SCard>*/}
      {/*  </SCardContainerRight>*/}
      {/*)}*/}
      {show.top && (
        <SCardContainerTop {...contPropsTop}>
          <SCard {...cardProps}>{t('+10 %')}</SCard>
        </SCardContainerTop>
      )}
    </>
  )
}
