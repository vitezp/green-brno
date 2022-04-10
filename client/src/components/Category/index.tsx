import React, { FC } from 'react'
import { Collapse, IconButton } from '@material-ui/core'

export interface SubCategory {
  label: string
  values: { year: number; value: number }[]
}

export interface CategoryProps {
  label: string
  open: boolean
  subCategories: SubCategory[]
}

export const Category: FC<CategoryProps> = ({ label, open }) => {
  return (
    <div>
      <div>
        <span>{label}</span>
        <IconButton>{open ? 'open' : 'close'}</IconButton>
      </div>
      <Collapse in={open}>
        <div></div>
      </Collapse>
    </div>
  )
}
