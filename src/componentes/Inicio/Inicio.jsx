import React, { useState, useEffect } from 'react';
import { Typography, CssBaseline, Container, Paper, AppBar, Box, Toolbar, Grid, Button, CardContent, CardActions, Card, responsiveFontSizes } from '@material-ui/core'
import Navbar from '../Navbar/Navbar'
import useStyles from './styles.js'
import Faiweb from '../Faiweb/Faiweb'
import Pedco from '../Pedco/Pedco'

const Inicio = () => {
    const [prevNoticias, setPrevNoticias] = useState([])
    const classes = useStyles()

    return (
        <div>
            <CssBaseline />
            <Container className={classes.mainContainer} style={{ minWidth: '100%' }, { minHeigth: '100%' }, { backgroundColor: 'transparent' }} >
                <Navbar />
                <div className={classes.root}>
                    <div id='faiweb'>
                        <Faiweb />
                    </div>
                    <div id='pedco'>
                        <Pedco />
                    </div>
                </div>
            </Container >
        </div>
    );

}

export default Inicio;