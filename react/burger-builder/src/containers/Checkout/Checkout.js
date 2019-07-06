import React from 'react';
import Summary from '../../components/Order/Summary/Summary'

const Checkout = props => {
  const cancelHandler = () => {
    props.history.goBack();
  }

  const continueHandler = () => {
    props.history.replace(`${props.match.url}/details`);
  }

  const toObject = (URL) => {
    const urlParams = new URLSearchParams(URL);
    const entries = [...urlParams.entries()];
    const entriesNumeric = entries.map(([key, value]) => ([key, Number(value)]));
    const ingredients = Object.fromEntries(entriesNumeric);
    return ingredients;
  }

  return (
    <>
      <Summary 
        ingredients={toObject(props.match.params.ingredients)}
        cancelHandler={cancelHandler}
        continueHandler={continueHandler}/>
    </>
  )
}

export default Checkout;