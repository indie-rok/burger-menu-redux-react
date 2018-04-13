import React from "react";
import { connect } from "react-redux";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.test = "2";
    const arrayWithQuantity = this.props.items.map(item => {
      const itemId = item.id;
      const quantityOfItem = this.props.cart[itemId];
      item["quantity"] = quantityOfItem;
      return item;
    });

    this.arrayWithOutCeros = arrayWithQuantity.filter(item => {
      return item.quantity > 0;
    });
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  calculateTotal() {
    return this.arrayWithOutCeros.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }
  render() {
    return (
      <div>
        <h1>Your cart</h1>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Ind Price</th>
              <th>Subtototal</th>
            </tr>
            {this.arrayWithOutCeros.map(item => {
              return (
                <tr key={item.id}>
                  <th>{item.name}</th>
                  <th>{item.quantity}</th>
                  <th>{item.price}</th>
                  <th>{item.quantity * item.price}</th>
                </tr>
              );
            })}
            <tr>
              <th> </th>
              <th> </th>
              <th>Total</th>
              <th>{this.calculateTotal()}</th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { items: state.items, cart: state.cart };
};

export default connect(mapStateToProps)(Checkout);
