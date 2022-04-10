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
import { primaryColor, textColor } from '../../theme'

export interface SubCategory {
  label: string
  previous: number
  actual: number
  points: number
}

export interface CategoryProps {
  label: string
  open: boolean
  handleClick: () => void
  subCategories: SubCategory[]
}

const columns = [
  { id: 'sub-category', label: 'Kategória' },
  { id: 'previous', label: 'Předchozí rok' },
  { id: 'actual', label: 'Aktuální rok' },
  { id: 'percentage', label: '%' },
  { id: 'points', label: 'Body' },
]

export const Category: FC<CategoryProps> = ({ label, open, handleClick, subCategories }) => {
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
                <CircleProgressBar value={42} text="42%" />
              </div>
              <div style={{ padding: 32 }}>Lorem</div>
            </div>
            <div style={{ padding: '16px' }}>
              <TableContainer component={Paper} elevation={5}>
                <Table>
                  <TableHead style={{ backgroundColor: `${primaryColor}80` }}>
                    <TableRow>
                      {columns.map(({ id, label }) => (
                        <TableCell style={{ fontWeight: '600' }} key={id}>
                          {label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {subCategories.map(({ label, previous, actual, points }) => {
                      const percentageRaw: string | number = Math.round(((actual - previous) / previous) * 10000) / 100
                      const percentage = percentageRaw < 0 ? `${percentageRaw}` : `+${percentageRaw}`
                      return (
                        <TableRow key={label}>
                          <TableCell component="th" scope="row">
                            {label}
                          </TableCell>
                          <TableCell style={{ width: 160 }} align="left">
                            {previous}
                          </TableCell>
                          <TableCell style={{ width: 160 }} align="left">
                            {actual}
                          </TableCell>
                          <TableCell style={{ width: 160 }} align="left">
                            {percentage}
                          </TableCell>
                          <TableCell style={{ width: 160 }} align="left">
                            {points}
                          </TableCell>
                        </TableRow>
                      )
                    })}
                    <TableRow>
                      <TableCell colSpan={1} />
                      <TableCell colSpan={1} />
                      <TableCell colSpan={1} />
                      <TableCell style={{ fontWeight: '600' }} colSpan={1} align="right">
                        Total
                      </TableCell>
                      <TableCell style={{ fontWeight: '600' }} align="left">
                        14
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
