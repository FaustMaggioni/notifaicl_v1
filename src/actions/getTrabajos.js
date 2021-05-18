import * as api from '../api/index.js'

export const getTrabajos = async () => {
    console.log('GET Trabajos')
    try {
        const res = await api.fetchTrabajos();
        return res.data
    } catch (error) {
        console.log('FETCH TRABAJOS ERROR: ', error);
    }
}