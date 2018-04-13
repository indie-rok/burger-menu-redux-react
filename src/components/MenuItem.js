import React from "react";

class MenuItem extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.item.name}</p>
        <p>{this.props.item.price}</p>
        <button
          data-item-id={this.props.item.id}
          onClick={this.props.decreaseFood}
        >
          -
        </button>
        <input readOnly type="text" value={this.props.cart} />
        <button
          data-item-id={this.props.item.id}
          onClick={this.props.increaseFood}
        >
          +
        </button>
      </div>
    );
  }
}

export default MenuItem;
