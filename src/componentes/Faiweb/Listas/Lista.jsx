import React from 'react'
import { Grid, List, ListItem, Typography, Button, Card, CardActions, CardContent, ListItemText, Container } from '@material-ui/core'

const Lista = ({ classes, noticias, nombre }) => {
    return (
        <Grid item xs={9}
            sm={3}
            md={3}
            lg={3}
            className={classes.noticias} >
            <List className={classes.lista} component="nav" aria-label="secondary mailbox folders">
                <ListItem>
                    <ListItemText>
                        <Typography align='center' className={classes.title} variant='h6'> {nombre} </Typography>
                    </ListItemText>
                </ListItem>
                {noticias ? (<Listado noticias={noticias} classes={classes} />) : (<Typography> Nada nuevo en la faiweb </Typography>)}
            </List>
        </Grid>
    )
}
const Listado = ({ noticias, classes }) => {
    return (
        <div>
            {noticias.reverse().map((noticia) => {
                let esNuevo = noticia.new
                let fondo = '#DCDCEF'
                if (esNuevo) {
                    fondo = 'yellow'
                }

                let clave = Math.random().toString(36).substring(7)
                return (
                    <ListItem key={clave}>
                        <Card className={classes.listItem}>
                            <CardContent >
                                <Typography>{noticia.title}</Typography>
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

export default Lista
