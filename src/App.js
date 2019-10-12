import React, { Component } from "react";
import ProductItem from "./components/productItem";
import Addproduct from "./components/addProduct";
import "./style.css";

// create data
const products = [
  { name: "iphone", color: "Stonegrey", price: 789 },
  { name: "Samsung", color: "Midnight Blck", price: 569 },
  { name: "Hauwai P9", color: "Mystic Silver", price: 272 }
];

// get data

localStorage.setItem("products", JSON.stringify(products));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: JSON.parse(localStorage.getItem("products"))
    };
    this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
  }
  componentWillMount() {
    const product = this.getProducts;
    this.setState({ products });
  }

  getProducts() {
    return this.state.products;
  }

  handleAddProduct() {}

  handleUpdateProduct() {}

  handleDeleteProduct(name) {
    const products = this.getProducts();
    const deleteProduct = products.filter(product => {
      return product.name !== name;
    });
    this.setState({ products: deleteProduct });
    console.log(deleteProduct);
  }

  render() {
    return (
      <div>
        <h2> Smart phones stock</h2>
        <div className="container">
          <Addproduct />
          <div className="displayBox">
            <table>
              <thead>
                <th className="headerName">Product</th>
                <th className="headerName">Color</th>
                <th className="headerName">Price</th>
                <th className="headerName">Edit</th>
                <th className="headerName">Delete</th>
              </thead>
            </table>
            {this.state.products.map(product => {
              return (
                <ProductItem
                  key={product.name}
                  name={product.name}
                  price={product.price}
                  color={product.color}
                  handleDeleteProduct={this.handleDeleteProduct}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
