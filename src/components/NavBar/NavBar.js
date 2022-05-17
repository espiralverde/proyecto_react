import React from 'react';
import './NavBar.css';
import { Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Link to ="/">SteelBit</Link>
            {/* <Navbar.Brand href="#home">SteelBit</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to ="/categoria/catalogo">Catálogo</Link>
                        <Link to ="/categoria/insumos" >Insumos</Link>
                        <NavDropdown title="Herramientas" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#Bateria">Batería</NavDropdown.Item>
                            <NavDropdown.Item href="#Electricas">Eléctricas</NavDropdown.Item>
                            <NavDropdown.Item href="#Neumaticas">Neumáticas</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#Manuales">Manuales</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {

                    }
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
        
        )
}
export default NavBar

