

import {Container  ,Navbar,Nav } from "react-bootstrap"


const Barriera=()=>{
    return(
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container className="ms-0">
        <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Barriera