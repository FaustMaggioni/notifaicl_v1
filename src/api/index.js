const baseURL = 'https://notifai-server.vercel.app/'

export const fetchNoticias = async () => {
    try {
        const url = `${baseURL}/fai`
        const response = await fetch(url)
        let data = response.json()
        return data
    } catch (error) {
        console.log(error.json())
    }
}

export const fetchPasantias = async () => {
    try {
        const url = `${baseURL}/fai/pasantias`
        const response = await fetch(url)
        let data = response.json()
        return data
    } catch (error) {
        console.log(error.json())
    }
}

export const fetchTrabajos = async () => {
    try {
        const url = `${baseURL}/fai/trabajos`
        const response = await fetch(url)
        let data = response.json()
        return data
    } catch (error) {
        console.log(error.json())
    }
}

