import React, { Component } from "react";
import "./App.css";
import Card from "./Card.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: "Blue Flower",
          price: 8000,
          stars: 4,
          imgPath: "blueFlower"
        },
        {
          name: "Orange Flower",
          price: 1760,
          stars: 3,
          imgPath: "orangeFlower"
        },
        {
          name: "Pink Flower",
          price: 4000,
          stars: 5,
          imgPath: "pinkFlower"
        }
      ]
    };
  }

  renderItemsAsCards = () => {
    return this.state.items.map(item => {
      return (
        <Card
          key={item.name}
          name={item.name}
          price={item.price}
          stars={item.stars}
          imgPath={item.imgPath}
        />
      );
    });
  };

  render = () => {
    return <div className="main container">{this.renderItemsAsCards()}</div>;
  };
}

export default App;
