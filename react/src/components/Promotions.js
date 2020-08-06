import React from 'react';
import {Carousel} from "react-bootstrap";
import beefNoodle from "../images/IMG_20190427_033716_copy.jpg"
import Neptune from "../images/Neptune.jpg"
import BubbleWaffle from "../images/BubbleWaffle.jpg"


class Promotions extends React.Component {
    render() {
        return (
            <Carousel className="mw-500 ">
                <Carousel.Item>
                    <img
                        className="d-block w-100 roundedCorners"
                        src={beefNoodle}
                        alt="First slide"
                        height="300"
                        width="500"
                    />
                    <Carousel.Caption>
                        <h2>Big Bowl Rice</h2>
                        <h3>Taiwanese Beef Noodle</h3>
                        <p>505 Dunsmuir St, Vancouver, BC V6B 1Y4</p>
                        <p>11AM - 8PM</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 roundedCorners"
                        src={Neptune}
                        alt="Second slide"
                        height="300"
                        width="600"
                    />
                    <Carousel.Caption>
                        <h2>Neptune Seafood Restaurant</h2>
                        <h3>Steamed Shrimp Dumplings</h3>
                        <p>8171 Ackroyd Rd #110, Richmond, BC V6X 3K1</p>
                        <p>9AM - 11PM</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 roundedCorners"
                        src={BubbleWaffle}
                        alt="Third slide"
                        height="300"
                        width="600"
                    />
                    <Carousel.Caption>
                        <h2>Bubble Waffle Cafe</h2>
                        <h3>Noodle and Bubble Waffle Combo</h3>
                        <p>4151 Hazelbridge Way Unit 3000, Richmond, BC V6X 0A4</p>
                        <p>11AM - 7PM</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default Promotions;