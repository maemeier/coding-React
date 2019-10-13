import React, { Component } from "react";
import "../style.css";

class ProductItem extends Component {
  constructor(props) {
    super(props);

    this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
    this.handleUpdateProduct = this.handleUpdateProduct.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.state = {
      isUpdated: false
    };
  }

  handleDeleteProduct() {
    const { handleDeleteProduct, name } = this.props;
    handleDeleteProduct(name);
  }

  handleUpdateProduct() {
    this.setState({ isUpdated: true });
  }

  handleEditSubmit(event) {
    event.preventDefault();
    this.props.handleEditSubmit(
      this.refs.name.value,
      this.refs.color.value,
      this.refs.price.value,
      this.props.name,
      this.props.color,
      this.props.price
    );
    this.setState({ isUpdated: false });
  }

  render() {
    const { name, price, color } = this.props;
    return (
      <div>
        {this.state.isUpdated ? (
          <form onSubmit={this.handleEditSubmit}>
            <input
              type="text"
              placeholder="change name"
              defaultValue={name}
              ref="name"
            />

            <input
              type="text"
              placeholder="change color"
              defaultValue={color}
              ref="color"
            />

            <input
              type="number"
              placeholder="change price"
              defaultValue={price}
              ref="price"
            />
            <button className="updateButton">Save</button>
          </form>
        ) : (
          <div>
            {" "}
            <td>{name}</td>
            <td className="descriptionName">{color}</td>
            <td className="descriptionName">CHF {price}</td>
            <td>
              <button className="editButton" onClick={this.handleUpdateProduct}>
                edit
              </button>
            </td>
            <td>
              {" "}
              <button
                className="deleteButton"
                onClick={this.handleDeleteProduct}
              >
                delete
              </button>
            </td>
          </div>
        )}
      </div>
    );
  }
}
export default ProductItem;
