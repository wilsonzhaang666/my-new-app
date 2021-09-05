import React from "react";
import img1 from "../assets/scene1.png";
import img2 from "../assets/scene2.png";
import img3 from "../assets/scene3.png";
import {Carousel} from 'react-bootstrap';

class Home extends React.Component {
  render() {
    return (
      <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Vibe-App</h3>
      <p>Share the best moment of your life</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Don't know where to go ?</h3>
      <p>See where everybody have thier fun</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>The best moment</h3>
      <p>Happiness will be extends by sharing</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
  }
}

export default Home;
