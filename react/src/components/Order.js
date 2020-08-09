import React from 'react';
import ReviewService from "../services/review.service";
import { Button, Card, Form, Modal } from "react-bootstrap";
import StarRating from "react-star-ratings";


class Order extends React.Component {
    constructor(props) {
        super(props);
        this.submitReview = this.submitReview.bind(this);

        this.state = {
            allowReview: this.props.order.reviewed,
            restaurant_name: this.props.order.restaurant_name,
            subtotal: this.props.order.subtotal,
            orderid: this.props.order.id,
            show: false,
            rating: 3,
            comments: '',
            restaurant_id: 0
        }
        console.log(this.props);
    }

    handleModal() {
        this.setState({ show: !this.state.show });
        // Clear changes to ratings.
        //this.setState({ restaurant_id: item.restaurant_id })
        //console.log(this.state.restaurant_id)
        this.setState({ rating: 0 });
        this.setState({ comment: '' });
    }

    changeRating = (newRating, name) => {
        this.setState({ rating: newRating });
    }

    onChangeComment = (e) => {
        this.setState({
            comment: e.target.value
        });
    }

    submitReview() {
        ReviewService.addReview(this.props.order.id, this.props.order.restaurant_id, this.state.rating, this.state.comment).then(
            response => {
                console.log(response);
            },
            error => {
                console.log(error);
            }
        );
        alert("Thank you for sharing your experience!")
        this.handleModal();
        this.setState({ allowReview: true });
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <Card className="menuCard my-lg-3 roundedCorners hoverable">
                    <Card.Body>
                        <Card.Title>{this.props.order.restaurant_name}</Card.Title>
                        <Card.Text>
                            Subtotal: ${this.props.order.subtotal}
                        </Card.Text>
                    </Card.Body>
                    <Button className="btn btn-light roundedCorners my-2 my-sm-0 align-bottom"
                        onClick={() => { this.handleModal() }}
                        disabled={this.state.allowReview}
                        >Leave the Restaurant a Review
                        </Button>
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
                            <Button className="btn btn-light roundedCorners my-2 my-sm-0 align-bottom"
                                onClick={() => { this.handleModal() }}>Cancel</Button>
                            <Button className="btn btn-light roundedCorners my-2 my-sm-0 align-bottom"
                                onClick={() => { this.submitReview() }}>Submit</Button>
                        </Modal.Footer>
                    </Modal>
                </Card>
            </div>
        )
    }
}

export default Order;