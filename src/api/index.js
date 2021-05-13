const baseURL = 'http://localhost:5000'

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

