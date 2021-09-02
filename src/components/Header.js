import React from 'react'
import {Nav,Navbar,NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './style.module.css'






export default function Header(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{zIndex:"999",position:"fixed",width:"100%"}}>
          <Navbar.Brand href="/">Code|Fancy</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/post">Posts</Nav.Link>
              <NavDropdown title="Projects" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/personal">Personal</NavDropdown.Item>
                <NavDropdown.Item href="/school">School ~ Uni.</NavDropdown.Item>
                <NavDropdown.Item href="/business">Business</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/advanced">Advanced</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link  id={styles.signupBtn} style={{}} eventKey={2} href="/signup">
                  Sign up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}