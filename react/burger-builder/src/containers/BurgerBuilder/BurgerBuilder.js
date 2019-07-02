import React, {Component} from 'react';
import axios from 'axios';
import classes from './scss/BurgerBuilder.module.css';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import WithClass from '../../hoc/WithClass';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorhandler';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};
class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    canPurchase: false,
    review: false,
    loading: false,
    error: false
  };

  componentDidMount () {
    axios.get('https://burger-builder-703cc.firebaseio.com/ingredients.json')
      .then(res => {
        this.setState({ingredients: res.data})
        console.log(this.state.ingredients)
      })
      .catch(err => {
        this.setState({error: true})
        console.log(err)
      })
  }

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
    this.setState({loading: true})
    const order = {
      ingredients: this.state.ingredients, 
      price: this.state.totalPrice.toFixed(2),
      customer: {
        name: 'Maximilian Crosby',
        address: {
          street: 'Teststreet 1',
          postCode: 'DA156RE',
          country: 'UK'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    };
    axios.post('/orders.json', order)
      .then(res => {
        this.setState({loading: false, review: false});
        console.log(res);
      })
      .catch(err => {
        this.setState({loading: false, review: false});
        console.log(err);
      });
  };

  render() {
    const disable = {
      ...this.state.ingredients
    };
    for (let key in disable) {
      disable[key] = disable[key] <= 0;
    };

    let orderSummary = null;
    let burger = this.state.error ? <p>Ingredients can't load!</p> : <Spinner />

    if (this.state.ingredients) {
      burger = (
        <>
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls 
            price={this.state.totalPrice}
            canPurchase={this.state.canPurchase}
            ingredientAdded={this.addIngredientHandler} 
            ingredientRemoved={this.removeIngredientHandler}
            lessDisabled={disable}
            orderClicked={this.reviewHandler}/>;
        </>
      )
      orderSummary = <OrderSummary 
      ingredients={this.state.ingredients}
      modalClose={this.closeReviewHandler}
      continue={this.continueReviewHandler}
      totalPrice={this.state.totalPrice}/>;
    };

    if (this.state.loading) {
      orderSummary = <Spinner />;
    };

    return (
      <>
        <Modal 
          show={this.state.review} 
          modalClose={this.closeReviewHandler}>
          {orderSummary}
        </Modal>
        <WithClass classes={classes.Main}>
          {burger}
        </WithClass>
      </>
    );
  };
};

export default withErrorHandler(BurgerBuilder, axios);