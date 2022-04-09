import React, { FC } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useStyles } from './styles'
import {Avatar, CardHeader, Paper, Typography} from '@material-ui/core'
import { primaryColor, textColor } from '../../theme'

const panelItems = [
  { key: 'calculator', label: 'Eko Kalkulačka' },
  { key: 'events', label: 'Akce' }
]

export const Panel: FC = () => {
  const classes = useStyles()
  const { pathname } = useLocation()
  const history = useHistory()

  console.log({ location })

  return (
    <Paper
      style={{
        position: 'fixed',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        borderRadius: '0px',
        padding: '0 16px',
        backgroundColor: '#ffffffe0',
          zIndex: 2
      }}
      square
      classes={classes}
      elevation={4}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <img
          style={{ cursor: 'pointer' }}
          src="/images/logo_black.png"
          alt="Brno"
          width="auto"
          height="80px"
          onClick={() => history.push('/')}
        />
        {panelItems.map(({ key, label }) => (
          <Link
            key={key}
            to={`/${key}`}
            style={{
              textDecoration: 'none',
              padding: '8px 16px',
              color: pathname.includes(key) ? primaryColor : textColor,
              fontWeight: pathname.includes(key) ? 'bold' : 'normal',
            }}
          >
            {label}
          </Link>
        ))}
      </div>
        <Link
            to={`/profile`}>
            <CardHeader
                avatar={<Avatar src="/images/paprik.jfif"/>}
                title={"Patrik"}
            />
        </Link>

    </Paper>
  )
}
