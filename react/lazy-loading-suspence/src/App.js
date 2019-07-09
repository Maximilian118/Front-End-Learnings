import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import User from './containers/User';
import Welcome from './containers/Welcome';

// Instead of having to make a hoc we can use React.lazy().
const Posts = React.lazy(() => import('./containers/Posts'));

class App extends Component {
  render() {
    return (
      // Basename prefixes every route URL.
      // <BrowserRouter basename='/my-app'>
      <BrowserRouter>
        <>
          <nav>
            <NavLink to="/user">User Page</NavLink> |&nbsp;
            <NavLink to="/posts">Posts Page</NavLink>
          </nav>
          <Route path="/" component={Welcome} exact />
          <Route path="/user" component={User} />
          <Route path="/posts" render={() => 
          // Suspense can be used for more things in the future but for now it can be used
          // to wrap asynchronously rendered components and add a loading message.
            <Suspense fallback={<div>Loading...</div>}>
              <Posts />
            </Suspense>} />
        </>
      </BrowserRouter>
    );
  }
}

export default App;

// Only consider using lazy loading for big, slow blocks of data.
