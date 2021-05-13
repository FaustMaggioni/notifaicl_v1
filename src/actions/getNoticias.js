import * as api from '../api/index.js'

export const getNoticias = async () => {
    console.log('GET Noticias')
    console.log(api.fetchNoticias)
    try {
        const data = await api.fetchNoticias();
        console.log('DATA: ', data)
        return data
    } catch (error) {
        console.log('FETCH NOTICIAS ERROR: ', error);
    }
}