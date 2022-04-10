import React, { FC } from 'react'

export const Calculator: FC = () => {
  return (
    <iframe
      src="https://www.hra-o-zemi.cz/bydleni#vypocet"
      style={{
        width: '100%',
        height: 'calc(100vh - 87px)',
        border: '0px',
        overflow: 'hidden',
      }}
    />
  )
}
