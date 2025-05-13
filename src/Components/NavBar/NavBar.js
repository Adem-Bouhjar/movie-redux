import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Movies</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default NavBar