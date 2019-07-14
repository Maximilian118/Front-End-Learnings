import React from 'react'
import { connect } from 'react-redux'
import classes from './scss/NavItems.module.css'
import NavLink from './NavLink/NavLink'
import * as actionCreator from '../../../store/actions/actionCreators'

export const NavItems = props =>
  <ul className={classes.NavItems}>
      <NavLink link='/' onClick={props.clicked}>Burger Builder</NavLink>
      {props.token ? <NavLink link='/orders' onClick={props.clicked}>Orders</NavLink> : null}
      {props.token ? <NavLink link='/' onClick={props.onLogOut}>Log Out</NavLink> : <NavLink link='/auth' onClick={props.clicked}>Log In</NavLink>}
  </ul>

const mapStateToProps = state => {
  return {
    token: state.authReducer.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogOut: () => dispatch(actionCreator.logOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavItems)