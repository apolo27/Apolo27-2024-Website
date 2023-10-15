import React from 'react'
import logo from '../../imgs/logo.png'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap/';
import './Header.css'

function Header(){
  return(
    <div>
      <Navbar className='titulo' bg="dark" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand><img src={logo} width={75} alt='logo' />{' '}Apolo 27</Navbar.Brand>
        <div className='links'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/About-Us">About Us</Nav.Link>
              <Nav.Link href="/Data-Dashboard">Data Dashboard</Nav.Link>
              <Nav.Link href="/Sponsors">Sponsors</Nav.Link>
              <Nav.Link href="/Social-Media">Social Media</Nav.Link>
              <Nav.Link href="/Stem-With-Us">Stem with us</Nav.Link>

              <NavDropdown id="basic-nav-dropdown">
                <NavDropdown.Item href="/">Home</NavDropdown.Item>
                <NavDropdown.Item href="/About-Us">About Us</NavDropdown.Item>
                <NavDropdown.Item href="/Data-Dashboard">Data Dashboard</NavDropdown.Item>
                <NavDropdown.Item href="/Sponsors">Sponsors</NavDropdown.Item>
                <NavDropdown.Item href="/Social-Media">Social Media</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
      </Navbar>
    </div>
  )
}

export default Header;