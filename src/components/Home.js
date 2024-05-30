import React from "react";
import { Carousel, CarouselCaption } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Menu from "./Menu";

function Home() {
  return (
    <div>
      <Carousel interval={3000} pause={false} prevIcon={null} nextIcon={null}>
        <Carousel.Item style={{ position: "relative" }}>
          <img
            style={{ filter: "brightness(40%)" }}
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/full-table-italian-meals-ai-generated-image_511042-1707.jpg?t=st=1716825390~exp=1716828990~hmac=f302e217e36ab064c38e58cc6ebd87fd4e43627bb6cdbe4417a9b1d8a0ff24ff&w=1380"
            alt="First slide"
          />
          <CarouselCaption className="carousel-caption-custom">
            <h3 className="sofia-regular" style={{fontSize:"80px"}}>Choosing The</h3>
            <p className="sofia-regular"style={{fontSize:"80px"}}>Best Quality Food</p>
          </CarouselCaption>
        </Carousel.Item>
        <Carousel.Item style={{ position: "relative" }}>
          <img
            style={{ filter: "brightness(40%)" }}
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/top-view-eid-al-fitr-celebration-with-delicious-food_23-2151205137.jpg?t=st=1716825838~exp=1716829438~hmac=b771a68ce540466ff574f8d9444b2525a169c4dd265cfa74a549380fa0f3f594&w=1380"
            alt="Second slide"
          />
          <CarouselCaption className="carousel-caption-custom">
            <h3 className="sofia-regular"style={{fontSize:"80px"}}>We belive good food</h3>
            <p className="sofia-regular"style={{fontSize:"80px"}}>offer great smaile</p>
          </CarouselCaption>
        </Carousel.Item>
      </Carousel>
      <Menu />
    </div>
  );
}

export default Home;
