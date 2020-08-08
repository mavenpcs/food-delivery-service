import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Promotions from "../components/Promotions";
import List from "../components/List"
import UserService from "../services/user.service"
// const list = [
//     {
//         id: 'McDonalds',
//         name: "McDonald's",
//         address: '1111 Fries Street',
//         rating: 4.3,
//         deliveryFee: 2.99,
//         hours: "24/7"
//     },
//     {
//         id: 'KFC',
//         name: 'KFC',
//         address: '9876 Chicken Ave',
//         rating: 3.5,
//         deliveryFee: 0,
//         hours: "9am - 9pm"
//     },
//     {
//         id: 'KFC',
//         name: 'KFC',
//         address: '9876 Chicken Ave',
//         rating: 3.5,
//         deliveryFee: 0,
//         hours: "9am - 9pm"
//     },
//     {
//         id: 'KFC',
//         name: 'KFC',
//         address: '9876 Chicken Ave',
//         rating: 3.5,
//         deliveryFee: 0,
//         hours: "9am - 9pm"
//     },
//     {
//         id: 'KFC',
//         name: 'KFC',
//         address: '9876 Chicken Ave',
//         rating: 3.5,
//         deliveryFee: 0,
//         hours: "9am - 9pm"
//     },
// ];

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoadingRestaurants: true,
            restaurants: []
        }
    }

    componentDidMount() {
        UserService.getAllRestaurants().then(
            response => {
                this.setState({
                    isLoadingRestaurants: false,
                    restaurants: JSON.parse(response.request.response)

                })
            }
        ).catch(
            error => {
                console.log(error);
            }
        )

    }

    render() {

        return (
            <div className="container">
                <Promotions/>
                <br/>
                {this.state.isLoadingRestaurants ? (<div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>) : (
                    <List restaurants={this.state.restaurants} selectRestaurant={this.props.selectRestaurant}/>
                )}

            </div>
        );
    }
}

