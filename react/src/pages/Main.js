import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Promotions from "../components/Promotions";
import List from "../components/List"

const list = [
    {
        id: 'McDonalds',
        name: "McDonald's",
        address: '1111 Fries Street',
        rating: 4.3,
        deliveryFee: 2.99,
        hours: "24/7"
    },
    {
        id: 'KFC',
        name: 'KFC',
        address: '9876 Chicken Ave',
        rating: 3.5,
        deliveryFee: 0,
        hours: "9am - 9pm"
    },
    {
        id: 'KFC',
        name: 'KFC',
        address: '9876 Chicken Ave',
        rating: 3.5,
        deliveryFee: 0,
        hours: "9am - 9pm"
    },
    {
        id: 'KFC',
        name: 'KFC',
        address: '9876 Chicken Ave',
        rating: 3.5,
        deliveryFee: 0,
        hours: "9am - 9pm"
    },
    {
        id: 'KFC',
        name: 'KFC',
        address: '9876 Chicken Ave',
        rating: 3.5,
        deliveryFee: 0,
        hours: "9am - 9pm"
    },
];

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoadingRestaurants: true,
            restaurants: list
        }
    }

    componentDidMount() {
        // UserService.getAllRestaurants().then(
        //     response => {
        //         console.log(response);
        //         this.setState({
        //             loadingRestaurants: false,
        //
        //         })
        //     }
        // )
        //
        // UserService.getMenu(2).then(
        //     response => {
        //         console.log(response);
        //     }
        // )
    }

    render() {

        return (
            <div className="container">
                <Promotions/>
                <br/>
                <List restaurants={this.state.restaurants} selectRestaurant={this.props.selectRestaurant}/>
            </div>
        );
    }
}

