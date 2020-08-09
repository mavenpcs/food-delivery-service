import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Promotions from "../components/Promotions";
import List from "../components/List"
import UserService from "../services/user.service"


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

