import React from 'react';
import {Form, Row, Col, Card} from "react-bootstrap";
import Ratings from 'react-ratings-declarative';
import {BrowserRouter, Link, Router} from 'react-router-dom'


const list = [
    {
        id: 'McDonalds',
        name: "McDonald's",
        location: '1111 Fries Street',
        rating: 4.3,
        deliveryFee: 2.99
    },
    {
        id: 'KFC',
        name: 'KFC',
        location: '9876 Chicken Ave',
        rating: 3.5,
        deliveryFee: 0
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
                                      className="btn btn-primary stretched-link">{item.name}</Link>

                                <Card.Text>
                                    {item.location}
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