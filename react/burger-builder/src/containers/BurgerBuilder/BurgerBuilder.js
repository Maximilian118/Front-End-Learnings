import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'
import classes from './scss/BurgerBuilder.module.css'
// UI
import Modal from '../../components/UI/Modal/Modal'
import Spinner from '../../components/UI/Spinner/Spinner'
// Higher Order Components
import WithClass from '../../hoc/WithClass'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorhandler'
// Components
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
// Action Functions
import * as actionType from '../../store/actions'

const BurgerBuilder = props => {
  const [review, setReview] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    axios.get('/ingredients.json')
      .then(res => {
        props.initialIngredients(res.data)
      })
      .catch(err => {
        setError(true)
        console.log(err)
      })
  }, [])

  const reviewHandler = () => {
    setReview(true)
  }

  const closeReviewHandler = () => {
    setReview(false)
  }

  const disable = {
    ...props.ingredients
  }
  for (let key in disable) {
    disable[key] = disable[key] <= 0
  }

  let orderSummary = null
  let burger = error ? <p className={classes.err}>Ingredients can't load!</p> : <Spinner />

  if (props.ingredients) {
    burger = (
      <>
        <Burger ingredients={props.ingredients}/>
        <BuildControls 
          price={props.totalPrice}
          canPurchase={props.canPurchase}
          ingredientAdded={props.onIngredientAdded}
          ingredientRemoved={props.onIngredientRemoved}
          lessDisabled={disable}
          orderClicked={reviewHandler}/>
      </>
    )
    orderSummary = <OrderSummary 
    ingredients={props.ingredients}
    modalClose={closeReviewHandler}
    totalPrice={props.totalPrice}/>
  }

  return (
    <>
      <Modal 
        show={review} 
        modalClose={closeReviewHandler}>
        {orderSummary}
      </Modal>
      <WithClass classes={classes.Main}>
        {burger}
      </WithClass>
    </>
  )
}

const mapStateToProps = state => {
  return {
    ingredients: state.burgerReducer.ingredients,
    totalPrice: state.burgerReducer.totalPrice,
    canPurchase: state.burgerReducer.canPurchase
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initialIngredients: ingredients => dispatch({type: actionType.INIT, ingredients: ingredients}),
    onIngredientAdded: ingredient => dispatch({type: actionType.ADD, ingredient: ingredient}),
    onIngredientRemoved: ingredient => dispatch({type: actionType.REMOVE, ingredient: ingredient})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios))