import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top" shadow-md>
        <Container>
        
          
           <Navbar.Brand>
              User App
           </Navbar.Brand>
            
         
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Portfolio</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header