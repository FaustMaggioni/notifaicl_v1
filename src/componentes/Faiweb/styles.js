import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    lista: {
        backgroundColor: 'ligthgray',
    },
    listItem: {
        minWidth: '100%',
        borderRadius: '15px',
        boxShadow: '3px',
        border: 'solid',
        borderBlockWidth: '1px',
        borderColor: '#DCDCEF'
    },
    title: {
        fontWeight: 300,
        fontSize: '1.5em'
    },
    big: {
        fontWeight: 200,
        fontSize: '3.5em',
        position: 'relative',
    },
    gridContainer: {
        flexGrow: 1,
        paddingTop: '0.5rem',
        borderRadius: '10px',
        backgroundColor: 'white',
    },

}
))