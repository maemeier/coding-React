import React, { Component } from "react";
import ProductItem from "./components/productItem";
import Addproduct from "./components/addProduct";
import "./style.css";

// create data
const products = [
  { id: 1, name: "Apple iphone 6s", color: "light Gray", price: 789 },
  { id: 2, name: "Samsung Galaxy S8", color: "midnight black", price: 569 },
  { id: 3, name: "Hauwai P9", color: "indego blue", price: 272 }
];

// check color function

function getPrimaryColor(color) {
  const colors = [
    "black",
    "gray",
    "red",
    "blue",
    "pink",
    "rosegold",
    "yellow",
    "green",
    "gold",
    "silver",
    "orange",
    "brown",
    "purple",
    "white"
  ];
  let originalColor;
  colors.forEach(c => {
    if (color && color.toLowerCase().includes(c)) {
      originalColor = c;
    }
  });
  return originalColor;
}

class App extends Component {
  state = {
    products: []
  };

  // store data in localStorage
  componentDidMount() {
    const productsFromStorage = localStorage.getItem("products");

    if (productsFromStorage) {
      this.setState({
        products: JSON.parse(productsFromStorage)
      });
    } else {
      this.setState({
        products
      });
    }
  }
  componentWillMount() {
    const products = this.state.products;
    ///this.setState({ products });
  }

  componentDidUpdate() {
    localStorage.setItem("products", JSON.stringify(this.state.products));
  }

  handleAddProduct = (name, color, price) => {
    const { products } = this.state;

    // check if name is nameIsAvailable
    let nameIsAvailable = false;
    products.forEach(x => {
      if (x.color === color) nameIsAvailable = true;
    });

    if (!nameIsAvailable) {
      this.setState({
        products: [
          ...this.state.products,
          {
            name,
            color,
            price
          }
        ]
      });
    } else {
      alert("This product is already exsisted 😊");
    }
  };

  handleEditSubmit = (name, color, price, originalName) => {
    const { products } = this.state;
    const updatedProducts = products.map(product => {
      if (product.name === originalName) {
        product.name = name;
        product.color = color;
        product.price = price;
      }
      return product;
    });
    console.log(updatedProducts);

    this.setState({ products: updatedProducts });
  };

  handleDeleteProduct = name => {
    const deleteProduct = this.state.products.filter(product => {
      return product.name !== name;
    });
    this.setState({ products: deleteProduct });
  };

  render() {
    return (
      <div>
        <div className="wrapper">
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

                {this.state.products.map(product => {
                  return (
                    <tr>
                      <ProductItem
                        key={product.name}
                        name={product.name}
                        price={product.price}
                        color={getPrimaryColor(product.color)}
                        handleDeleteProduct={this.handleDeleteProduct}
                        handleEditSubmit={this.handleEditSubmit}
                      />
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
