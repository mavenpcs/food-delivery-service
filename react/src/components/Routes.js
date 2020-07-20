import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Restaurant from "../pages/Restaurant";
import Main from "../pages/Main";

const createRoutes = () => (
    <Router>
        <Route exact path="/" component={Main}/>
        <Route path="/restaurants/:restaurant" component={Restaurant}/>

    </Router>
);

export default createRoutes;