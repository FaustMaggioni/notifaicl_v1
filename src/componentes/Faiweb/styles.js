import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    lista: {
        minWidth: '10rem',
        maxWidth: '20rem',
        backgroundColor: 'ligthgray',
        paddingLeft: '0px',
        paddingRight: '0px'

    },
    listItem: {
        minWidth: '100%',
        borderRadius: '15px',
        boxShadow: '3px',
        border: 'solid',
        borderBlockWidth: '1px',
        borderColor: '#DCDCEF'
    },
    actions: {
        backgroundColor: '#DCDCEF'
    },
    title: {
        fontWeight: 300,
        fontStyle: 'oblique',
        fontSize: '4vh'
    }

}
))