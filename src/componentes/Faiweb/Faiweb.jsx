import React, { useEffect, useState, useMemo } from 'react'
import { Grid, List, ListItem, Typography, Button, Card, CardActions, CardContent, ListItemText, Container } from '@material-ui/core'
import { getNoticias, getTrabajos, getPasantias } from '../../actions/faiweb';
import useStyles from './styles'
import Lista from './Listas/Lista'

const Faiweb = () => {
    const setEventSource = (source) => {
        return new EventSource(source)
    }

    const classes = useStyles()
    const [noticias, setNoticias] = useState(null)
    const [trabajos, setTrabajos] = useState(null)
    const [pasantias, setPasantias] = useState(null)
    const source = useMemo(() => setEventSource('http://localhost:5000/fai/events'), [])
    const sourceJobs = useMemo(() => setEventSource('http://localhost:5000/fai/trabajos/update'), [])
    const sourcePasantias = useMemo(() => setEventSource('http://localhost:5000/fai/pasantias/update'), [])
    const [listening, setListen] = useState(false)
    const [listenJobs, setListenJobs] = useState(false)
    const [listenPasantias, setListenPasantias] = useState(false)

    useEffect(() => {
        fetchAndSetNoticias()
        fetchAndSetTrabajos()
        fetchAndSetPasantias()
    }, [])

    useEffect(() => {
        if (!listening) {
            setListen(true)
            source.onmessage = (event) => {
                getRealtimeNoticias(event)
            }
        }
    }, [listening, source])

    useEffect(() => {
        if (!listenJobs) {
            setListenJobs(true)
            sourceJobs.onmessage = (event) => {
                getRealtimeJobs(event)
            }
        }
    }, [listenJobs, sourceJobs])

    useEffect(() => {
        if (!listenPasantias) {
            setListenPasantias(true)
            sourcePasantias.onmessage = (event) => {
                getRealtimePasantias(event)
            }
        }
    }, [listenPasantias, sourcePasantias])

    const getRealtimeNoticias = (event) => {
        const parsedData = JSON.parse(event.data);
        try {
            setNoticias([...parsedData])
        }
        catch (error) {
            console.log(error)
        }
        setListen(false)
    }
    const getRealtimeJobs = (event) => {
        const parsedData = JSON.parse(event.data);
        try {
            setTrabajos([...parsedData])
        }
        catch (error) {
            console.log(error)
        }
        setListenJobs(false)
    }

    const getRealtimePasantias = (event) => {
        const parsedData = JSON.parse(event.data);
        try {
            setPasantias([...parsedData])
        }
        catch (error) {
            console.log(error)
        }
        setListenPasantias(false)
    }

    const fetchAndSetNoticias = async () => {
        try {
            const res = await getNoticias()
            setNoticias(res)
        } catch (error) {
            console.log('ERROR: ', error)
        }
    }

    const fetchAndSetTrabajos = async () => {
        try {
            const res = await getTrabajos()
            setTrabajos(res)
        } catch (error) {
            console.log('ERROR: ', error)
        }
    }

    const fetchAndSetPasantias = async () => {
        try {
            const res = await getPasantias()
            setPasantias(res)
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
                    <Lista classes={classes} noticias={trabajos} nombre={'Bolsa de trabajo'}></Lista>
                    <Lista classes={classes} noticias={pasantias} nombre={'Pasantías'}></Lista>
                </Grid>
            </main>
        </Container>
    )
}

export default Faiweb
