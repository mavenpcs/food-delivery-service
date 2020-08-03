import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import logo from '../images/DelishLogo.png'


class HeaderBar extends React.Component {
    render() {
        return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src={logo}
                    width="80"
                    height="50"
                    className="d-inline-block align-top"
                />{' '}
                DelishDelivery
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Nav className="mr-auto">

                    <Nav.Link href="/cart">View Cart</Nav.Link>
                    
                </Nav>
        </Navbar>
        )
    }
}

export default HeaderBar;