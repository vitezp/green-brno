import React, { FC } from 'react'
import { Container, Paper, Typography } from '@material-ui/core'
import {useStyles} from "../Panel/styles";


export const Events: FC = () => {
    console.log({ location })
    const classes = useStyles()

  return (
      <Paper classes={classes}>
          <Container maxWidth="lg">
              <Typography variant="h2">Events</Typography>
          </Container>
      </Paper>
  )
}
