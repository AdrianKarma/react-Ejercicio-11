
import { Form, Card,Button, Image} from "react-bootstrap";
import defaultImage from "../img/404ZonaCode.png";
const CardNoticias = ({noticia}) => {
    return (
        <section className="mt-2 d-flex">
             <Card className="CardCita">
          <Card.Header><h1><Image src={noticia.image_url||defaultImage} className='imagenNoticia' /></h1>
          <Form.Label className="">{noticia.source_url} </Form.Label>
            
          </Card.Header>
         
      <Card.Body> 
      
      <Form.Group className="my-2 d-flex FormCuadro" controlId="origen">
       
      </Form.Group>
      <Form.Group className=" d-flex FormCuadro" controlId="Autor">
        
     
             
      </Form.Group>
      <Form.Group className=" d-flex FormCuadro" controlId="titulo">
        
        <Form.Label className="tituloNoticia">{noticia.title}</Form.Label>
             
      </Form.Group>
      <Form.Label className="ms-3">Escrito por: {noticia.creator || "anonimo"}</Form.Label>
       {/* Esta parte la comento, ya que se pide en el Práctico, pero queda mal esteticamente 
      <Form.Group className="m-3  FormCuadro2 " controlId="Descripcion">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control className="" as="textarea" rows={3} resize="none" placeholder={noticia.description} />       
      </Form.Group>
       */} 
      </Card.Body>
      <Card.Footer>  <Button variant="dark" href={noticia.link}  target="_blank">
          Ver noticia completa
        </Button></Card.Footer>
      </Card>
        </section>
      
    );
};

export default CardNoticias;