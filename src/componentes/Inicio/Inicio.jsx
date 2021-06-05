import React from 'react';
import { CssBaseline, Container } from '@material-ui/core'
import Navbar from '../Navbar/Navbar'
import useStyles from './styles.js'
import Faiweb from '../Faiweb/Faiweb'
import Pedco from '../Pedco/Pedco'

const Inicio = () => {
    const classes = useStyles()

    return (
        <div>
            <CssBaseline />
            <Container className={classes.mainContainer} >
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