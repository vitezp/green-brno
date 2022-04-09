import React, { FC } from 'react'
import {
    Avatar, CardHeader, Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TablePagination,
    TableRow, Toolbar, Tooltip, Typography
} from '@material-ui/core'
import {useStyles} from "../Panel/styles";
import TablePaginationActions from "@material-ui/core/TablePagination/TablePaginationActions";


const createData = (name: string, calories: number, fat: number) => {
    return { name, calories, fat };
}

export const Profile: FC = () => {
    console.log({ location })
    const classes = useStyles()

    const rows = [
        createData('Cupcake', 305, 3.7),
        createData('Donut', 452, 25.0),
        createData('Eclair', 262, 16.0),
        createData('Frozen yoghurt', 159, 6.0),
        createData('Gingerbread', 356, 16.0),
        createData('Honeycomb', 408, 3.2),
        createData('Ice cream sandwich', 237, 9.0),
        createData('Jelly Bean', 375, 0.0),
        createData('KitKat', 518, 26.0),
        createData('Lollipop', 392, 0.2),
        createData('Marshmallow', 318, 0),
        createData('Nougat', 360, 19.0),
        createData('Oreo', 437, 18.0),
    ]

    const rowsPerPage = 5;
    const page = 1;

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
                      <TableBody>
                          {(rowsPerPage > 0
                                  ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                  : rows
                          ).map((row) => (
                              <TableRow key={row.name}>
                                  <TableCell component="th" scope="row">
                                      {row.name}
                                  </TableCell>
                                  <TableCell style={{ width: 160 }} align="right">
                                      {row.calories}
                                  </TableCell>
                                  <TableCell style={{ width: 160 }} align="right">
                                      {row.fat}
                                  </TableCell>
                              </TableRow>
                          ))}
                      </TableBody>
                  </Table>
              </TableContainer>
          </Container>
      </Paper>
  )
}
