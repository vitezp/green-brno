import styled from '@emotion/styled'
import { color } from 'theme'
import { motion } from 'framer-motion'
import { R_COVER, R_GAUGE, SVG_WIDTH } from 'components/PriceRangeAnimation/PriceRangeAnimation.utils'

export const SContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;

  width: ${SVG_WIDTH}px;
  height: ${SVG_WIDTH}px;
`
// @media ${media.lte('tablet')} {
//     transform: translate(-50%, -50%) scale(0.9);
//   }

export const SGaugeFill = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);

  width: calc(${R_GAUGE} - 1px);
  height: calc(${R_GAUGE} - 1px);

  border-radius: 50%;
  background: linear-gradient(to right, ${color('light-blue')} 0%, ${color('night-l-300')} 66%);

  clip-path: polygon(0 49%, 49% 49%, 51% 100%, 100% 100%, 100% 0, 0 0);
`

export const SGaugeCoverCenter = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: calc(${R_COVER} + 1px);
  height: calc(${R_COVER} + 1px);

  border-radius: 50%;
  background-color: ${color('white')};
`
