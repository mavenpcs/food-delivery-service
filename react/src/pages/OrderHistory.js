import React from 'react';
import UserService from "../services/user.service";
import ReviewService from "../services/review.service";
import axios from "axios";
import { withRouter } from "react-router";
import { Button, Card, CardColumns, Col, Form, Jumbotron, Modal, Row } from "react-bootstrap";
import StarRating from "react-star-ratings";

const REVIEW_API_URL = " http://localhost:3000/api/customer/add-review";

class OrderHistory extends React.Component {
    constructor(props) {
        super(props)
        this.submitReview = this.submitReview.bind(this);
        this.state = {
            user: this.props.user,
            show: false,
            rating: 3,
            comments: '',
            restaurant_id: 0,
            orders: [],
            //lastOrder: []
        }  
    }

    componentDidMount() {
        UserService.getOrders(4).then(
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
        return (
            <div>
                <br/>
                <h2>Your Previous Orders</h2>
                <br />
                <CardColumns>
                {this.state.orders.map((item, index) => (
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{item.restaurant_name}</Card.Title>
                        <Card.Text>
                                Subtotal: ${item.subtotal}
                        </Card.Text>
                    </Card.Body>
                    <Button onClick={() => { this.handleModal(item) }}>Leave the Restaurant a Review</Button>
                    <Modal
                        show={this.state.show}
                        onHide={() => this.closeModal()}
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
                                    <Form.Label>Comments: (Maximum length 250 characters)</Form.Label>
                                    <Form.Control as="textarea"
                                        type="text"
                                        placeholder="Any compliments to the establishment?"
                                        maxLength={250}
                                        rows="5"
                                        value={this.state.comment}
                                        onChange={this.onChangeComment}
                                        aria-describedby="CommentsHelpBlock"
                                    />
                                    <Form.Text id="CommentsHelpBlock" muted>
                                        If you have any complaints, make sure you've tried contacting the establishment for assistance first.
                            </Form.Text>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                                <Button onClick={() => { this.closeModal() }}>Cancel</Button>
                                <Button onClick={() => { this.submitReview(item) }}>Submit</Button>
                        </Modal.Footer>
                    </Modal>
                </Card>
                ))}
                </CardColumns>

            </div>
        )
    }
}

export default withRouter(OrderHistory);