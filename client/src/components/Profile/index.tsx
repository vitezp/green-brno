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
  Tooltip,
  Typography,
} from '@material-ui/core'
import { primaryColor } from '../../theme'
import { CircleProgressBar } from '../Percentile'

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
    <div style={{ paddingBottom: '32px' }}>
      <Container maxWidth="lg">
        <CardHeader
          action={
            <div style={{display: 'flex'}}>
              <div>
                <Avatar
                    src="/images/badge.png"
                    style={{
                      height: '70px',
                      width: '70px',
                      marginTop: '95px',
                      marginLeft: '50px'
                    }}
                />
                <sup>Šampión ve třídení odpadu</sup>
              </div>
              <Tooltip title="Jste lepší než 67% obyvatel Brna" arrow>
                <div>
                  <Typography
                    style={{
                      fontWeight: 'bolder',
                      textAlign: 'center',
                      paddingTop: '20px',
                    }}
                    variant="h6"
                  >
                    Percentil
                  </Typography>
                  <div
                    style={{
                      margin: '20px 30px',
                    }}
                  >
                    <CircleProgressBar value={67} text="67%" />
                  </div>
                </div>
              </Tooltip>
            </div>
          }
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
                    <Avatar src={`/favicon/${row.origin}.ico`} style={{ height: '25px', width: '25px', }}/>
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
                <TableCell style={{ fontWeight: '600' }} colSpan={1} align="right">
                  Total
                </TableCell>
                <TableCell style={{ fontWeight: '600' }} align="right">
                  14
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  )
}
