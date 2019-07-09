import React, { useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import classes from './scss/Details.module.css'
import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'
import * as actionType from '../../../store/actions'

const Details = props => {
  const [loading, setLoading] = useState(false)

  const orderHandler = () => {
    setLoading(true)

    const formValues = {}
    for (let i in props.details) {
      formValues[i] = props.details[i].value
    }

    const order = ({
      ingredients: props.ingredients,
      price: props.totalPrice.toFixed(2),
      form: formValues
    })

    axios.post('/orders.json', order)
      .then(res => {
        setLoading(false)
        console.log(res)
        props.history.push('/')
      })
      .catch(err => {
        setLoading(false)
        console.log(err)
      })
  }
  
  return loading ? 
    <Spinner /> : (
    <div className={classes.Wrapper}>
      <div className={classes.Details}>
        <h3>Please enter your details!</h3>
        <form onSubmit={orderHandler}>
          <h3>Price with delivery: £{props.totalPrice.toFixed(2)}</h3>
          {Object.entries(props.details).map(Element => <Input
            key={Element[0]}
            invalid={!Element[1].valid}
            validation={Element[1].validation}
            invalidMessage={Element[1].invalidMessage}
            touched={Element[1].touched}
            elementType={Element[1].elementType} 
            elementConfig={Element[1].elementConfig} 
            value={Element[1].value}
            changed={event => props.onInputChange(event, Element[0])}/>)}
          <Button btnType='Success' disabled={!props.formIsValid}>Order</Button>
        </form>
      </div> 
    </div>
  )
}

const mapStateToProps = state => {
  return {
    ingredients: state.burgerReducer.ingredients,
    totalPrice: state.burgerReducer.totalPrice,
    details: state.detailsReducer.orderForm,
    formIsValid: state.detailsReducer.formIsValid
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInputChange: (event, ident) => dispatch({type: actionType.DETAILS, event: event, ident: ident})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)