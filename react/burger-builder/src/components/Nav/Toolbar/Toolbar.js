import React from 'react'
import classes from './scss/Toolbar.module.css'
import WithClass from '../../../hoc/WithClass'
import Logo from '../../../components/Logo/Logo'
import NavItems from '../Navitems/Navitems'
import MenuLink from '../Navitems/Menulink/Menulink'

const toolbar = props => (
  <header className={classes.Toolbar}>
    <WithClass classes={classes.Flex}>
      <WithClass classes={classes.Logo}>
        <Logo />
      </WithClass>
      <WithClass classes={classes.MenuLinkHide}>
        <MenuLink click={props.open}>Menu</MenuLink>
      </WithClass>
    </WithClass>
    <nav className={classes.Desktop}>
      <NavItems />
    </nav>
  </header>
)
export default toolbar