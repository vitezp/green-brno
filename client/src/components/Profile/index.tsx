import React, { FC } from 'react'
import {
    Avatar, CardHeader, Container,
    Paper,
    Table,
    TableBody,
    TableCell, TableCellProps,
    TableContainer,
    TableFooter, TableHead,
    TablePagination,
    TableRow, Toolbar, Tooltip, Typography
} from '@material-ui/core'
import {useStyles} from "../Panel/styles";

const createData = (event: string, distance: number, points: number) => {
    return { event, distance, points };
}

export const Profile: FC = () => {
    console.log({ location })
    const classes = useStyles()

    const columns = [
        { id: 'activity', label: 'Aktivita', align: 'left' as const },
        { id: 'activity', label: 'Vzdálenost (km)', align: 'left' as const },
        { id: 'activity', label: 'Body', align: 'right' as const},
    ];
    const rows = [
        createData('Do práce na kole', 35, 4),
        createData('Do práce peši', 12, 2),
        createData('Do práce MHD', 240, 24.0)
    ]

  return (
      <Paper classes={classes}>
          <Container maxWidth="lg">
              <CardHeader
                  avatar={<Avatar alt="Remy Sharp" src="/images/paprik.jfif"
                                  style={{
                                      height: '170px',
                                      width: '170px'
                  }}/>}
                  title={<Typography variant="h2">Patrik</Typography>}
              />

              <Toolbar>
                  <Typography style={{ fontWeight: "bolder" }} variant="h6" id="tableTitle" component="div">
                      Posledné aktivity
                  </Typography>
              </Toolbar>
              <TableContainer component={Paper}>
                  <Table>
                      <TableHead>
                          <TableRow>
                              {columns.map(({id, align, label }) => (
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
                              <TableCell colSpan={1}/>
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
