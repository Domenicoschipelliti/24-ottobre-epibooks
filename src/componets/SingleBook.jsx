

import book from "../json/romance.json"
import {Card,Container,Row,Col} from "react-bootstrap"

const SingleBook=(prop)=>{
   prop=book[2]
  return(
      <div>
      <Container>
         <Row>
            <Col sm={12} md={6}  xl={2} key={prop.asin}>
               <Card>
                <Card.Img variant="top" src={prop.img} />
                  <Card.Body>
                   <Card.Title>{prop.title}</Card.Title>
                  
                  </Card.Body>
               </Card>
                            
            </Col> 
                    
         </Row>
      </Container>
      </div>
     )
   }

export default SingleBook