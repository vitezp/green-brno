import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { color, textColor } from 'theme'
import { R_COVER, R_GAUGE } from 'components/PriceRangeAnimation/PriceRangeAnimation.utils'

export const SReveal1 = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: calc(${R_GAUGE} * 0.7);
  height: calc(${R_GAUGE} * 0.7);

  background-color: #dbdcdb;
  border-radius: 100%;
`
//   border-radius: ${radius('full')};

export const SReveal2 = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: calc(${R_COVER} * 0.7);
  height: calc(${R_COVER} * 0.7);

  background-color: ${color('white')};
  border-radius: 100%;
`
//   border-radius: ${radius('full')};
