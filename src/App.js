import React, { Component } from "react";
import ProductTable from "./components/productItem";
import "./style.css";

// create data
const products = [
  { id: 1, name: "iphone", color: "Stonegrey", price: 789 },
  { id: 2, name: "Samsung", color: "Midnight Blck", price: 569 },
  { id: 3, name: "Hauwai P9", color: "Mystic Silver", price: 272 }
];

// get data

localStorage.setItem("products", JSON.stringify(products));

class App extends Component {
  componentWillMount() {
    const products = this.getProducts();
  }

  getProducts() {
    const products = JSON.parse(localStorage.getItem("products"));
    console.log(products);

    this.setState({ products });
  }

  handleAddProduct() {}

  handleUpdateProduct() {}

  handleDeleteProduct() {}

  render() {
    return (
      <div>
        <h2> Smart phones stock</h2>
        <div className="container">
          <div className="inputBox">
            <p>Input your data</p>
            <form>
              <div className="form">
                <strong>Name:</strong>
                <input type="text" placeHolder="Product Name" refs="name" />
              </div>
              <div className="form">
                <strong>Color:</strong>
                <input type="text" placeHolder="Color" refs="color" />
              </div>
              <div className="form">
                <strong>Price:</strong>
                <input type="number" placeHolder=" Price" refs="price" />
              </div>
              <button className="submitButton">Submit</button>
            </form>
          </div>
          <div className="displayBox">
            <table>
              <tr>
                <th className="headerName">Product</th>
                <th className="headerName">Color</th>
                <th className="headerName">Price</th>
                <th className="headerName">Edit</th>
                <th className="headerName">Delete</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
