import * as api from '../api/index.js'

export const getNoticias = async () => {
    console.log('GET Noticias')
    console.log(api.fetchNoticias)
    try {
        const res = await api.fetchNoticias();
        return res.data
    } catch (error) {
        console.log('FETCH NOTICIAS ERROR: ', error);
    }
}

export const getPasantias = async () => {
    try {
        const res = await api.fetchPasantias();
        return res.data
    } catch (error) {
        console.log('FETCH PASANTÍAS ERROR: ', error);
    }
}
export const getTrabajos = async () => {
    console.log('GET Trabajos')
    try {
        const res = await api.fetchTrabajos();
        return res.data
    } catch (error) {
        console.log('FETCH TRABAJOS ERROR: ', error);
    }
}