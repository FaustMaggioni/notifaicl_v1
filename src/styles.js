import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({

    mainContainer: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        justifyItems: 'center',
    },
    root: {
        flexGrow: 1,
        paddingTop: 'auto',
        alignItems: 'center'
    },
    slogan: {
        fontFamily: 'monospace'
    },
    gridContainer: {
        alignContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
}))