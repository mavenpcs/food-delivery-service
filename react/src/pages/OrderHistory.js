import React from 'react';
import UserService from "../services/user.service";
import AuthService from "../services/auth.service";
import Orders from "../components/Order";
import { withRouter } from "react-router";
import { CardColumns  } from "react-bootstrap";

class OrderHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            rating: 3,
            comments: '',
            restaurant_id: 0,
            orders: [],
            isLoggedIn: false,
            isLoaded: false,
            user: 0
            //lastOrder: []
        }
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();
        if (user) {
            this.setState({
                isLoggedIn: true,
                isLoaded: true,
                user: user.id
            });
        }
        else {
            this.setState({
                isLoggedIn: false,
                isLoaded: true
            });
        }
        console.log(user);

        UserService.getOrders(user.id).then(
            response => {
                console.log(response);
                this.setState({
                    orders: JSON.parse(response.request.response)
                })
            }
        ).catch(
            error => {
                console.log(error);
            }
        )
    }

    render() {
        const orders = this.state.orders;
        console.log(this.state.orders);
        console.log(orders);
        console.log(orders.length);
        return (
            <div>
                <h1 className="h2  ml-4 my-5 green">Your Previous Orders</h1>
                {orders.length > 0 ? (
                    <div className="container mt-lg-5">
                        <CardColumns>
                            {this.state.orders.map((item, index) => (
                                <Orders order={item} />
                            ))}
                        </CardColumns>
                    </div>
                ) : <p>It's empty in here, go out and try a new dish!</p>}
            </div>
        )
    }
}

export default withRouter(OrderHistory);