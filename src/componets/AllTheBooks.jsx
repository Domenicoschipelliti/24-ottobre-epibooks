
import Libri from "../json"
import {Container,Row,Col,Card} from 'react-bootstrap'


const AllTheBooks=()=>{
    
    return(
        <div>
    <Container>
       <Row>
        <Col  md={6}xl={4} >
        <Card>
         <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
             <Card.Title>Card Title</Card.Title>
              <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
             </Card.Text>
            </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
        </div>
    )
}

export default AllTheBooks