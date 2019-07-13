import React from 'react'
import { connect } from 'react-redux'
import classes from './scss/Sidedrawer.module.css'
import WithClass from '../../../hoc/WithClass'
import Logo from '../../Logo/Logo'
import NavItems from '../Navitems/Navitems'
import Backdrop from '../../UI/Backdrop/Backdrop'
import NavLink from '../Navitems/Navlink/Navlink'

const sideDrawer = props => {
  let openClose = [classes.SideDrawer, classes.Close]
  if (props.open) {
    openClose = [classes.SideDrawer, classes.Open]
  }

  return (
    <>
      <Backdrop show={props.open} clicked={props.closed}/>
      <WithClass classes={openClose.join(' ')}>
        <WithClass classes={classes.Logo}>
          <Logo />
        </WithClass>
        <nav>
          {props.userEmail ? <div className={classes.Username}><NavLink link=''>{props.userEmail}</NavLink></div> : null}
          <NavItems clicked={props.closed}/>
        </nav>
      </WithClass>
    </>
  )
}

const mapStateToProps = state => {
  return {
    userEmail: state.authReducer.userEmail
  }
}

export default connect(mapStateToProps)(sideDrawer)