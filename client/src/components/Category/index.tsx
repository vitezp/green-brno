import React, { FC } from 'react'
import {
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { CircleProgressBar } from '../Percentile'
import { primaryColor, secondaryColor, textColor } from '../../theme'

export interface SubCategory {
  label: string
  previous: number
  actual: number
}

export interface CategoryProps {
  label: string
  description: string
  all: number
  open: boolean
  handleClick: () => void
  subCategories: SubCategory[]
}

const columns: { id: string; label: string; align?: 'left' | 'right' }[] = [
  { id: 'sub-category', label: 'Kategória', align: 'left' as const },
  { id: 'previous', label: 'Předchozí rok' },
  { id: 'actual', label: 'Aktuální rok' },
  { id: 'points', label: 'Změna' },
  { id: 'percentage', label: 'Změna v %' },
]

export const Category: FC<CategoryProps> = ({ label, description, all, open, handleClick, subCategories }) => {
  const totalActual = subCategories.map((sub) => sub.actual).reduce((a, b) => a + b, 0)
  const totalPrevious = subCategories.map((sub) => sub.previous).reduce((a, b) => a + b, 0)
  const totalDifference = totalActual - totalPrevious
  const totalPercentage = Math.round(((totalActual - totalPrevious) * 100) / totalActual) / 100
  const totalDifferenceLabel = `${totalDifference < 0 ? '' : '+'}${totalDifference}`
  const totalPercentageLabel = `${totalDifference < 0 ? '' : '+'}${totalPercentage} %`

  const percentage = Math.round((totalActual / all) * 10000) / 100
  return (
    <div style={{ padding: '24px' }}>
      <Paper elevation={5}>
        <div
          onClick={handleClick}
          style={{
            cursor: 'pointer',
            backgroundColor: `${primaryColor}40`,
            borderRadius: '4px 4px 0 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ color: textColor, fontSize: 32, padding: 8 }}>{label}</span>
          <IconButton style={{ margin: '8px' }}>{open ? <ExpandLessIcon /> : <ExpandMoreIcon />}</IconButton>
        </div>
        <Collapse in={open}>
          <div>
            <div style={{ display: 'flex' }}>
              <div style={{ padding: 32 }}>
                <CircleProgressBar value={percentage} text={`${percentage} %`} />
              </div>
              <div style={{ padding: 32, fontSize: 20, color: textColor }}>{description}</div>
            </div>
            <div style={{ padding: '16px' }}>
              <TableContainer component={Paper} elevation={5}>
                <Table>
                  <TableHead style={{ backgroundColor: `${primaryColor}80` }}>
                    <TableRow>
                      {columns.map(({ id, label, align = 'right' }) => (
                        <TableCell key={id} style={{ fontWeight: '600' }} align={align}>
                          {label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {subCategories.map(({ label, previous, actual }) => {
                      const pointsNumber = actual - previous
                      const points = pointsNumber < 0 ? `${pointsNumber}` : `+${pointsNumber}`

                      const percentageNumber: string | number =
                        Math.round(((actual - previous) / previous) * 10000) / 100
                      const percentage = `${percentageNumber < 0 ? '' : '+'}${percentageNumber} %`

                      return (
                        <TableRow key={label}>
                          <TableCell component="th" scope="row">
                            {label}
                          </TableCell>
                          <TableCell style={{ width: 160 }} align="right">
                            {previous}
                          </TableCell>
                          <TableCell style={{ width: 160 }} align="right">
                            {actual}
                          </TableCell>
                          <TableCell
                            style={{
                              width: 160,
                              fontWeight: 'bold',
                              color: percentageNumber < 0 ? secondaryColor : primaryColor,
                            }}
                            align="right"
                          >
                            {points}
                          </TableCell>

                          <TableCell
                            style={{
                              width: 160,
                              fontWeight: 'bold',
                              color: percentageNumber < 0 ? secondaryColor : primaryColor,
                            }}
                            align="right"
                          >
                            {percentage}
                          </TableCell>
                        </TableRow>
                      )
                    })}
                    <TableRow>
                      <TableCell style={{ fontWeight: '600' }} colSpan={1} align="left">
                        Total
                      </TableCell>
                      <TableCell style={{ fontWeight: '600' }} align="right">
                        {totalPrevious}
                      </TableCell>
                      <TableCell style={{ fontWeight: '600' }} align="right">
                        {totalActual}
                      </TableCell>
                      <TableCell
                        style={{ fontWeight: '600', color: totalDifference < 0 ? secondaryColor : primaryColor }}
                        align="right"
                      >
                        {totalDifferenceLabel}
                      </TableCell>
                      <TableCell
                        style={{ fontWeight: '600', color: totalDifference < 0 ? secondaryColor : primaryColor }}
                        align="right"
                      >
                        {totalPercentageLabel}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </Collapse>
      </Paper>
    </div>
  )
}
