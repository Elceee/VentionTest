import React, { Component } from "react";
import { ReactComponent as Star } from "./images/star.svg";
import blueFlower from "./images/blue-flower.png";
import orangeFlower from "./images/orange-flower.png";
import pinkFlower from "./images/pink-flower.png";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
      inCart: false
    };
  }

  componentDidMount = () => {
    if (this.props.imgPath === "blueFlower") {
      this.setState({ img: blueFlower });
    } else if (this.props.imgPath === "orangeFlower") {
      this.setState({ img: orangeFlower });
    } else if (this.props.imgPath === "pinkFlower") {
      this.setState({ img: pinkFlower });
    }
  };

  renderPriceAsDollars = () => {
    return (this.props.price / 100).toFixed(2);
  };

  renderRating = () => {
    let rating = [];
    for (let stars = 0; stars < 5; stars++) {
      if (stars < this.props.stars) {
        rating.push("black");
      } else rating.push("gray");
    }
    let key = 0;
    return rating.map(starColour => {
      return (
        <div className="star" key={key++}>
          <Star className={starColour} key={key++} />
        </div>
      );
    });
  };

  buttonText = () => {
    return this.state.inCart ? "Remove from cart" : "Add to cart";
  };

  changeCartStatus = event => {
    event.preventDefault();
    let currentCartStatus = this.state.inCart;
    this.setState({ inCart: !currentCartStatus });
  };

  render = () => {
    return (
      <div className="card">
        <div
          className={
            this.state.inCart ? "cartMarker visible" : "cartMarker invisible"
          }
        >
          In Cart
        </div>
        <div className="imageContainer">
          <div className="cartWrapper">
            <button onClick={this.changeCartStatus} className="cartButton">
              {this.buttonText()}
            </button>
          </div>
          <img
            src={this.state.img}
            className="itemImage"
            alt={this.props.name}
          />
        </div>
        <div className="info">
          <div className="title">{this.props.name}</div>
          <div className="price">${this.renderPriceAsDollars()}</div>
          <div className="rating container">{this.renderRating()}</div>
        </div>
      </div>
    );
  };
}

export default Card;
