import React, {Component, Fragment} from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    canPurchase: false,
    review: false
  };

  updatePurchaseState = ingredients => {
    const sum = Object.values(ingredients).reduce((sum, el) => {
      return sum + el;
    }, 0)
    this.setState({canPurchase: sum > 0})
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type] + 1;
    const newCount = {...this.state.ingredients};
    newCount[type] = oldCount;

    const price = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice + price;

    this.setState({
      ingredients: newCount, 
      totalPrice: newPrice
    });

    this.updatePurchaseState(newCount);
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type] - 1;
    if (oldCount <= 0 - 1) {
      return;
    }
    const newCount = {...this.state.ingredients};
    newCount[type] = oldCount; 

    const price = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice - price;

    this.setState({
      ingredients: newCount, 
      totalPrice: newPrice
    });

    this.updatePurchaseState(newCount);
  };

  reviewHandler = () => {
    this.setState({review: true});
  };

  closeReviewHandler = () => {
    this.setState({review: false});
  };

  continueReviewHandler = () => {
    alert('you continue!')
  };

  render() {
    const disable = {
      ...this.state.ingredients
    };
    for (let key in disable) {
      disable[key] = disable[key] <= 0;
    };

    return (
      <Fragment>
        <Modal 
          show={this.state.review} 
          modalClose={this.closeReviewHandler}>
          <OrderSummary 
            ingredients={this.state.ingredients}
            modalClose={this.closeReviewHandler}
            continue={this.continueReviewHandler}
            totalPrice={this.state.totalPrice}/>
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
          price={this.state.totalPrice}
          canPurchase={this.state.canPurchase}
          ingredientAdded={this.addIngredientHandler} 
          ingredientRemoved={this.removeIngredientHandler}
          lessDisabled={disable}
          orderClicked={this.reviewHandler}/>
      </Fragment>
    );
  };
};

export default BurgerBuilder;