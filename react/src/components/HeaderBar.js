import React from 'react';
import {Navbar} from "react-bootstrap";
import logo from '../images/logo.svg'
import AuthService from '../services/auth.service'
import Button from "react-bootstrap/Button";


class HeaderBar extends React.Component {
    logOut() {
        AuthService.logout();
        console.log("logging out");
        window.location.reload();
    }

    render() {
        console.log(this.props.user.user.firstname)
        return (
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={logo}
                        width="100"
                        height="50"
                        className="d-inline-block align-top"
                    />{' '}
                    CMPT 470 Group 5 - Insert Website Name Here
                </Navbar.Brand>
                {this.props.user.user.firstname ? (
                    <span className="navbar-nav ml-auto">
                        <div className="navbar-text mr-sm-2">
                            First Name
                        </div>
                        <Button class="btn btn-outline-success my-2 my-sm-0" onClick={() => {
                            this.logOut()
                        }}>
                                Log Out
                        </Button>
                    </span>
                ) : null}
            </Navbar>
        )
    }
}

export default HeaderBar;