import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import { color, size } from 'theme'
import { R_COVER } from 'components/PriceRangeAnimation/PriceRangeAnimation.utils'

export const SPointerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%) rotate(-135deg);
  transform-origin: 50% 100%;
`
export const SPointer = styled(motion.div)`
  transform-origin: 50% 100%;

  width: ${size(4)};
  height: calc((${R_COVER} / 2) - ${size(4)});
`
export const SPointerBody = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${color('pink')};
  clip-path: polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%);
`
export const SPointerBallStart = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);

  width: ${size(4)};
  height: ${size(4)};

  border-radius: 50%;
  background-color: ${color('pink')};
`
export const SPointerBallEnd = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);

  width: calc(0.4 * ${size(4)});
  height: calc(0.4 * ${size(4)});

  border-radius: 50%;
  background-color: ${color('pink')};
`
