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
    constructor(props) {
        super(props);
        this.state = {
            items: ""
        }

        this.handleSearchInput = this.handleSearchInput.bind(this);
    }

    componentDidMount() {
        this.setState({
            items: list
        })
    }

    handleSearchInput(event) {
        let searcjQery = event.target.value.toLowerCase(),
            filteredItems = list.filter((el) => {
                let searchValue = el.name.toLowerCase();
                return searchValue.indexOf(searcjQery) !== -1;
            })

        this.setState({ items: filteredItems });
    }

    render() {
        let items = Array.from(this.state.items);
        if (items) {
            return (
                <Form>
                    <input className="filter form-control" onInput={this.handleSearchInput} type="text"
                           placeholder="Search for Restaurant..."/>
                    <div>

                        {items.map((item, index) => (
                            <Card style={{margin: 1 + 'em'}}>
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
}

export default List;