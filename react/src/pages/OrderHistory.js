import React from 'react';
import { withRouter } from "react-router";
import { Button, Card, CardColumns, Col, Form, Jumbotron, Modal, Row } from "react-bootstrap";
import StarRating from "react-star-ratings";
import placeholderImage from "../images/placeholder.jpg"
import FiletOFish from "../images/mcdonalds-filet-o-fish.jpg"

// Place holder for now
const foodMenu = [
    {
        id: '0',
        category: "Burgers",
        restaurant_name: "McDonald's",
        name: 'Big Mac',
        price: 4.99,
        description: 'this is a Big Mac with 9999999999999999999 Calories'
    },
    {
        id: '2',
        category: "Burgers",
        restaurant_name: "McDonald's",
        name: 'Quarter Pounder',
        price: 5.99,
        description: 'Contains Cheese'
    },
    {
        id: '5',
        category: "Sandwiches",
        restaurant_name: "McDonald's",
        name: 'Filet O Fish',
        price: 5.19,
        description: 'Irresistibly fishy'
    },
   
];

class OrderHistory extends React.Component {
    constructor() {
        super()
        this.state = {
            show: false,
            rating: 0
		}
    }

    handleModal() {
        this.setState({ show: !this.state.show })
    }

    submitReview(e) {

    }

    changeRating(newRating, name) {
        this.setState({ rating: newRating })
    }

    render() {
        const { params } = this.props.match;
        return (
            <div>
                <Jumbotron>
                    <h1>{params.User}</h1>
                    <Form>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Col sm="10">
                                <Form.Control plaintext readOnly defaultValue="" />
                            </Col>
                        </Form.Group>
                    </Form>

                </Jumbotron>
                <br/>
                <h2>Your last 10 orders</h2>
                <CardColumns>
                {foodMenu.map((item, index) => (
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={FiletOFish} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                    </Card.Body>
                        <Card.Body>
                            <Button onClick={() => { this.handleModal() }}>Review</Button>
                            <Modal
                                show={this.state.show}
                                onHide={() => this.handleModal()}
                                backdrop="static"
                                keyboard={false}
                            >
                            <Modal.Header closeButton>Write a Review</Modal.Header>
                                <Modal.Body>
                                    <Form target="_self" method="POST">
                                        <StarRating
                                            rating={this.state.rating}
                                            starRatedColor="blue"
                                            isSelectable={true}
                                            changeRating={() => this.changeRating.bind(this)}
                                            numberOfStars={5}
                                            name='rating'
                                        />
                                        <Form.Group controlId="reviewForm.Comments">
                                            <Form.Label>Comments (Character limit: 500)</Form.Label>
                                            <Form.Control as="textarea" rows="5" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.File id="reviewPhoto" label="Photo" />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={() => { this.handleModal() }}>Cancel</Button>
                                    <Button>Post</Button>
                                </Modal.Footer>
                            </Modal>
                    </Card.Body>
                </Card>
                ))}
                </CardColumns>
            </div>
        )
    }
}

export default withRouter(OrderHistory);