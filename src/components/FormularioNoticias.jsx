import { Form } from "react-bootstrap";
import { useEffect, useState } from 'react'
import ListaNoticias from './ListaNoticias';



const FormularioNoticias = () => {
    const apiKey = "pub_363241281d1aac4e63ea34d1f2c239bbb99df"
    const [noticias, setNoticias] =useState ([])
    const [categoria, setCategoria] = useState("food");

useEffect(()=>{
    consultarAPI();
    
    },[categoria]);
    
    const consultarAPI = async()=>{
    const respuesta = await fetch(`https://newsdata.io/api/1/news?apikey=${apiKey}&language=es&category=${categoria} `)
    //pub_363241281d1aac4e63ea34d1f2c239bbb99df
    //pub_374711e79b54a5d8e28ce262a2ae770ff0fea
    //pub_37483ff3d4d2ec0c099a81f2f3715e4f4d1b0
    const datos = await respuesta.json()
    console.log(datos)
    setNoticias(datos.results)
    }
    const handleChange = (e) => {
        setCategoria(e.target.value);
      };
    return (
        <div>
            <section>
            <h1 className='bg-body-secondary m-4 p-4'>Buscar por categorias
            <Form.Select onChange={handleChange} aria-label="Default select example" value={categoria}>
     
        <option >Elgige una categoria</option>
       <option value="business">Negocios</option>
       <option value="crime">Crimen</option>
       <option value="food">Comida</option>
       <option value="technology">Tecnologia</option>
       <option value="politics">Politica</option>
       <option value="sports">Deportes</option>
     </Form.Select>
     </h1>
      </section>

            <ListaNoticias noticias={noticias}></ListaNoticias>
        </div>
    );
};

export default FormularioNoticias;