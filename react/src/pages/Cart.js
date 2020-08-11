import React from 'react';
import {withRouter} from "react-router-dom";
import {Button} from "react-bootstrap";
import PriceDisplay from "../components/PriceDisplay";
import AuthService from "../services/auth.service";
import CartService from "../services/cart.service"


class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shoppingCart: JSON.parse(localStorage.getItem('shoppingCart')),
            subTotal: 0,
            isLoggedIn: false,
            isLoaded: false,
            user: 0
        }
        if (this.state.shoppingCart) {
            this.calculatePrice();
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
    }

    calculatePrice() {
        for (let i = 0; i < this.state.shoppingCart.length; i++) {
            this.state.subTotal += this.state.shoppingCart[i].price;
        }
    }

    checkOut() {
        CartService.checkOut(this.state.user, this.state.shoppingCart[0].restaurant_id, this.state.shoppingCart);
        alert("Your order is on its way!");
        this.props.history.push('/');
    }

    render() {
        const shoppingCart = this.state.shoppingCart;
        const subTotal = this.state.subTotal;
        let deliveryFee = 0;
        if (shoppingCart) {
            deliveryFee = JSON.parse(localStorage.getItem('restaurant')).deliveryfee;
        }
        return (
            <div>
                <h2 className="h2  ml-4 my-5 green">Your Shopping Cart</h2>
                {shoppingCart ? (
                    <div className="container mt-lg-5">
                        <div className="row">
                            <div className="col-lg   ">
                                <div className="container mx-auto my-lg-5">
                                    {shoppingCart.map((item, index) => (
                                        <div className="row">
                                            <div className="col">
                                                {item.name}
                                            </div>
                                            <div className="col">
                                                ${item.price.toFixed(2)}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <h3 className="green">Subtotal: ${subTotal.toFixed(2)}</h3>
                            </div>

                            <div className="col-sm ">
                                <div className="my-lg-5">
                                    <PriceDisplay subTotal={subTotal.toFixed(2)}
                                                  deliveryFee={deliveryFee.toFixed(2)}/>
                                    <Button className="btn btn-light roundedCorners" onClick={() => {
                                        this.checkOut()
                                    }}>Checkout</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : <p>Your cart seems to be empty!</p>}
            </div>
        )
    }
}

export default withRouter(Cart);