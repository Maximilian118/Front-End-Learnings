import React, { useState } from 'react'
import { connect } from 'react-redux'
import classes from './scss/Toolbar.module.css'
import WithClass from '../../../hoc/WithClass'
import Logo from '../../../components/Logo/Logo'
import NavItems from '../NavItems/NavItems'
import MenuLink from '../NavItems/MenuLink/MenuLink'
import NavLink from '../NavItems/NavLink/NavLink'

const Toolbar = props => 
    <header className={classes.Toolbar}>
      <WithClass classes={classes.Flex}>
        <WithClass classes={classes.Logo}>
          <Logo />
        </WithClass>
        {props.userEmail ? <div className={classes.Username}><NavLink link='/auth'>{props.userEmail}</NavLink></div> : null}
      </WithClass>
      <nav className={classes.Desktop}>
        <NavItems />
      </nav>
      <WithClass classes={classes.MenuLinkHide}>
        <MenuLink click={props.open}>Menu</MenuLink>
      </WithClass>
    </header>

const mapStateToProps = state => {
  return {
    userEmail: state.authReducer.userEmail
  }
}

export default connect(mapStateToProps)(Toolbar)