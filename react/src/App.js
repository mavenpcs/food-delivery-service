import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderBar from './components/HeaderBar';
import {Redirect, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Main from "./pages/Main";
import Restaurant from "./pages/Restaurant";
import Login from "./pages/Login"
import Register from "./pages/Register";
import OrderHistory from "./pages/OrderHistory";
import AuthService from "./services/auth.service"
import MyMenu from "./pages/MyMenu";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            isLoaded: false,
            user: "",
            isVendor: false
        }
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();
        if (user) {
            this.setState({
                isLoggedIn: true,
                isLoaded: true,
                user: user
            });
            if (user.roles == "ROLE_VENDOR") {
                this.setState({
                    isVendor: true
                })
            }
        } else {
            this.setState({
                isLoggedIn: false,
                isLoaded: true
            });
        }
    }

    render() {
        const user = this.state
        return (
            <div className="App" align="center">
                <HeaderBar user={user}/>
                <BrowserRouter>
                    <Route exact path="/" component={Main}/>
                    <Route path="/restaurants/:restaurant" component={Restaurant}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/orderhistory" component={OrderHistory}/>
                    <Route exact path="/myMenu" component={MyMenu}/>
                    {!this.state.isLoggedIn && this.state.isLoaded ? (
                        <Redirect to="/login"/>
                    ) : (
                        <div>
                            {this.state.isVendor ? (
                                <Redirect to={"/myMenu"}/>
                            ) : (
                                <Redirect to={"/"}/>
                            )}

                        </div>
                    )}
                </BrowserRouter>
            </div>

        );
    }
}

export default App;
