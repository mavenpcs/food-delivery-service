import React from 'react';
import {withRouter} from "react-router";
import {Button, Card, CardColumns, CardDeck, Col, Form, Jumbotron, Modal, Row} from "react-bootstrap";
import placeholderImage from "../images/placeholder.jpg"
import {Link} from "react-router-dom";
import UserService from "../services/user.service";

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
            show: false,
            isLoadingMenu: true,
            menu: []
        }

        this.handleCart = this.handleCart.bind(this);
    }

    componentDidMount() {
        UserService.getMenu(this.props.restaurant.name).then(
            response => {
                console.log(response);
                this.setState({
                    isLoadingRestaurants: false,
                    menu: JSON.parse(response.request.response)
                })
            }
        ).catch(
            error => {
                console.log(error);
            }
        )
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
                    <h1>{params.restaurant.name}</h1>
                    <Form>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Col sm="10">
                                <Form.Control plaintext readOnly defaultValue="Restaurant info goes here"/>
                            </Col>
                        </Form.Group>

                    </Form>

                </Jumbotron>
                <br/>
                <h2 className="green">Menu</h2>

                <CardDeck className="mx-lg-5 my-lg-5">
                    {foodMenu.map((item, index) => (
                        <Card  className="menuCard my-lg-3 roundedCorners hoverable" style={{width: '18rem'}} key={index}>
                            <Card.Body>
                                <Card.Title className="green">{item.name}</Card.Title>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                                <Card.Text>
                                    {item.price}
                                </Card.Text>
                            </Card.Body>

                                <Button className="btn btn-light roundedCorners my-2 my-sm-0 align-bottom" onClick={() => {
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

                                        <Button className="btn btn-light roundedCorners my-2 my-sm-0" onClick={() => {
                                            this.handleModal()
                                        }}>Back to Menu</Button>
                                        <Link to="/cart">
                                            <Button className="btn btn-light roundedCorners my-2 my-sm-0">To Cart/Checkout</Button>
                                        </Link>
                                    </Modal.Footer>
                                </Modal>

                        </Card>
                    ))}
                </CardDeck>
            </div>
        )
    }
}

export default withRouter(Restaurant);