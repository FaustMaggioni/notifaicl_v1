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