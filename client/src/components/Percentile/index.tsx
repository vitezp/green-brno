import React, { FC } from 'react'
import { Tooltip, Typography } from '@material-ui/core'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export interface CircleProgressBarProps {
  value: number
  text: string
  size?: number
}

export const CircleProgressBar: FC<CircleProgressBarProps> = ({ value, text, size = 120 }) => {
  return (
    <div style={{ width: size, height: size }}>
      <CircularProgressbar
        value={value}
        text={text}
        styles={buildStyles({
          pathColor: 'rgb(82,183,54)',
          textColor: 'rgb(82,183,54)',
        })}
      />
    </div>
  )
}
