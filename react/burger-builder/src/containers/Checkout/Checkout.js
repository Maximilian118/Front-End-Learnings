import React from 'react'
import Summary from '../../components/Order/Summary/Summary'

const Checkout = props => {
  const cancelHandler = () => {
    props.history.goBack()
  }

  const continueHandler = () => {
    props.history.replace('/details')
  }

  return (
    <>
      <Summary 
        cancelHandler={cancelHandler}
        continueHandler={continueHandler}/>
    </>
  )
}

export default Checkout