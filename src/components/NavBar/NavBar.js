import React from 'react';
import './NavBar.css';
import { Container, Nav, Navbar} from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
            <Container>
            <Link to ="/">
                <img className='logoNav' src='./img/Hamilton.png' size='1x' alt='foto logo'></img>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to = "/categ/insumos" className='menuNavItem'>Insumos</NavLink>
                            <NavLink to = "/categ/bateria" className='menuNavItem'>Batería</NavLink>
                            <NavLink to = "/categ/electrica" className='menuNavItem'>Eléctrica</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
        )
}
export default NavBar

