import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Summary from '../../components/Order/Summary/Summary'

const Checkout = props => {
  const cancelHandler = () => {
    props.history.goBack()
  }

  const continueHandler = () => {
    props.history.replace('/details')
  }
  
  let summary = <Redirect to='/' />
  if (props.ingredients) {
    return <Summary 
      cancelHandler={cancelHandler}
      continueHandler={continueHandler}/>
  }
  return summary
}

const mapStateToProps = state => {
  return {
    ingredients: state.burgerReducer.ingredients
  }
}

export default connect(mapStateToProps)(Checkout)