import React from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Courses from './Courses/Courses';
import Users from './Users/Users';

const Main = () => 
  <>
    <nav>
      <NavLink to='/courses'>Courses</NavLink>
      <NavLink to='/users'>Users</NavLink>
    </nav>
    <Switch>
      <Route path='/courses' component={Courses}/>
      <Route path='/users' component={Users}/>
      <Redirect exact from='/' to='/courses' component={Courses}/>
      <Route render={() => <h1>Not Found...</h1>}/>
    </Switch>
  </>

export default Main;