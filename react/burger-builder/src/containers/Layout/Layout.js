import React, {Component} from 'react'
import classes from './scss/Layout.module.css'
import Toolbar from '../../components/Nav/Toolbar/Toolbar'
import SideDrawer from '../../components/Nav/Sidedrawer/Sidedrawer'
import WithClass from '../../hoc/WithClass'

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  CloseSideHandler = () => {
    this.setState({showSideDrawer: false})
  }

  ToggleSideHandler = () => {
    this.setState((prevState) =>  {
      return {showSideDrawer: !prevState.showSideDrawer}
    })
  }

  render() {
    return (
      <>
        <WithClass classes={classes.Toolbar}>
          <Toolbar open={this.ToggleSideHandler}/>
        </WithClass>
        <SideDrawer 
          open={this.state.showSideDrawer} 
          closed={this.CloseSideHandler}/>
        <main className={classes.Main}>
          {this.props.children}
        </main>
      </>
    )
  }
}

export default Layout;