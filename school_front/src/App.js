
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Nav,NavDropdown, Row,Carousel} from 'react-bootstrap';


const caps=[{head:"education", body:"come to school",img:"Child.jpg"},
            {head:"education", body:"come to school",img:"Kid-using-a-computer.jpg"},
            {head:"education", body:"come to school",img:"kids-computers.jpeg"}]

const Menubar =()=>{
  return(

    <Navbar bg='dark' variant='dark' expand="xl" >
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
           </NavDropdown>
         </Nav>
         <Nav>
            <Nav.Link eventKey={2} href="#memes">
              logIn/Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
   
  );
}

const Slides =()=>{
  return(
    <Carousel fade variant="light">
      {caps.map((cap,index)=>{
        return(
        <Carousel.Item key={index} style={{'height':"600px",'width':"100%" , 'background-color': 'black'}}>
          <img style={{'object-fit':" contain",'opacity': 0.5}}
            className="d-block w-100"
             src={`assets/images/${cap.img}`}
            alt={`${index} slide`}
          />
            <Carousel.Caption>
              <h5>{cap.head}</h5>
             <p>{cap.body}</p>
            </Carousel.Caption>
        </Carousel.Item>
        )
      }
      )
    }
    </Carousel>
    
  
  );

}

function App() {
  return (
    <Container className="App" bg='dark'>
      
        <Row>
          <Menubar/>
        </Row>
        <Row>
          <Slides/>
        </Row>
        <Row>
         
        </Row>
      </Container>
  );
}

export default App;
