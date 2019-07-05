import React, { useState } from 'react';
import classes from './scss/Details.module.css';
import Button from '../../../components/UI/Button/Button';

const Details = () => {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    address: {
      street: '',
      postCode: ''
    }   
  });

  return (
    <div className={classes.Details}>
      <h4>Please enter your details!</h4>
      <form>
        <input type='text' name='name' placeholder='Your Full Name' />
        <input type='text' name='email' placeholder='Your Email Address' />
        <input type='text' name='street' placeholder='Your Street' />
        <input type='text' name='postcode' placeholder='Your Post Code' />
        <Button btnType='success'>Order</Button>
      </form>
    </div>
  )
};

export default Details;