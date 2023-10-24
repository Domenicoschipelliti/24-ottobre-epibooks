
import Libri from "../json/fantasy.json"


import {Container,Row,Col,Card,Button} from 'react-bootstrap'


const AllTheBooks=()=>{
    
    return(
        
    <Container >
    <Row>
    
     {Libri.map((books)=>{
          return(
         
        <Col sm={12} md={6}  xl={2} key={books.asin}>
       
        <Card>
          <Card.Img   variant="top" src={books.img} />
             <Card.Body>
               <Card.Title>{books.title}</Card.Title>
                <Card.Text>{books.category}</Card.Text>
                 <Card.Text>{books.price} Euro</Card.Text>
                 <Button variant="success">Ordina</Button>
           
             </Card.Body>
        </Card>
       </Col>
      
      
          )
       })}
     
      
     
   </Row>
 </Container>
        
    )
}

export default AllTheBooks