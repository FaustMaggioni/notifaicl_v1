import React, { useState, useEffect } from 'react';
import { Typography, Container, Paper, AppBar, Box, Toolbar, Grid, Button, CardContent, CardActions, Card, responsiveFontSizes } from '@material-ui/core'
import Navbar from '../Navbar/Navbar'
import useStyles from './styles.js'
import Faiweb from '../Faiweb/Faiweb'
import Logo from '../Logo/Logo'

const Inicio = () => {
    const [prevNoticias, setPrevNoticias] = useState([])
    const classes = useStyles()

    return (
        <Container className={classes.mainContainer} style={{ minWidth: '100%' }, { minHeigth: '100%' }, { backgroundColor: 'transparent' }} >
            <Navbar />
            <div className={classes.root}>
                <Faiweb />
            </div>
        </Container >
    );

}

export default Inicio;