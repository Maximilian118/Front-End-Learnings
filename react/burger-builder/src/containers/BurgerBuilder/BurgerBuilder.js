import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import classes from './scss/BurgerBuilder.module.css'
// UI
import Modal from '../../components/UI/Modal/Modal'
import Spinner from '../../components/UI/Spinner/Spinner'
import PopUp from '../../components/UI/PopUp/PopUp'
// Higher Order Components
import WithClass from '../../hoc/WithClass'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorhandler'
// Components
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
// Action Functions
import * as actionCreators from '../../store/actions/actionCreators'

const BurgerBuilder = props => {
  const [review, setReview] = useState(false)

  useEffect(() => {
    props.onSetRedirect('/')
    if (!props.token) {props.onInitIngredients()}
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (props.popUp) {
    setTimeout(() => props.onPopUp(), 2000)
  }

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
  let burger = props.error ? <p className={classes.err}>Ingredients can't load!</p> : <Spinner />

  if (props.ingredients) {
    burger = (
      <>
        <Burger ingredients={props.ingredients} />
        <BuildControls 
          price={props.totalPrice}
          canPurchase={props.canPurchase} 
          ingredientAdded={props.onIngredientAdded} 
          ingredientRemoved={props.onIngredientRemoved} 
          lessDisabled={disable} 
          orderClicked={reviewHandler} />
      </>
    )
    orderSummary = 
      <OrderSummary 
        ingredients={props.ingredients} 
        modalClose={closeReviewHandler} 
        totalPrice={props.totalPrice} />
  }

  return (
    <>
      {props.popUp ? 
      <div className={classes.MovePopUp}>
        <PopUp message={props.popUp}/>
      </div> : null}
      <Modal show={review} modalClose={closeReviewHandler}>
        {orderSummary}
      </Modal>
      <WithClass classes={classes.Main}>{burger}</WithClass>
    </>
  )
}

const mapStateToProps = state => {
  return {
    ingredients: state.burgerReducer.ingredients,
    totalPrice: state.burgerReducer.totalPrice,
    canPurchase: state.burgerReducer.canPurchase,
    error: state.burgerReducer.error,
    popUp: state.detailsReducer.popUp,
    token: state.authReducer.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitIngredients: () => dispatch(actionCreators.init()),
    onIngredientAdded: ingredient => dispatch(actionCreators.add(ingredient)),
    onIngredientRemoved: ingredient => dispatch(actionCreators.remove(ingredient)),
    onPopUp: () => dispatch(actionCreators.popUpTimeout()),
    onSetRedirect: path => dispatch(actionCreators.setRedirect(path))
  }
}
// prettier-ignore
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios))
