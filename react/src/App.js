import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderBar from './components/HeaderBar';
import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Main from "./pages/Main";
import Restaurant from "./pages/Restaurant";
import SearchBar from "./components/SearchBar";
// import Login from "./pages/Login";
import Login from "./pages/Login"
import Register from "./pages/Register";

function App() {
    return (
        <div className="App">
            <HeaderBar/>
            <SearchBar/>
            <BrowserRouter >
                <Route exact path="/" component={Main}/>
                <Route path="/restaurants/:restaurant" component={Restaurant}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>

            </BrowserRouter>

        </div>
    );
}

export default App;
