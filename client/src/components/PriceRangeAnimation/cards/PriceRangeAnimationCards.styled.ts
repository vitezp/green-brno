import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { color, size, textColor } from 'theme'

export const SCardContainerLeft = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: ${size(12)};
  transform: translateY(-50%);
  overflow: hidden;

  padding: ${size(3)} ${size(4)};

  background-color: ${color('white')};
  border-radius: 50% 50%;
  box-shadow: 0 2px 16px 4px rgba(0, 0, 0, 0.1);
`
// border-radius: ${radius('corner')}

export const SCardContainerRight = styled(SCardContainerLeft)`
  left: initial;
  right: ${size(12)};
`

export const SCardContainerTop = styled(SCardContainerLeft)`
  left: 50%;
  top: ${size(22)};
  transform: translateX(-50%);
`

export const SCard = styled(motion.div)`
  display: block;
  font-weight: bold;
  color: #578300;
`

export const SCardBlack = styled(SCard)`
  color: ${textColor};
  font-weight: normal;
`
