import React, { useState, useEffect } from 'react'


const AppPruebaSocket = () => {
    const [state, setState] = useState(null)
    /* const [noticias, setNoticias] = useState([])
    //  useEffect(()=>{
    //      const fetch = async () =>{
               let res = await getNoticias()
               setNoticias(let)
            }
    //      fetch()
    //  },[]) */ // entonces solo se llama cuando carga, mientras q lo actualizo con el EventSource
    const source = new EventSource('http://localhost:4000/events');
    console.log(source)

    const getRealtimeData = (data) => {
        setState(data)
    }

    useEffect(() => {
        console.log('effect')
        source.onmessage = e => getRealtimeData(JSON.parse(e.data))
    }, [source])

    return (
        <div>
            Hola
            {state}
        </div>
    )
}

export default AppPruebaSocket
