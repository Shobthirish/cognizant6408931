
import React from "react";

class Cart extends React.Component {
  render() {
    return (
      <div style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
        <p><strong>Item:</strong> {this.props.itemname}</p>
        <p><strong>Price:</strong> ₹{this.props.price}</p>
      </div>
    );
  }
}

export default Cart;
