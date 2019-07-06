import React, { useEffect, useState } from 'react';
import classes from './scss/Orders.module.css';
import axios from 'axios';

import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorhandler';

const Orders = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get('/orders.json')
      .then(res => {
        let ordersArr = [];
        for (let key in res.data) {
          ordersArr.push({...res.data[key], id: key})
        }
        setOrders(ordersArr)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }, [])

  return loading ?
    <Spinner /> : (
    <div className={classes.Orders}>
      {orders.map(order => <Order key={order.id} ingredients={Object.entries(order.ingredients)} price={order.price}/>)}
    </div>
  )
};

export default withErrorHandler(Orders, axios);