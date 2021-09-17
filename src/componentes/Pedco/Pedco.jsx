import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './styles.js'
import './pedco.css'

const Pedco = () => {
    const classes = useStyles()
    return (
        <div className='pedco'> 
            <Typography align='center' variant='h3' className={classes.title}>
                PEDCO
            </Typography>
        </div>
    )
}

export default Pedco
