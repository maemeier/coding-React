import React, { Component } from "react";
import "../style.css";

class addProduct extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.handleAddProduct(
      this.nameInput.value,
      this.priceInput.value,
      this.colorInput.value
    );
    this.nameInput.value = " ";
    this.colorInput.value = " ";
    this.priceInput.value = " ";
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
                ref={nameInput => (this.nameInput = nameInput)}
              />
            </div>
            <div className="form">
              <strong>Color:</strong>
              <input
                type="text"
                placeholder="Color"
                ref={colorInput => (this.colorInput = colorInput)}
              />
            </div>
            <div className="form">
              <strong>Price:</strong>
              <input
                type="number"
                placeholder=" Price"
                ref={priceInput => (this.priceInput = priceInput)}
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
