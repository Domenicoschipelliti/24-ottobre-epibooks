

import Libro from "../json/romance.json"
import { Row,Container,Card,Col } from "react-bootstrap";

import SingleBook from "./SingleBook";


const BookList=()=>{
  
   return(
    <Container>
        <Row>
           {
            Libro.map((library)=>{
               
                return(
                <Col  sm={12} md={6}  xl={2} key={library.asin}>
                    
                    <Card>
                      <Card.Img variant="top" src={library.img} />
                        
                       <Card.Body>
                         <Card.Title>{library.title}</Card.Title>
                         
                            <Card.Text>
                             {library.price} Euro
                            </Card.Text>
                            <Card.Text>
                             {library.category} 
                            </Card.Text>
                       </Card.Body>
                   </Card>
                   
                </Col>
                    
                )
            })
           }
        </Row>
        </Container>
   )  
}




export default BookList