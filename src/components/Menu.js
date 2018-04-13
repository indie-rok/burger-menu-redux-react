import React from "react";
import { connect } from "react-redux";
import increaseFoodCounter from "../actions/increaseFoodCounter";
import decreaseFoodCounter from "../actions/decreaseFoodCounter";
import MenuItem from "./MenuItem";

class Menu extends React.Component {
  constructor() {
    super();
    this.increaseFood = this.increaseFood.bind(this);
    this.decreaseFood = this.decreaseFood.bind(this);
  }

  increaseFood(event) {
    this.props.increaseFoodCounter(event.target.dataset.itemId);
  }

  decreaseFood(event) {
    this.props.decreaseFoodCounter(event.target.dataset.itemId);
  }

  render() {
    return (
      <div>
        {this.props.items.map(item => {
          return (
            <MenuItem
              key={item.id}
              item={item}
              cart={this.props.cart[item.id]}
              increaseFood={this.increaseFood}
              decreaseFood={this.decreaseFood}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { items: state.items, cart: state.cart };
};

const mapDispatchToProps = dispatch => {
  return {
    increaseFoodCounter: itemId => dispatch(increaseFoodCounter(itemId)),
    decreaseFoodCounter: itemId => dispatch(decreaseFoodCounter(itemId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
