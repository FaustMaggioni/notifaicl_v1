import React, { useEffect, useState } from 'react'
import { Grid, List, ListItem, Typography, Button, Card, CardActions, CardContent, ListItemText } from '@material-ui/core'
import { getNoticias } from '../../actions/getNoticias';
import useStyles from './styles'
const Faiweb = () => {
    const classes = useStyles()
    const [noticias, setNoticias] = useState(null)
    const source = new EventSource('http://localhost:5000/fai/events');

    useEffect(() => {
        fetchAndSetNoticias()
    }, [])

    useEffect(() => {
        console.log('effect')
        source.onmessage = e => getRealtimeData(e.data)
    }, [source])

    const getRealtimeData = (data) => {
        console.log('data', data)
        // let dataParsed = JSON.parse(data)
        // console.log('Parsed data: ', dataParsed)
        setNoticias([...data])
        console.log(noticias)
    }
    const fetchAndSetNoticias = async () => {
        console.log('fetch and set')
        try {
            const res = await getNoticias()
            setNoticias(res)
        } catch (error) {
            console.log('ERROR')
            console.log('Noticias: ', noticias)
        }
    }

    return (
        <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
            <Grid item >
                <List className={classes.lista} component="nav" aria-label="secondary mailbox folders">
                    <ListItem>
                        <ListItemText>
                            <Typography className={classes.title} variant='h6'> FAIWEB  </Typography>
                        </ListItemText>
                    </ListItem>
                    {noticias ? (<Listado noticias={noticias} classes={classes} />) : (<Typography> Nada nuevo en la faiweb </Typography>)}
                </List>
            </Grid>
        </Grid>
    )
}

const Listado = ({ noticias, classes }) => {
    return (
        <div>
            {noticias.reverse().map((noticia, i) => {
                let esNuevo = noticia.new
                let fondo = '#DCDCEF'
                if (esNuevo) {
                    fondo = 'yellow'
                }
                return (
                    <ListItem >
                        <Card className={classes.listItem}>
                            <CardContent >
                                <Typography>{noticia.title}, {i}</Typography>
                            </CardContent>
                            <CardActions className={classes.actions} style={{ backgroundColor: fondo }}>
                                <Button>
                                    <a href={noticia.link} target='_blank'> Ver en faiweb </a>
                                </Button>
                            </CardActions>
                        </Card>
                    </ListItem>
                )
            })
            }
        </div>
    )

}

export default Faiweb
