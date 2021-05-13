import React, { useState } from 'react'
import useStyles from './styles'
import logosintxt from '../../imagenes/logosintxt.svg'
import DrawerLeft from '../Drawer/Drawer.jsx'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Navbar = () => {
    const [page, setPage] = useState('')
    const classes = useStyles()

    return (
        <AppBar className={classes.titleContainer}>
            <Toolbar className={classes.toolbar}>
                <DrawerLeft setPage={setPage}></DrawerLeft>
                <Typography textAlign="center" m={1} className={classes.title} variant="h1" > NOTIFAI </Typography>
                <img className={classes.logoNav} src={logosintxt} />
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
