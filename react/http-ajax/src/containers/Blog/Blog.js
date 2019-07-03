import React, {useState} from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

// import asnycComponent from '../../hoc/AsyncComp';

// const AsyncNewPost = asnycComponent(() => import('./NewPost/NewPost'));

const Blog = () => {
  // State for guarded Components
  const [auth, setAuth] = useState(true);

  return (
    <div className='Blog'>
      <header>
        <nav>
          <ul>
            {/* NavLink simply allows for styling on the link via .active */}
            <li><NavLink to="/posts">Posts</NavLink></li>
            <li><NavLink to={{
              pathname: '/new-post', 
              hash: '#submit',
              search: '?quick-submit=true'}}>New Post</NavLink></li>
          </ul>
        </nav>
      </header>
      <Switch>
        {/* Order is important. */}
        {auth ? <Route path="/new-post" exact component={NewPost}/> : null}
        <Route path="/posts" component={Posts}/>
        {/* Don't need from prop outside of a switch statement */}
        <Redirect from="/" to="/posts" />
        {/* 404 error handling / unspecified route. Will conflict with redirect from '/' */}
        <Route render={() => <h1>Not Found</h1>}/>
      </Switch>
    </div>
  );
};

export default Blog;