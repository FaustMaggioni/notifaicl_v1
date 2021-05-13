import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    titleContainer: {
        zIndex: '999',
        position: 'sticky',
        borderRadius: '10px',
        backgroundColor: 'white',
        minWidth: '100%',
    },
    toolbar: {
        alignContent: 'center',
        alignItems: 'center',
        minWidth: '100%',
        paddingLeft: '0px',
        paddingRight: '0px',
        overflow: 'hidden'
    },
    title: {
        fontWeight: 300,
        color: 'black',
        fontStyle: "oblique",
        padding: '0.2em',
        margin: '0.2em',
        fontSize: '5vw',
        textAlign: 'justify',

    },
    logoNav: {
        maxHeight: '2em',
        fontSize: '4vw'
    },



})