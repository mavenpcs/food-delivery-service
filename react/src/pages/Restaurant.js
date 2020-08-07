import React from 'react';
import {withRouter} from "react-router";
import {Button, Card, CardDeck, Jumbotron, Modal} from "react-bootstrap";
import {Link} from "react-router-dom";
import UserService from "../services/user.service";

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
        UserService.getMenu(this.props.restaurant.id).then(
            response => {
                console.log(response);
                this.setState({
                    isLoadingMenu: false,
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
        return (
            <div>
                <Jumbotron>
                    <h1>{this.props.restaurant.name}</h1>
                    <p>{this.props.restaurant.address}</p>
                    <p>{this.props.restaurant.hours}</p>
                    <p>{this.props.restaurant.deliveryfee}</p>


                </Jumbotron>
                <br/>
                <h2 className="green">Menu</h2>

                {this.state.isLoadingMenu ? (<div>loading...</div>) : (
                    <CardDeck className="mx-lg-5 my-lg-5">
                        {this.state.menu.map((item, index) => (
                            <Card className="menuCard my-lg-3 roundedCorners hoverable" style={{width: '18rem'}}
                                  key={index}>
                                <Card.Body>
                                    <Card.Title className="green">{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                    <Card.Text>
                                        {item.price}
                                    </Card.Text>
                                </Card.Body>

                                <Button className="btn btn-light roundedCorners my-2 my-sm-0 align-bottom"
                                        onClick={() => {
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
                                            <Button className="btn btn-light roundedCorners my-2 my-sm-0">To
                                                Cart/Checkout</Button>
                                        </Link>
                                    </Modal.Footer>
                                </Modal>

                            </Card>
                        ))}
                    </CardDeck>
                )}

            </div>
        )
    }
}

export default withRouter(Restaurant);