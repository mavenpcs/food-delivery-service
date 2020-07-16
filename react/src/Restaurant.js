import React from 'react';
import {withRouter} from "react-router";
import {Link} from "react-router-dom";

class Restaurant extends React.Component {
    render() {
        const { params } = this.props.match;
        return (
            <div>
                <h1>Restaurant page</h1>
                <p>{params.restaurant}</p>
                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default withRouter(Restaurant);