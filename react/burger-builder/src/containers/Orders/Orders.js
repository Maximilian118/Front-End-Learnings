import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import classes from './scss/Orders.module.css'
import axios from 'axios'

import Order from '../../components/Order/Order'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorhandler'
import * as actionCreator from '../../store/actions/actionCreators'

const Orders = props => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { props.onGetOrders() }, [])

  return props.loading ? <Spinner /> :
    <div className={classes.Orders}>
      {props.orders.map(order => <Order 
        key={order.id} 
        ingredients={Object.entries(order.ingredients)} 
        price={order.price}/> )}
    </div>
}

const mapStateToProps = state => {
  return {
    orders: state.detailsReducer.orders,
    loading: state.detailsReducer.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetOrders: () => dispatch(actionCreator.getOrders())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));