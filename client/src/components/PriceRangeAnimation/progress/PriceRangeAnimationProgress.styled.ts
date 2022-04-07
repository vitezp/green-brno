import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { color, weight } from 'theme'
import { size } from 'theme'

export const SContainer = styled.div`
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);

  height: ${size(5)};
  overflow: hidden;
`

export const SText = styled(motion('span'))`
  letter-spacing: 2px;
  color: ${color('night')};
  text-transform: uppercase;
  font-weight: ${weight('medium')};
`
