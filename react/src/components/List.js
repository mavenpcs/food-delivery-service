import React from 'react';
import {Form, Card} from "react-bootstrap";
import Ratings from 'react-ratings-declarative';
import {Link} from 'react-router-dom'


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

class List extends React.Component {

    render() {
        return (
            <Form>
                <div>

                    {list.map((item, index) => (

                        <Card>
                            <Card.Body>
                                <Link to={`/restaurants/${item.id}`}
                                      className="stretched-link">{item.name}</Link>

                                <Card.Text>
                                    {item.address}
                                </Card.Text>
                                <Card.Text>
                                    Hours: {item.hours}
                                </Card.Text>
                                <Ratings
                                    rating={item.rating}
                                    widgetRatedColors="yellow">
                                    <Ratings.Widget/>
                                    <Ratings.Widget/>
                                    <Ratings.Widget/>
                                    <Ratings.Widget/>
                                    <Ratings.Widget/>
                                </Ratings>

                            </Card.Body>
                        </Card>

                    ))}
                </div>
            </Form>
        )
    }
}

export default List;