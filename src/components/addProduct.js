import React, { Component } from "react";
import "../style.css";

class addProduct extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <div className="inputBox">
          <p>Input your product</p>
          <form onSubmit={this.onSubmit}>
            <div className="form">
              <strong>Name:</strong>
              <input
                type="text"
                placeholder="Product Name"
                refs={nameInput => (this.nameInput = nameInput)}
              />
            </div>
            <div className="form">
              <strong>Color:</strong>
              <input
                type="text"
                placeholder="Color"
                refs={colorInput => (this.colorInput = colorInput)}
              />
            </div>
            <div className="form">
              <strong>Price:</strong>
              <input
                type="number"
                placeholder=" Price"
                rrefs={priceInput => (this.priceInput = priceInput)}
              />
            </div>
            <button className="submitButton">Add Product</button>
          </form>
        </div>
      </div>
    );
  }
}

export default addProduct;
