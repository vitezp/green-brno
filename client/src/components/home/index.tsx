import React from 'react'
import { PriceRangeAnimation } from '../PriceRangeAnimation/PriceRangeAnimation'
import { primaryColor, textColor } from '../../theme'

export const Home = () => {
  return (
    <div>
      <div style={{ padding: '32px', fontSize: '56px', color: textColor, textAlign: 'center' }}>
        Společně za <span style={{ color: primaryColor }}>zelené</span> Brno
      </div>
      <PriceRangeAnimation from={560} to={616} />
    </div>
  )
}
