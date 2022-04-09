import React, {FC, useEffect, useState} from 'react'
import {Tooltip, Typography} from "@material-ui/core";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Percentile: FC = () => {

    const percentile = 67;

    return (
        <div>
            <Tooltip title={`Jste lepší než ${percentile}% obyvatel Brna`} arrow>
                <div>
                    <Typography style={{
                        fontWeight: "bolder",
                        textAlign: "center",
                        paddingTop: '20px'
                    }} variant="h6" >
                        Percentil
                    </Typography>
                    <div style={{
                        width: 120,
                        height: 120,
                        margin: '20px 30px'
                    }}>
                        <CircularProgressbar value={percentile} text={`${percentile}%`} styles={buildStyles({
                            pathColor: 'rgb(82,183,54)',
                            textColor: 'rgb(82,183,54)'
                        })}/>
                    </div>
                </div>
            </Tooltip>
        </div>
    )
}
