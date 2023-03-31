// this react-bootstrap link
import {Container,Nav,Navbar,Button } from 'react-bootstrap';

function Top() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
          <Nav className='ms-auto'>
            <Button variant="outline-light" href="#singup" >Sign Up</Button>
            <Button variant="outline-light" href="#login">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Top;