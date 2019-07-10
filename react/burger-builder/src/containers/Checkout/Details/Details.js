import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorhandler'
import classes from './scss/Details.module.css'
import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'
import * as actionCreator from '../../../store/actions/actionCreators'

const Details = props => {
  const orderHandler = () => {
    const formValues = {}
    for (let i in props.details) {
      formValues[i] = props.details[i].value
    }
  
    const order = {
      ingredients: props.ingredients,
      price: props.totalPrice.toFixed(2),
      form: formValues
    }
  
    props.onPost(order)
    props.history.push('/')
  }

  return props.loading ? <Spinner /> :
    <div className={classes.Wrapper}>
      <div className={classes.Details}>
        <h3>Please enter your details!</h3>
        <form onSubmit={orderHandler}>
          <h3>Price with delivery: £{props.totalPrice.toFixed(2)}</h3>
          {Object.entries(props.details).map(Element => ( <Input 
            key={Element[0]} 
            invalid={!Element[1].valid} 
            validation={Element[1].validation} 
            invalidMessage={Element[1].invalidMessage} 
            touched={Element[1].touched} 
            elementType={Element[1].elementType} 
            elementConfig={Element[1].elementConfig} 
            value={Element[1].value} 
            changed={event => props.onInputChange(event, Element[0])} /> ))}
          <Button btnType='Success' disabled={!props.formIsValid}>
            Order
          </Button>
        </form>
      </div>
    </div>
}

const mapStateToProps = state => {
  return {
    ingredients: state.burgerReducer.ingredients,
    totalPrice: state.burgerReducer.totalPrice,
    details: state.detailsReducer.orderForm,
    formIsValid: state.detailsReducer.formIsValid,
    loading: state.detailsReducer.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPost: order => dispatch(actionCreator.postForm(order)),
    onInputChange: (event, ident) => dispatch(actionCreator.details(event, ident))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Details, axios))
