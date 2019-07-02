import React from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import newPost from './NewPost/NewPost';

const blog = () => {
  return (
    <div className='Blog'>
      <header>
        <nav>
          <ul>
            {/* NavLink simply allows for styling on the link via .active */}
            <li><NavLink to="/">Posts</NavLink></li>
            <li><NavLink to={{
              pathname: '/new-post', 
              hash: '#submit',
              search: '?quick-submit=true'}}>New Post</NavLink></li>
          </ul>
        </nav>
      </header>
      <Switch>
        {/* Order is important. */}
        <Route path="/new-post" exact component={newPost}/>
        <Route path="/" component={Posts}/>
      </Switch>
    </div>
  );
};

export default blog;