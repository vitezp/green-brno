import styled from '@emotion/styled'
import { R_GAUGE } from 'components/PriceRangeAnimation/PriceRangeAnimation.utils'
import { motion } from 'framer-motion'
import { color, size } from '../../../theme'

export const SIndicators = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: ${R_GAUGE};
  height: ${R_GAUGE};
`

export const SIndicatorContainerLower = styled.div`
  position: absolute;
  top: 4%;
  left: 4%;

  transform: rotate(-45deg);
  transform-origin: center top;
`

export const SIndicatorContainerHigher = styled.div`
  position: absolute;
  top: 4%;
  right: 4%;

  transform: rotate(45deg);
  transform-origin: center top;
`

export const SIndicator = styled(motion.div)`
  width: ${size(1)};
  height: ${size(5)};

  transform-origin: center bottom;

  background-color: ${color('light-blue')};
  border-radius: 100px;
`
