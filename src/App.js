import React, { Component } from "react";
import ProductItem from "./components/productItem";
import Addproduct from "./components/addProduct";
import "./style.css";

// create data
const products = [
  { id: 1, name: "Apple iphone 6s", color: "Stonegrey", price: 789 },
  { id: 2, name: "Samsung Galaxy S8", color: "Midnight Black", price: 569 },
  { id: 3, name: "Hauwai P9", color: "Mystic Silver", price: 272 }
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
    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }
  componentWillMount() {
    const product = this.getProducts();
    this.setState({ products });
  }

  getProducts() {
    return this.state.products;
  }

  handleAddProduct(name, color, price) {
    const products = this.getProducts();
    products.push({
      name,
      color,
      price
    });

    // if the product already exsist, show warining
    // convert all color name to stardard color
    this.setState({ products });
  }

  handleEditSubmit(name, color, price, originalName) {
    let products = this.getProducts();
    products = products.map(product => {
      if (product.name === originalName) {
        product.name = name;
        product.color = color;
        product.price = price;
      }
      return product;
    });

    this.setState({ products });
  }

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
          <Addproduct handleAddProduct={this.handleAddProduct} />
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
                  handleEditSubmit={this.handleEditSubmit}
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
