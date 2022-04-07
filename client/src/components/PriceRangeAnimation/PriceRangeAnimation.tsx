import React, { useCallback, useEffect, useState } from 'react'
import { useAnimation } from 'framer-motion'
import { PriceRangeAnimationTrack } from 'components/PriceRangeAnimation/track/PriceRangeAnimationTrack'
import { PriceRangeAnimationPrices } from 'components/PriceRangeAnimation/prices/PriceRangeAnimationPrices'
import { PriceRangeAnimationPointer } from 'components/PriceRangeAnimation/pointer/PriceRangeAnimationPointer'
import { PriceRangeAnimationIndicators } from 'components/PriceRangeAnimation/indicators/PriceRangeAnimationIndicators'
import { PriceRangeAnimationCards } from 'components/PriceRangeAnimation/cards/PriceRangeAnimationCards'
import { PriceRangeAnimationRanges } from 'components/PriceRangeAnimation/ranges/PriceRangeAnimationRanges'
import { PriceRangeAnimationReveal } from 'components/PriceRangeAnimation/reveal/PriceRangeAnimationReveal'
import { PriceRangeAnimationLoader } from 'components/PriceRangeAnimation/loader/PriceRangeAnimationLoader'
import { PriceRangeAnimationHighlight } from 'components/PriceRangeAnimation/highlight/PriceRangeAnimationHighlight'
import { PriceRangeAnimationProgress } from 'components/PriceRangeAnimation/progress/PriceRangeAnimationProgress'
import { SContainer, SGaugeCoverCenter, SGaugeFill } from './PriceRangeAnimation.styled'
import { delay } from '../../utils'

const coverCenterProps = {
  variants: {
    hidden: { scale: 0, x: '-50%', y: '-50%' },
    visible: { scale: 1, x: '-50%', y: '-50%' },
    finish: { scale: 0.55, x: '-50%', y: '-50%', transition: { duration: 1 } },
  },
  initial: 'hidden',
  transition: { duration: 0.8, delay: 0.2 },
}

const fillProps = {
  variants: {
    hidden: { display: 'none' },
    visible: { display: 'block' },
  },
  initial: 'hidden',
}

interface Props {
  from: number
  to: number
}

export function PriceRangeAnimation({ from, to }: Props) {
  const [showCards, setShowCards] = useState(false)
  const [progress, setProgress] = useState<1 | 2 | 3>()
  const [counts, setCounts] = useState({ start: 0, end: 0 })

  // ANIMATION CONTROLS
  const pointer = useAnimation()
  const prices = useAnimation()
  const priceType = useAnimation()
  const coverCenter = useAnimation()
  const track = useAnimation()
  const trackContainer = useAnimation()
  const reveal1 = useAnimation()
  const reveal2 = useAnimation()
  const loader = useAnimation()
  const loaderContainer = useAnimation()
  const lower = useAnimation()
  const higher = useAnimation()
  const highlight = useAnimation()
  const ranges = useAnimation()
  const fill = useAnimation()

  // ANIMATION TIMELINES
  const showIndicators = useCallback(async () => {
    await delay(1000)
    lower.start('visible')
    await delay(3250)
    higher.start('visible')
  }, [higher, lower])

  const popIndicators = useCallback(async () => {
    lower.start('hidden')
    await delay(100)
    higher.start('hidden')
    await delay(400)
    lower.start('visible')
    await delay(100)
    higher.start('visible')
  }, [higher, lower])

  const spinLoader = useCallback(async () => {
    loaderContainer.set('initial')
    loaderContainer.start('rotate')
    await loader.start('half')
    loader.set('flip')
    await loader.start('hidden')
    loader.set('unflip')
  }, [loader, loaderContainer])

  const animateLoader = useCallback(async () => {
    await delay(250)
    await spinLoader()
    await delay(500)
    await spinLoader()
    await delay(500)
    await spinLoader()
    await delay(500)
    await spinLoader()
  }, [spinLoader])

  const spinTrack = useCallback(async () => {
    trackContainer.set('initial')
    trackContainer.start('rotate')
    await track.start('unstroke')
    await track.start('stroke')
    track.set('reset')
  }, [track, trackContainer])

  const animateIntro = useCallback(async () => {
    await reveal1.start('large')
    reveal2.start('normal')
    await reveal1.start('normal')

    track.set('fill')
    reveal1.set('hidden')
    reveal2.set('hidden')

    animateLoader()

    setProgress(1)
    await spinTrack()
    setProgress(2)
    await spinTrack()
    setProgress(3)
    await spinTrack()

    setProgress(undefined)
    trackContainer.set('initial')
    trackContainer.start('rotateHalf')
    await track.start('unstroke')

    trackContainer.start('finish')
    track.start('base')
  }, [reveal1, reveal2, track, animateLoader, spinTrack, trackContainer])

  const animate = useCallback(async () => {
    await animateIntro()

    await delay(750)
    coverCenter.start('visible')
    pointer.start('visible')
    await delay(250)
    priceType.start('lower')
    await prices.start('visible')
    await delay(250)

    showIndicators()
    fill.set('visible')

    await delay(500)

    setCounts({ start: 0, end: from })
    trackContainer.set('flip')
    track.start('lower')
    await pointer.start('lowerEase')
    pointer.start('lowerSpring')

    await delay(1000)

    setCounts({ start: from, end: 0 })
    track.start('return')
    await pointer.start('start')

    await delay(500)

    priceType.start('higher')
    setCounts({ start: 0, end: to })
    track.start('higher')
    await pointer.start('higherEase')
    pointer.start('higherSpring')

    await delay(1000)

    setCounts({ start: to, end: 0 })
    track.start('return')
    await pointer.start('start')

    await delay(500)

    fill.set('hidden')
    popIndicators()

    prices.start('above')
    priceType.start('above')
    coverCenter.start('finish')
    pointer.start('exit')
    track.start('finish')

    await delay(250)

    highlight.start('visible')
    ranges.start('visible')
    setShowCards(true)
  }, [
    animateIntro,
    coverCenter,
    pointer,
    priceType,
    prices,
    showIndicators,
    fill,
    from,
    trackContainer,
    track,
    to,
    popIndicators,
    highlight,
    ranges,
  ])

  useEffect(() => {
    void animate()
  }, [animate])

  return (
    <SContainer>
      <SGaugeFill animate={fill} {...fillProps} />

      <PriceRangeAnimationTrack container={trackContainer} track={track} />

      <PriceRangeAnimationLoader loader={loader} loaderContainer={loaderContainer} />

      <PriceRangeAnimationProgress progress={progress} />

      <PriceRangeAnimationReveal reveal1={reveal1} reveal2={reveal2} />

      <PriceRangeAnimationHighlight highlight={highlight} />

      <SGaugeCoverCenter animate={coverCenter} {...coverCenterProps} />

      <PriceRangeAnimationPrices prices={prices} priceType={priceType} counts={counts} />

      <PriceRangeAnimationPointer pointer={pointer} />

      <PriceRangeAnimationIndicators lower={lower} higher={higher} />

      {showCards && <PriceRangeAnimationCards />}

      <PriceRangeAnimationRanges from={from} to={to} ranges={ranges} />
    </SContainer>
  )
}
