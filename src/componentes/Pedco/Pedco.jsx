import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './styles.js'

const Pedco = () => {
    const classes = useStyles()
    return (
        <div>
            <Typography align='center' variant='h3' className={classes.title}>
                PEDCO
            </Typography>
        </div>
    )
}

export default Pedco
