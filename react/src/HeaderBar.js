import React from 'react';
import {Navbar} from "react-bootstrap";
import logo from './images/logo.svg'


class HeaderBar extends React.Component {
    render() {
        return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={logo}
                    width="100"
                    height="50"
                    className="d-inline-block align-top"
                />{' '}
                CMPT 470 Group 5 - Insert Website Name Here
            </Navbar.Brand>
        </Navbar>
        )
    }
}

export default HeaderBar;