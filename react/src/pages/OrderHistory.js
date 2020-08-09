import React from 'react';
import UserService from "../services/user.service";
import ReviewService from "../services/review.service";
import AuthService from "../services/auth.service";
import Orders from "../components/Order";
import { withRouter } from "react-router";
import { CardColumns  } from "react-bootstrap";

class OrderHistory extends React.Component {
    constructor(props) {
        super(props);
        this.submitReview = this.submitReview.bind(this);
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

    handleModal(item) {
        this.setState({ show: !this.state.show })
        // Clear changes to ratings.
        this.setState({ restaurant_id: item.restaurant_id })
        console.log(this.state.restaurant_id)
        this.setState({ rating: 0 })
        this.setState({ comment: '' })
    }

    closeModal() {
        this.setState({ show: !this.state.show })
        this.setState({ rating: 0 })
        this.setState({ comment: '' })
    }

    changeRating = (newRating, name) => {
        this.setState({ rating: newRating });
    }
    onChangeComment = (e) => {
        this.setState({
            comment: e.target.value
        });
    }

    submitReview(item) {
        ReviewService.addReview(this.state.restaurant_id, this.state.rating, this.state.comment).then(
            response => {
                console.log(response);
            },
            error => {
                console.log(error);
            }
        );
        alert("Thank you for sharing your experience!")
        this.closeModal(item);
    }

    render() {
        const orders = this.state.orders;
        return (
            <div>
                <h1 className="h2  ml-4 my-5 green">Your Previous Orders</h1>
                {orders ? (
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