import React, { FC, useEffect, useState } from 'react'
import {
  Avatar,
  CardHeader,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { Percentile } from "../Percentile";
import { primaryColor } from '../../theme'

const createData = (event: string, origin: string, value: string, points: number) => {
  return { event, origin, value, points }
}

export const Profile: FC = () => {
  const [data, setData] = useState([])

  const columns = [
    { id: 'activity', label: 'Aktivita', align: 'left' as const },
    { id: 'origin', label: 'Původ', align: 'left' as const },
    { id: 'value', label: 'Měrná hodnota', align: 'left' as const },
    { id: 'points', label: 'Body', align: 'right' as const },
  ]
  const rows = [
    createData('Do práce na kole', 'strava', '35 km', 4),
    createData('Do práce peši', 'strava', '12 km', 6),
    createData('Do práce MHD', 'strava', '70 min', 2),
    createData('Ukliďme Brno', 'instagram', '24 interakcí', 2),
  ]

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/api/v1/strava/clubActivities?page=0&size=100')
      const data = await response.json()
      setData(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <Container maxWidth="lg">
        <CardHeader
          action={<Percentile/>}
          avatar={
            <Avatar
              src="/images/paprik.jfif"
              style={{
                height: '170px',
                width: '170px',
              }}
            />
          }
          subheader="Vítejte ve svém profilu! Zde můžete vidět súhrn svých aktivit, které dělají Brno zelenším."
          title={<Typography variant="h2">Patrik</Typography>}
        />

        <Toolbar>
          <Typography style={{ fontWeight: 'bolder' }} variant="h6" id="tableTitle" component="div">
            Posledné aktivity
          </Typography>
        </Toolbar>
        <TableContainer component={Paper}>
          <Table>
            <TableHead style={{ backgroundColor: `${primaryColor}80` }}>
              <TableRow>
                {columns.map(({ id, align, label }) => (
                  <TableCell style={{ fontWeight: '600' }} key={id} align={align}>
                    {label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.event}>
                  <TableCell component="th" scope="row">
                    {row.event}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="left">
                    {row.origin}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="left">
                    {row.value}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {row.points}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={1} />
                <TableCell colSpan={1} />
                <TableCell colSpan={1}>Total</TableCell>
                <TableCell align="right">14</TableCell>
                <TableCell style={{ fontWeight: '600' }} colSpan={1} align="right">
                  Total
                </TableCell>
                <TableCell style={{ fontWeight: '600' }} align="right">
                  30
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  )
}
