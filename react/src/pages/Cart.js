import React from 'react';
import {withRouter} from "react-router";
import {Button} from "react-bootstrap";
import PriceDisplay from "../components/PriceDisplay";


class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shoppingCart: this.props.shoppingCart,
            subTotal: 0
        }
        this.calculatePrice();
        console.log(this.props.restaurant);
    }

    componentDidMount() {
        console.log(this.state)
    }

    calculatePrice() {
        for (let i = 0; i < this.state.shoppingCart.length; i++) {
            this.state.subTotal += this.state.shoppingCart[i].price;
            console.log(this.state.subTotal);
        }
    }

    render() {
        console.log(this.state.shoppingCart);
        const shoppingCart = this.state.shoppingCart;
        const subTotal = this.state.subTotal;
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
                                                {item.price}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <h3 className="green">Subtotal: {subTotal.toFixed(2)}</h3>
                            </div>

                            <div className="col-sm ">
                                <div className="my-lg-5">
                                    <PriceDisplay subTotal={subTotal.toFixed(2)}
                                                  deliveryFee={this.props.restaurant.deliveryFee}/>
                                    <Button className="btn btn-light roundedCorners">Checkout</Button>
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