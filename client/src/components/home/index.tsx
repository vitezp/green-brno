import React, { useState } from 'react'
import { PriceRangeAnimation } from '../PriceRangeAnimation/PriceRangeAnimation'
import { primaryColor, textColor } from '../../theme'
import { Category, CategoryProps } from '../Category'

const categories: Pick<CategoryProps, 'label' | 'description' | 'subCategories'>[] = [
  {
    label: 'Doprava',
    description: 'Statistiky kategorie Doprava sledují využívaní mikromobility a alternativy k osobním automobilům.',
    subCategories: [
      { label: 'MHD', previous: 512, actual: 545 },
      { label: 'Intenzita cyklodopravy', previous: 4500, actual: 4650 },
      { label: 'Strava', previous: 112, actual: 222 },
      { label: 'Do práce na kole', previous: 456, actual: 414 },
    ],
  },
  {
    label: 'Události',
    description:
      'Statistiky kategorie Události sledují aktivitu na socialních síti, a vytváreňí povědomí o jednotlivých akcí. Každý uživatel socialní síte se může zapojit pomocí využití hashtagu konkrétní akce.',
    subCategories: [
      { label: 'PripravBrno', previous: 2360, actual: 2400 },
      { label: 'UklidimeCesko', previous: 4500, actual: 4650 },
      { label: 'DoPraceNaKole', previous: 1384, actual: 3211 },
    ],
  },
  {
    label: 'Město',
    description:
      'Statistiky kategorie Město sleduje aktivitu města k naplnění jendotlivých cílů stanovýc v plánech pro město Brno. Tyto aktivity pak vizualizuje občanům aby bylo vidět kokrétní dopad na naše město.',
    subCategories: [
      { label: 'Stromy', previous: 789, actual: 900 },
      { label: 'Osvětlení', previous: 4500, actual: 5650 },
      { label: 'Teplota', previous: 602, actual: 340 },
    ],
  },
]

const { from, to } = categories.reduce(
  ({ from, to }, category) => {
    return {
      from: from + category.subCategories.map((sub) => sub.previous).reduce((a, b) => a + b, 0),
      to: to + category.subCategories.map((sub) => sub.actual).reduce((a, b) => a + b, 0),
    }
  },
  { from: 0, to: 0 }
)

export const Home = () => {
  const [openCategory, setOpenCategory] = useState('Doprava')
  return (
    <div>
      <div style={{ padding: '45px', fontSize: '56px', color: textColor, textAlign: 'center' }}>
        Společně za <span style={{ color: primaryColor }}>zelené</span> Brno
      </div>
      <PriceRangeAnimation from={from} to={to} />
      <div style={{ height: '460px' }} />

      {categories.map((category) => (
        <Category
          key={category.label}
          open={openCategory === category.label}
          all={to}
          handleClick={() => setOpenCategory(category.label)}
          {...category}
        />
      ))}
    </div>
  )
}
