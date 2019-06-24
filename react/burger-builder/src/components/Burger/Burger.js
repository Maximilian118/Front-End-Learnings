import React from 'react';
import classes from './scss/Burger.module.css';
import WithClass from '../../hoc/WithClass';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = props => {
  return (
    <WithClass classes={classes.Burger}>
      <BurgerIngredients type="bread-top"/>
      <BurgerIngredients type="cheese"/>
      <BurgerIngredients type="meat"/>
      <BurgerIngredients type="bread-bottom"/>
    </WithClass>
  );
};

export default burger;