import React from 'react'
import { Nav, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'



export default function Header(){
    return(
        <Navbar bg="dark" expanded="lg">
            <Navbar.Brand>
                <Nav.Link href="/">
                Code fancy
                </Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">fancy</Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
                <Nav.Link href="/about" className="text-white">About</Nav.Link>
                <Nav.Link href="/post" className="text-white">Posts</Nav.Link>
                <Nav.Link href="/project" className="text-white">Project</Nav.Link>
                <Nav.Link href="/login" className="text-white">Login</Nav.Link>
                <Nav.Link href="/signup" className="text-white">Signup</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}