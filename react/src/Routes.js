import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from "./Main";
import Restaurant from "./Restaurant";
import App from "./App";

const createRoutes = () => (
    <Router>
        <Route exact path="/" component={App}/>
        <Route path="/restaurants/:restaurant" component={Restaurant}/>

    </Router>
);

export default createRoutes;