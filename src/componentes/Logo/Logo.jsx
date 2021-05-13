import React from 'react'
import { Grid } from '@material-ui/core'
import logo from '../../imagenes/logocontxt.svg'

const Logo = () => {
    return (
        <Grid container>
            <Grid item>
                <img src={logo} alt='Logo' />
            </Grid>
        </Grid>
    )
}

export default Logo
