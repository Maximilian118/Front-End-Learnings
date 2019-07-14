import React, { useEffect, Suspense } from 'react'
import './scss/App.module.css'
import { Route, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionCreators from '../store/actions/actionCreators'

import Layout from '../containers/Layout/Layout'
import BurgerBuilder from './BurgerBuilder/BurgerBuilder'
import Auth from '../containers/Auth/Auth'
import Spinner from '../components/UI/Spinner/Spinner'
const Checkout = React.lazy(() => import('./Checkout/Checkout'))
const Details = React.lazy(() => import('../containers/Checkout/Details/Details'))
const Orders = React.lazy(() => import('../containers/Orders/Orders'))

const App = props => {
  useEffect(() => props.onAutoSignup(), []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Layout>
          {props.token ? <Route path='/orders' component={Orders}/> : <Redirect to='/'/>}
          <Route path='/checkout' component={Checkout}/>
          <Route path='/details' component={Details}/>
          <Route path='/auth' component={Auth}/>
          <Route exact path='/' component={BurgerBuilder}/>
          <Redirect to='/'/>
        </Layout>
      </Suspense>
    </>
  )
}

const mapStateToProps = state => {
  return {
    token: state.authReducer.token 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAutoSignup: () => dispatch(actionCreators.checkState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
