import React from 'react';
import { Route } from 'react-router-dom';
// import axios from 'axios';

import Summary from '../../components/Order/Summary/Summary'
import Details from './Details/Details';

const Checkout = props => {
  const cancelHandler = () => {
    props.history.goBack();
  }

  const continueHandler = () => {
    props.history.replace(`${props.match.url}/details`);
  }

  const urlParams = new URLSearchParams(props.match.params.ingredients);
  const entries = [...urlParams.entries()];
  const entriesNumeric = entries.map(([key, value]) => ([key, Number(value)]));
  const params = Object.fromEntries(entriesNumeric);


  console.log(props.match)
  return (
    <div>
      <Summary 
        ingredients={params}
        cancelHandler={cancelHandler}
        continueHandler={continueHandler}/>
      <Route path={`${props.match.url}/details`} component={Details}/>
    </div>
  )
}

export default Checkout;

// this.setState({loading: true})
    // const order = {
    //   ingredients: this.state.ingredients, 
    //   price: this.state.totalPrice.toFixed(2),
    //   customer: {
    //     name: 'Maximilian Crosby',
    //     address: {
    //       street: 'Teststreet 1',
    //       postCode: 'DA156RE',
    //       country: 'UK'
    //     },
    //     email: 'test@test.com'
    //   },
    //   deliveryMethod: 'fastest'
    // };
    // axios.post('/orders.json', order)
    //   .then(res => {
    //     this.setState({loading: false, review: false});
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     this.setState({loading: false, review: false});
    //     console.log(err);
    //   });