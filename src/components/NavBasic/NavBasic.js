import { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import './NavBasic.scss'

export const NavBasic = () => {
    const [active, setActive] = useState('default');
    const handleActive = (selectedKey) => {
        setActive(selectedKey)
    }

    return (
            <Navbar variant="dark" expand="lg" sticky="top" className='navbar'>
                <Container>
                    <Navbar.Brand as={ Link } to={"/"}>
                        <img src='../assets/logo/icon.png' alt="Logo MateAR" className="navbar__img"/>
                        Mate<span className="navbar__span">AR</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="navbar__collapse">
                        <Nav className="me-auto navbar__items" activeKey={active} onSelect={handleActive}>
                            <Nav.Link as={ Link } to={"/Inicio"} eventKey="Inicio">
                                Inicio
                            </Nav.Link>
                            <Nav.Link as={ Link } to={"/Nosotros"} eventKey="Nosotros">
                                Nosotros
                            </Nav.Link>
                            <NavDropdown title="Productos" id="basic-nav-dropdown" onSelect={handleActive} >
                                <NavDropdown.Item as={ Link } to={"/category/mates"}>
                                    Mates
                                </NavDropdown.Item>
                                <NavDropdown.Item as={ Link } to={"/category/termos"}>
                                    Termos
                                </NavDropdown.Item>
                                <NavDropdown.Item as={ Link } to={"/category/set"}>
                                    Set Matero
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={ Link } to={"/Productos"}>
                                    Todos los productos
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    <CartWidget/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}
