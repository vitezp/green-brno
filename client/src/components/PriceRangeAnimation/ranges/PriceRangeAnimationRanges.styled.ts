import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { color, primaryColor, weight } from 'theme'

export const SRangeContainerLeft = styled.div`
  position: absolute;
  top: 15%;
  right: 70%;
  overflow: hidden;
`

export const SRangeContainerRight = styled.div`
  position: absolute;
  top: 15%;
  left: 70%;
  overflow: hidden;
`

export const SRangeMin = styled(motion.div)`
  line-height: 1;
  font-size: 28px;
  font-weight: normal;
  color: #da2128;
`

export const SRangeMax = styled(SRangeMin)`
  color: ${primaryColor};
`
