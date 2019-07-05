import React from 'react';
import { withRouter } from 'react-router-dom';
import classes from './scss/Burger.module.css';
import WithClass from '../../hoc/WithClass';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = props => {
  let ingredientsArr = Object.keys(props.ingredients)
  .map(ingredientType => {
    return [...Array(props.ingredients[ingredientType])].map((_, i) => {
      return <BurgerIngredients key={ingredientType + i} type={ingredientType}/>
    });
  }).reduce((arr, current) => {
    return arr.concat(current)
  }, []);
  if (ingredientsArr.length === 0) {
    ingredientsArr = <p>You need ingredients!</p>
  };

  return (
    <WithClass classes={classes.Burger}>
      <BurgerIngredients type="bread-top"/>
      {ingredientsArr}
      <BurgerIngredients type="bread-bottom"/>
    </WithClass>
  );
};

// allows us to see the nearest wrapping Route's props.
export default withRouter(burger);