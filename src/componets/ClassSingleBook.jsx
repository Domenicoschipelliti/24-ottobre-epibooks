

import { Component } from "react";
import {Container,Row,Card,Col, CardText} from "react-bootstrap"
import Carta from "../json/horror.json"


class ClassSingleBook extends Component{
    selected=false
    render(){
        return(
          <Container>
            <Row>
                {
                    Carta.map(row=>{
                        this.selected=true
                        
                        return(
                     <Col sm={12} md={6}  xl={2} key={row.asin}>
                        <Card>
                         <Card.Img variant="top" src={row.img} />
                      
                         <Card.Body>
                           <Card.Title>{row.title}</Card.Title>
                             <CardText>{row.category}</CardText>
                             <CardText>{row.price}</CardText>
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

}

export default ClassSingleBook