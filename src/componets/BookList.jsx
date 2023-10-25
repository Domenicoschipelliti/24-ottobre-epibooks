
import Libri from "../json/romance.json"

import { Row,Container,Card,Col, CardText } from "react-bootstrap";

// import SingleBook from "./SingleBook";



const BookList=()=>{
  
   return(
    <Container>
        <Row>
          {
            Libri.map(library=>{
               return(
                  <Col sm={12} md={6}  xl={2} key={library.asin}>
               <Card>
                <Card.Img variant="top" src={library.img} />
                  <Card.Body>
                   <Card.Title>{library.title}</Card.Title>
                    <CardText>{library.category}</CardText>
                    <CardText>{library.price} Euro</CardText>
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