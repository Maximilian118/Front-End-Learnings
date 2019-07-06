import React, { useState } from 'react';
import axios from 'axios';
import classes from './scss/Details.module.css';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

const Details = props => {
  const [details, setDetails] = useState({
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        invalidMessage: 'Please enter your name.',
        touched: false,
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Email'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        invalidMessage: 'Please enter your Email.',
        touched: false,
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Street'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        invalidMessage: 'Please enter the first line of your address.',
        touched: false,
      },
      postcode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Postcode'
        },
        value: '',
        validation: {
          required: true,
          minLength: 6,
          maxLength: 7
        },
        valid: false,
        invalidMessage: 'Please enter your post code.',
        touched: false,
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Country'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        invalidMessage: 'Please enter your country.',
        touched: false,
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: '3 Minuets!', displayValue: '3 Minuets!'},
            {value: '1 Hour', displayValue: '1 Hour'},
            {value: '4 Hours', displayValue: '4 Hours'},
            {value: 'Sometime Today', displayValue: 'Sometime Today'},
            {value: 'By Ferry', displayValue: 'By Ferry'}
          ]
        },
        value: '3 Minuets!',
        validation: {},
        valid: true,
      },
      Comments: {
        elementType: 'textarea',
        elementConfig: {
          type: 'text',
          placeholder: 'Tell us about your burger experience!'
        },
        value: '',
        validation: {},
        valid: true,
      },
    }
  });

  const [loading, setLoading] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const orderHandler = () => {
    setLoading(true);

    const formValues = {};
    for (let i in details.orderForm) {
      formValues[i] = details.orderForm[i].value
    }

    const toObject = (URL) => {
      const urlParams = new URLSearchParams(URL);
      const entries = [...urlParams.entries()];
      const entriesNumeric = entries.map(([key, value]) => ([key, Number(value)]));
      const ingredients = Object.fromEntries(entriesNumeric);
      return ingredients;
    }

    const order = ({
      ingredients: toObject(props.match.params.ingredients),
      price: Number(props.match.params.price).toFixed(2),
      form: formValues
    });

    axios.post('/orders.json', order)
      .then(res => {
        setLoading(false);
        console.log(res);
        props.history.push('/');
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  }

  const isValid = (val, rules) => {
    let valid = true
      if (rules.required) {
        valid = val.trim() !== '' && valid // trim = doesn't become true with whitespace.
      }
      if (rules.minLength) {
        valid = val.length >= rules.minLength && valid
      }
      if (rules.maxLength) {
        valid = val.length <= rules.maxLength && valid
      }
    return valid
  }

  // Faster but longer function below. (without valid and touched)
  const inputChangedHandler = (event, obj) => {
    const orderForm = JSON.parse(JSON.stringify(details.orderForm))
    orderForm[obj].value = event.target.value
    orderForm[obj].valid = isValid(orderForm[obj].value, orderForm[obj].validation)
    orderForm[obj].touched = true
    setDetails({orderForm: orderForm})
    let formValidation = true
    for (let i in orderForm) {
      formValidation = orderForm[i].valid && formValidation
    }
    setFormIsValid(formValidation)
  }

  return loading ? 
    <Spinner /> : (
    <div className={classes.Wrapper}>
      <div className={classes.Details}>
        <h3>Please enter your details!</h3>
        <form onSubmit={orderHandler}>
          <h3>Price with delivery: £{Number(props.match.params.price).toFixed(2)}</h3>
          {Object.entries(details.orderForm).map(Element => <Input
            key={Element[0]}
            invalid={!Element[1].valid}
            validation={Element[1].validation}
            invalidMessage={Element[1].invalidMessage}
            touched={Element[1].touched}
            elementType={Element[1].elementType} 
            elementConfig={Element[1].elementConfig} 
            value={Element[1].value}
            changed={event => inputChangedHandler(event, Element[0])}/>)}
          <Button btnType='Success' disabled={!formIsValid}>Order</Button>
        </form>
      </div> 
    </div>
  )
};

export default Details;

// Faster:
// const inputChangedHandler = (event, inputIdent) => {
//   const updateOrderForm = {...details.orderForm}
//   const formElement = {...updateOrderForm[inputIdent]}
//   formElement.value = event.target.value
//   updateOrderForm[inputIdent] = formElement
//   setDetails({orderForm: updateOrderForm})
// }