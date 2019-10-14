import React, { Component } from "react";
import "../style.css";

class ProductItem extends Component {
  state = {
    isUpdated: false,
    name: this.props.name,
    color: this.props.color,
    price: this.props.price
  };

  handleDeleteProduct = () => {
    const { handleDeleteProduct, name } = this.props;
    handleDeleteProduct(name);
  };

  handleUpdateProduct = () => {
    this.setState({ isUpdated: true });
  };

  handleEditSubmit = (handleEditSubmit, name, color, price, originalName) => {
    this.setState({ isUpdated: true });
  };

  handleInputChange = (name, value) => {
    this.setState({ [name]: value });
  };

  handleEditSave = () => {
    this.props.handleEditSubmit(
      this.state.name,
      this.state.color,
      this.state.price,
      this.props.name
    );
    this.setState({ isUpdated: false });
  };

  render() {
    const { name, price, color } = this.props;
    return (
      <React.Fragment>
        {this.state.isUpdated ? (
          <React.Fragment>
            <td>
              <input
                className="editData"
                type="text"
                placeholder="change name"
                defaultValue={name}
                value={this.state.name}
                required
                onChange={e => this.handleInputChange("name", e.target.value)}
              />
            </td>
            <td>
              <input
                className="editData"
                type="text"
                placeholder="change color"
                defaultValue={color}
                required
                value={this.state.color}
                onChange={e => this.handleInputChange("color", e.target.value)}
              />
            </td>
            <td>
              <input
                className="editData"
                type="number"
                placeholder="change price"
                defaultValue={price}
                value={this.state.price}
                required
                onChange={e => this.handleInputChange("price", e.target.value)}
              />
            </td>
            <td>
              <button className="updateButton" onClick={this.handleEditSave}>
                Save
              </button>
            </td>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {" "}
            <td> {name}</td>
            <td className="descriptionName">{color}</td>
            <td className="descriptionName">CHF {price}</td>
            <td>
              <button className="editButton" onClick={this.handleEditSubmit}>
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
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
export default ProductItem;
