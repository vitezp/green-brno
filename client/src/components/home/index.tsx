import React, { useState } from 'react'
import { PriceRangeAnimation } from '../PriceRangeAnimation/PriceRangeAnimation'
import { primaryColor, textColor } from '../../theme'
import { Category, CategoryProps } from '../Category'

const categories: Pick<CategoryProps, 'label' | 'subCategories'>[] = [
  {
    label: 'Doprava',
    subCategories: [
      { label: 'MHD', previous: 236, actual: 240, points: 12 },
      { label: 'Intenzita cyklodopravy', previous: 4500, actual: 4650, points: 21 },
      { label: 'Strava', previous: 112, actual: 222, points: 31 },
      { label: 'Do práce na kole', previous: 456, actual: 440, points: 22 },
    ],
  },
  {
    label: 'Události',
    subCategories: [
      { label: 'PripravBrno', previous: 236, actual: 240, points: 12 },
      { label: 'UklidimeCesko', previous: 4500, actual: 4650, points: 21 },
      { label: 'DoPraceNaKole', previous: 112, actual: 222, points: 31 },
    ],
  },
  {
    label: 'Město',
    subCategories: [
      { label: 'Stromy', previous: 236, actual: 240, points: 12 },
      { label: 'Osvětlení', previous: 4500, actual: 4650, points: 21 },
      { label: 'Teplota', previous: 112, actual: 222, points: 31 },
    ],
  },
]

export const Home = () => {
  const [openCategory, setOpenCategory] = useState('Doprava')
  return (
    <div>
      <div style={{ padding: '32px', fontSize: '56px', color: textColor, textAlign: 'center' }}>
        Společně za <span style={{ color: primaryColor }}>zelené</span> Brno
      </div>
      <PriceRangeAnimation from={560} to={616} />
      <div style={{ height: '480px' }} />

      {categories.map((category) => (
        <Category
          key={category.label}
          open={openCategory === category.label}
          handleClick={() => setOpenCategory(category.label)}
          {...category}
        />
      ))}
    </div>
  )
}
