import React from 'react';
import {Navbar} from "react-bootstrap";
import logo from '../images/DelishLogo.png'
import AuthService from '../services/auth.service'
import Button from "react-bootstrap/Button";

class HeaderBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectLink: false,
            isCustomer: false
        }
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();
        if (user) {
            if (user.roles == "ROLE_VENDOR") {
                this.setState({
                    isCustomer: false
                })
            } else {
                this.setState({
                    isCustomer: true
                })
            }
        }
    }

    logOut() {
        AuthService.logout();
        window.location.reload();
    }


    render() {
        return (
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={logo}
                        width="160"
                        height="100"
                        className="d-inline-block"
                    />
                    <span className="logoText">
                        <span className="green">Delish</span>
                        <span className="brown">Delivery</span>
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                {this.props.user.user.firstname ? (
                    <span className="navbar-nav ml-auto">
                        <div className="navbar-text mr-sm-2">
                            {this.props.user.user.firstname}
                        </div>
                        {this.state.isCustomer ? (<span>
                                                    <Button className="btn btn-light roundedCorners my-2 my-sm-0"
                                                            href="/cart">Cart</Button>
                        <Button className="btn btn-light roundedCorners my-2 my-sm-0"
                                href="/orderhistory">Past Orders</Button>
                        </span>) : (null)}
                        <Button className="btn btn-light roundedCorners my-2 my-sm-0" onClick={() => {
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