import React, { Component } from "react";
import "../style.css";

class addProduct extends Component {
  onSubmit = event => {
    event.preventDefault();
    this.props.handleAddProduct(
      this.nameInput.value,
      this.colorInput.value,
      this.priceInput.value
    );
    this.nameInput.value = " ";
    this.colorInput.value = " ";
    this.priceInput.value = " ";
  };
  render() {
    return (
      <div>
        <div className="inputBox">
          <form onSubmit={this.onSubmit}>
            <p>Add new product</p>
            <div className="form">
              <strong>Name:</strong>
              <input
                className="addProduct"
                type="text"
                placeholder="Product Name"
                autofocus
                required
                ref={nameInput => (this.nameInput = nameInput)}
              />
            </div>
            <div className="form">
              <strong>Color:</strong>
              <input
                className="addProduct"
                type="text"
                placeholder="Color"
                required
                ref={colorInput => (this.colorInput = colorInput)}
              />
            </div>
            <div className="form">
              <strong>Price:</strong>
              <input
                className="addProduct"
                type="number"
                placeholder=" Price"
                required
                ref={priceInput => (this.priceInput = priceInput)}
              />
            </div>
            <button className="submitButton">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default addProduct;
