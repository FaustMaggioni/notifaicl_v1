import React, { useEffect, useState } from 'react'
import { Grid, List, ListItem, Typography, Button, Card, CardActions, CardContent, ListItemText, Container } from '@material-ui/core'
import { getNoticias } from '../../actions/getNoticias';
import useStyles from './styles'
import Lista from './Listas/Lista'

const Faiweb = () => {
    const classes = useStyles()
    const [noticias, setNoticias] = useState(null)
    const source = new EventSource('http://localhost:5000/fai/events');
    const [listening, setListen] = useState(false)

    useEffect(() => {
        fetchAndSetNoticias()
    }, [])

    useEffect(() => {
        if (!listening) {
            setListen(true)
            source.onmessage = (event) => {
                getRealtimeData(event)
            }
        }
    }, [listening, source])

    const getRealtimeData = (event) => {
        const parsedData = JSON.parse(event.data);
        try {
            setNoticias([...parsedData])
        }
        catch (error) {
            console.log(error)
        }
        setListen(false)
    }
    const fetchAndSetNoticias = async () => {
        try {
            const res = await getNoticias()
            setNoticias(res)
        } catch (error) {
            console.log('ERROR: ', error)
        }
    }

    return (
        <Container>
            <Typography align='center' className={classes.big}> FAIWEB </Typography>
            <main className={classes.gridContainer}>
                <Grid container justify='space-around' spacing={3}>
                    <Lista classes={classes} noticias={noticias} nombre={'Novedades'}></Lista>
                    <Lista classes={classes} noticias={noticias} nombre={'Bolsa de trabajo'}></Lista>
                    <Lista classes={classes} noticias={noticias} nombre={'Pasantías'}></Lista>
                </Grid>
            </main>
        </Container>
    )
}

export default Faiweb
