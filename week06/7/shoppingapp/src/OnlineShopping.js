
import React from "react";
import Cart from "./Cart";

class OnlineShopping extends React.Component {
  render() {
    const items = [
      { itemname: "iPhone 14", price: 80000 },
      { itemname: "Laptop", price: 60000 },
      { itemname: "Smart Watch", price: 10000 },
      { itemname: "Headphones", price: 5000 },
      { itemname: "Keyboard", price: 2000 }
    ];

    return (
      <div style={{ padding: "30px", fontFamily: "Arial" }}>
        <h1>🛒 Online Shopping Cart</h1>
        {items.map((item, index) => (
          <Cart key={index} itemname={item.itemname} price={item.price} />
        ))}
      </div>
    );
  }
}

export default OnlineShopping;
