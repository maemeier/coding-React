import React, { Component } from "react";
import "../style.css";

class ProductItem extends Component {
  constructor(props) {
    super(props);

    this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
  }

  handleDeleteProduct() {
    const { handleDeleteProduct, name } = this.props;
    handleDeleteProduct(name);
  }
  render() {
    const { name, price, color } = this.props;
    return (
      <div>
        <td>{name}</td>
        <td className="descriptionName">{color}</td>
        <td className="descriptionName">CHF {price}</td>
        <td>
          <button className="editButton">edit</button>
        </td>
        <td>
          {" "}
          <button className="deleteButton" onClick={this.handleDeleteProduct}>
            delete
          </button>
        </td>
      </div>
    );
  }
}
export default ProductItem;
