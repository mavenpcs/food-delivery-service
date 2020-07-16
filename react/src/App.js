import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Row, Col} from "react-bootstrap";
import HeaderBar from './HeaderBar';
import SearchBar from "./SearchBar";
import Promotions from "./Promotions";

import List from "./List"
import {Router, Route, Switch, withRouter} from "react-router";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <HeaderBar/>
            <SearchBar/>
            <Promotions/>
            <List/>

        </div>
    );
}

export default App;
