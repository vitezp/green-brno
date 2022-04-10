import React, { FC } from 'react'
import { Container, Paper, Typography } from '@material-ui/core'
import { useStyles } from '../Panel/styles'
import {EmbedSocialWidget} from "../InstagramFeed/EmbedSocialWidget";

export const Events: FC = () => {
  console.log({ location })
  const classes = useStyles()

  return (
    <Paper classes={classes}>
      <Container maxWidth="lg">
          <div style={{ padding: '30px 0px 0px 13px' }}>
              <Typography variant="h2">Události</Typography>
          </div>
          <EmbedSocialWidget refId="d2fd508a63740c27e790196ace907ebac1fd3bb3"
            title="#Připrav Brno"
            subtitle='Pomozte připravit Brno na klimatické změny. Cílem události je snížit emise o 40%. Nazdílené příspevky jsou zobrazeny zde a ohodnoceny příslušným počtem bodů.' />
          <EmbedSocialWidget refId="b9efa64ea766d99bce15aa8fb11a86868a12d9bb"
            title="#Ukliďme Česko"
            subtitle="Událost, při které se obyvatelé Česka vydají do ulíc a přírody vyklidit odpadky. Nazdílené příspevky jsou zobrazeny zde a ohodnoceny příslušným počtem bodů." />
          <EmbedSocialWidget refId="8fb2685ea09277cc512dd9ac73984c2bdcded408"
            title="#Do práce na kole"
            subtitle="Cesty do práce, absolvovené ekologicky čistým spůsobem. Nazdílené příspevky jsou zobrazeny zde a ohodnoceny příslušným počtem bodů." />
      </Container>
    </Paper>
  )
}
