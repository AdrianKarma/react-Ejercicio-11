import { useEffect, useState } from 'react'
import ListaNoticias from './ListaNoticias';



const FormularioNoticias = () => {
    const [noticias, setNoticias] =useState ([])
useEffect(()=>{
    consultarAPI();
    
    },[]);
    
    const consultarAPI = async()=>{
    const respuesta = await fetch("https://newsdata.io/api/1/news?apikey=pub_363241281d1aac4e63ea34d1f2c239bbb99df&language=es ")
    const datos = await respuesta.json()
    console.log(datos)
    setNoticias(datos.results)
    }
    
    return (
        <div>
            <h1>form</h1>
            <ListaNoticias noticias={noticias}></ListaNoticias>
        </div>
    );
};

export default FormularioNoticias;