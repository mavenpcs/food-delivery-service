import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderBar from './components/HeaderBar';
import {Redirect, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Main from "./pages/Main";
import Restaurant from "./pages/Restaurant";
import SearchBar from "./components/SearchBar";
import UserService from "./services/user.service"
import Login from "./pages/Login"
import Register from "./pages/Register";
import OrderHistory from "./pages/OrderHistory";

function App() {
    // Test function to always return true, need to change when login implementation is complete
    const isLoggedIn = UserService.getTestBoard();

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
                {isLoggedIn ? (
                    <div></div>
                ) : (
                    <Redirect to="/login"/>
                )}
            </BrowserRouter>


        </div>
    );
}

export default App;
