import CardNoticias from "./CardNoticias";


const ListaNoticias = (props) => {
    return (
        <section className="Master">
        {
         props.noticias.map((item, posicion)=> <CardNoticias key={posicion} noticia={item} ></CardNoticias>)
        } 
     </section>
    );
};

export default ListaNoticias;