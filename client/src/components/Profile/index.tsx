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
import { useStyles } from '../Panel/styles'
import {BikeToWork} from "../BikeToWork";
import {Percentile} from "../Percentile";

const createData = (event: string, distance: number, points: number) => {
  return { event, distance, points }
}

export const Profile: FC = () => {
  const classes = useStyles()
  const [data, setData] = useState([])

  const columns = [
    { id: 'activity', label: 'Aktivita', align: 'left' as const },
    { id: 'distance', label: 'Vzdálenost (km)', align: 'left' as const },
    { id: 'points', label: 'Body', align: 'right' as const },
  ]
  const rows = [
    createData('Do práce na kole', 35, 4),
    createData('Do práce peši', 12, 2),
    createData('Do práce MHD', 240, 24.0),
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
    <Paper classes={classes}>
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
          subheader="vítejte ve svém profilu! Zde můžete vidět súhrn svých aktivit, které dělají Brno zelenším"
          title={<Typography variant="h2">Patrik</Typography>}
        />

        <Toolbar>
          <Typography style={{ fontWeight: 'bolder' }} variant="h6" id="tableTitle" component="div">
            Posledné aktivity
          </Typography>
        </Toolbar>
        <TableContainer component={Paper}>
          <Table>
            <TableHead style={{ backgroundColor: 'yellow' }}>
              <TableRow>
                {columns.map(({ id, align, label }) => (
                  <TableCell key={id} align={align}>
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
                  <TableCell style={{ width: 160 }} align="right">
                    {row.distance} km
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {row.points}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={1} />
                <TableCell colSpan={1}>Total</TableCell>
                <TableCell align="right">30</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Paper>
  )
}
