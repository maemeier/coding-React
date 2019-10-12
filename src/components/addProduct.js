import React, { Component } from "react";
import "../style.css";

class addProduct extends Component {
  render() {
    return (
      <div>
        <div className="inputBox">
          <p>Input your data</p>
          <form>
            <div className="form">
              <strong>Name:</strong>
              <input type="text" placeholder="Product Name" refs="name" />
            </div>
            <div className="form">
              <strong>Color:</strong>
              <input type="text" placeholder="Color" refs="color" />
            </div>
            <div className="form">
              <strong>Price:</strong>
              <input type="number" placeholder=" Price" refs="price" />
            </div>
            <button className="submitButton">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default addProduct;
