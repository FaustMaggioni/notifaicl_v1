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
        minWidth: '100%',
        paddingLeft: '0px',
        paddingRight: '0px',
        overflow: 'hidden'
    },
    title: {
        fontWeight: 300,
        color: 'black',
        fontStyle: "oblique",
        padding: '0em',
        margin: '0em',
        fontSize: '3em',
        textAlign: 'justify',

    },
    logoNav: {
        maxHeight: '1.5em',
        fontSize: '2em'
    },



})