import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderBar from './components/HeaderBar';
import {Redirect, Route, useHistory} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Main from "./pages/Main";
import Restaurant from "./pages/Restaurant";
import SearchBar from "./components/SearchBar";
import UserService from "./services/user.service"
import Login from "./pages/Login"
import Register from "./pages/Register";
import OrderHistory from "./pages/OrderHistory";
import AuthService from "./services/auth.service"
import Spinner from "react-bootstrap/Spinner";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            isLoaded: false
        }
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();
        if (user) {
            console.log(user);
            this.setState({
                isLoggedIn: true,
                isLoaded: true
            });
        }
        else {
            this.setState({
                isLoggedIn: false,
                isLoaded: true
            });
        }
    }

    render() {

        return (
            <div className="App" align="center">
                <HeaderBar/>
                <SearchBar/>
                <BrowserRouter>
                    <Route exact path="/" component={Main}/>
                    <Route path="/restaurants/:restaurant" component={Restaurant}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/orderhistory" component={OrderHistory}/>
                    {!this.state.isLoggedIn && this.state.isLoaded ? (
                        <Redirect to="/login"/>
                    ) : (
                        <div></div>
                    )}
                </BrowserRouter>
            </div>

        );
    }
}

export default App;
