import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { color, textColor } from 'theme'

export const SPriceContainer = styled.div`
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
`

export const SPrice = styled(motion.div)`
  line-height: 1;
  font-size: 42px;
  color: ${textColor};
`

export const SPriceTypeContainer = styled.div`
  position: absolute;
  bottom: 27%;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
`

export const SPriceTypes = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 16px;
`

export const SPriceType = styled(motion.div)`
  display: block;
  height: 16px;

  letter-spacing: 1px;
  text-transform: uppercase;
  line-height: 1;
  font-size: 12px;
  color: ${textColor};
`

export const SPriceCalculatingContainer = styled.div`
  position: absolute;
  bottom: 8%;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
`

export const SPriceCalculating = styled(motion.div)`
  text-align: center;
  line-height: 1;
  color: ${textColor};
  font-weight: medium;
`
