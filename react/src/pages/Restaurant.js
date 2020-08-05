import React from 'react';
import {withRouter} from "react-router";
import {Button, Card, CardColumns, Col, Form, Jumbotron, Modal, Row} from "react-bootstrap";
import placeholderImage from "../images/placeholder.jpg"
import {Link} from "react-router-dom";

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
        id: '1',
        category: "Burgers",
        restaurant_name: "McDonald's",
        name: 'McChicken',
        price: 3.99,
        description: 'More expensive version of a Jr. Chicken'
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
        id: '3',
        category: "Burgers",
        restaurant_name: "McDonald's",
        name: 'Quarter Pounder',
        price: 5.99,
        description: 'Got lazy so i copy and pasted'
    },
    {
        id: '4',
        category: "Burgers",
        restaurant_name: "McDonald's",
        name: 'Quarter Pounder',
        price: 5.99,
        description: 'Got lazy so i copy and pasted'
    },
    {
        id: '5',
        category: "Burgers",
        restaurant_name: "McDonald's",
        name: 'Quarter Pounder',
        price: 5.99,
        description: 'Got lazy so i copy and pasted'
    },
];

class Restaurant extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }

        this.handleCart = this.handleCart.bind(this);
    }

    handleModal() {
        this.setState({show: !this.state.show})
    }

    handleCart(item) {
        this.props.addToCart(item);
        this.handleModal();
    }

    render() {
        const {params} = this.props.match;
        return (
            <div>
                <Jumbotron>
                    <h1>{params.restaurant}</h1>
                    <Form>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Col sm="10">
                                <Form.Control plaintext readOnly defaultValue="Restaurant info goes here"/>
                            </Col>
                        </Form.Group>

                    </Form>

                </Jumbotron>
                <br/>
                <h2>Menu</h2>
                <CardColumns>
                    {foodMenu.map((item, index) => (
                        <Card style={{width: '18rem'}} key={index}>
                            <Card.Img variant="top" src={placeholderImage}/>
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                                <Card.Text>
                                    {item.price}
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Button onClick={() => {
                                    this.handleCart(item);
                                }}>Add to Cart</Button>
                                <Modal
                                    show={this.state.show}
                                    onHide={() => this.handleModal()}
                                    backdrop="static"
                                    keyboard={false}
                                >
                                    <Modal.Header closeButton>Success!</Modal.Header>
                                    <Modal.Body>
                                        Item added to Cart!
                                    </Modal.Body>
                                    <Modal.Footer>

                                        <Button onClick={() => {
                                            this.handleModal()
                                        }}>Back to Menu</Button>
                                        <Link to="/checkout">
                                            <Button>Checkout</Button>
                                        </Link>
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

export default withRouter(Restaurant);