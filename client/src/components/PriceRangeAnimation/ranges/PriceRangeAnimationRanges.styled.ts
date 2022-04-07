import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { color, weight } from 'theme'

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

export const SRange = styled(motion('span'))`
  line-height: 1;
  font-size: 28px;
  color: ${color('night-l-100')};
  font-weight: ${weight('medium')};
`
// @media ${media.gt('mobile')} {
//     font-size: 40px;
//   }
