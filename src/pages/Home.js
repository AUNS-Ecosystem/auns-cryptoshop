import React from 'react';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./Home.css";
import { Carousel, Card } from 'antd';
import Carousel1 from "../images/carousel1.png";
import Carousel2 from "../images/carousel2.png";
import Carousel3 from "../images/carousel3.png";
import iphone from "../images/iphone12.png";
import Guitar from "../images/guitar.jpg";
import Chair from "../images/gamingchair.jpg";
import Adventure from "../images/adventure.png";
import Dictionaries from "../images/dictionaries.png";
import Fantasy from "../images/fantasy.png";
import Horror from "../images/horror.png";

const carousel = [Carousel1,Carousel2,Carousel3];
const catCard = [Adventure, Fantasy,Horror,Dictionaries];
const Home = () => {

return(
  <>
  <div className="container">
    <Header/>
    <Carousel autoplay className="carousel">
    {carousel.map((e) => {
        return <img src={e} className="carousel-img" alt="carousel"></img>;
    })}
    </Carousel>
    <div className="cards">  
      <Card className="card">
        <h1 align= "center">Browse Phones</h1>
        <img src={iphone} alt="Comics Category" className="card-content"></img>
        <br />
        <Link to="/categories" state={"Phones"} className="link">
          Shop Now
        </Link>
      </Card>
      <Card className="card">
        <h1 align= "center">Music</h1>
        <img src={Guitar} alt="Artemis Fowl" className="card-content"></img>
        <br />
        <Link to="/" className="link">
          View Product
        </Link>
      </Card>
      <Card className="card">
        <h1 align= "center">Gaming</h1>
        <img src={Chair} alt="Moby Dick" className="card-content"></img>
        <br />
        <Link to="/" className="link">
          View Product
        </Link>
      </Card>
   
    </div>
  </div>
  </>
)
}

export default Home;
