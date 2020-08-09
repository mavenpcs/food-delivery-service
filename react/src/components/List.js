import React from 'react';
import {Form, Card} from "react-bootstrap";
import Ratings from 'react-ratings-declarative';
import {Link} from 'react-router-dom'


class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.restaurants,
            filteredItems: this.props.restaurants
        }

        this.handleSearchInput = this.handleSearchInput.bind(this);
    }


    handleSearchInput(event) {
        let searchQuery = event.target.value.toLowerCase(),
            filteredItems = this.state.items.filter((el) => {
                let searchValue = el.name.toLowerCase();
                return searchValue.indexOf(searchQuery) !== -1;
            })

        this.setState({filteredItems: filteredItems});
    }

    render() {
        const items = Array.from(this.state.filteredItems);
        if (items) {
            return (
                <Form>
                    <input className="filter form-control roundedCorners searchBar " onInput={this.handleSearchInput}
                           type="text"
                           placeholder="Search..."/>
                    <div>

                        {items.map((item, index) => (

                            <Card className="roundedCorners hoverable roundedCorners" style={{margin: 1 + 'em'}} key={index}>
                                <Card.Body>
                                        <Link to={`/restaurants/${item.id}`}
                                            className="stretched-link green h3" onClick={() => {
                                            this.props.selectRestaurant(item)
                                        }}>{item.name}</Link>
                                    <Card.Text className="brown">
                                        {item.address}
                                    </Card.Text>
                                    <Card.Text className="brown">
                                        Delivery fee: ${item.deliveryfee}
                                    </Card.Text>
                                    <Ratings
                                        rating={item.rating}
                                        widgetRatedColors="#facc00">
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
        return (
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )

    }
}

export default List;