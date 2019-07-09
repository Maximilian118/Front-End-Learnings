import React from 'react'
import classes from './scss/Sidedrawer.module.css'
import WithClass from '../../../hoc/WithClass'
import Logo from '../../Logo/Logo'
import NavItems from '../Navitems/Navitems'
import Backdrop from '../../UI/Backdrop/Backdrop'

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
          <NavItems />
        </nav>
      </WithClass>
    </>
  )
}

export default sideDrawer