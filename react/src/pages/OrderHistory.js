import React from 'react';
import { withRouter } from "react-router";
import { Button, Card, CardColumns, Col, Form, Jumbotron, Modal, Row } from "react-bootstrap";
import StarRating from "react-star-ratings";
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

const validateComment = value => {
    if (value.length > 500) {
        return (
            <div className="alert alert-danger" role="alert">
                Comment exceeds maximum character count of 500.
            </div>
        );
    }
}

class OrderHistory extends React.Component {
    constructor() {
        super()
        this.state = {
            show: false,
            rating: 0,
            comment: ''
		}
    }

    handleModal() {
        this.setState({ show: !this.state.show })
        // Clear changes to ratings.
        this.setState({ rating: 0 });
        this.setState({ comment: '' });
    }

    handleValidation() {
        let sRating = this.state.rating;
    }

    submitReview() {
        if (this.handleValidation()) {
            alert("Ensure you have given a star rating and your comments are less than 500 characters long!")
        } else {
            alert("Thank you for sharing your experience!")
            this.handleModal();
        }
    }


    changeRating = (newRating, name) => {
        this.setState({ rating: newRating });
    }

    updateComment = (newComment, name) => {
        this.setState({ comment: newComment });
    }

    render() {
        const { params } = this.props.match;
        const { rating } = this.state;
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
                <h2>Your last Order</h2>
                <br />
                <Button onClick={() => { this.handleModal() }}>Leave the Restaurant a Review</Button>
                <Modal
                    show={this.state.show}
                    onHide={() => this.handleModal()}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>Let others know how your experience was!</Modal.Header>
                    <Modal.Body>
                        <Form target="_self" method="POST">
                            <StarRating
                                rating={this.state.rating}
                                starRatedColor="red"
                                isSelectable={true}
                                changeRating={this.changeRating}
                                numberOfStars={5}
                                name='rating'
                            />
                            <Form.Group controlId="reviewForm.Comments">
                                <Form.Label>Comments:</Form.Label>
                                <Form.Control as="textarea"
                                    type="text"
                                    placeholder="Any compliments to the establishment?"
                                    maxLength={250}
                                    rows="5"
                                    value={this.state.comment}
                                    onChange={this.updateComment.bind(this)}
                                    aria-describedby="CommentsHelpBlock"
                                />
                                <Form.Text id="CommentsHelpBlock" muted>
                                    Maximum 250 characters for comments.
                                </Form.Text>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => { this.handleModal() }}>Cancel</Button>
                        <Button onClick={() => { this.submitReview() }}>Submit</Button>
                    </Modal.Footer>
                </Modal>
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
                </Card>
                ))}
                </CardColumns>
            </div>
        )
    }
}

export default withRouter(OrderHistory);