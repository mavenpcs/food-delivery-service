import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Promotions from "../components/Promotions";
import List from "../components/List";

function Main() {
    return (
        <div className="container">
            <Promotions />
            <br/>
            <List/>
        </div>
    );
}

export default Main;
