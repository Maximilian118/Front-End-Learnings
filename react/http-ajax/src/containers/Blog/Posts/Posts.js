import React, {useState, useEffect} from 'react';
import {Link, Route} from 'react-router-dom';
import './Posts.css'
import axiosInstance from '../../../axios';

import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

const Posts = props => {
  const [postArr, setPosts] = useState({posts: []});
  const err = useState({error: false});

  useEffect(() => {
    axiosInstance.get('/posts')
    .then(res => {
      const posts = res.data.slice(0, 4);
      const updatedPosts = posts.map(post => {
        return {
          ...post,
          author: 'Max'
        }
      })
      setPosts({posts: updatedPosts});
    })
    .catch(err => console.log(err));
  }, [])
  
  let posts = <p className={'Center'}>Something went wrong!</p>
  if (!err.error) {
    posts = postArr.posts.map(post => {
      return (
        <Link to={`${props.match.url}/${post.id}`} key={post.id}>
          <Post  
            title={post.title} 
            author={post.author}/>
        </Link> );
    });
  };
  
  return (
    <>
      <section className="Posts">
        {posts}
      </section>
      <Route path={`${props.match.url}/:id`} exact component={FullPost}/>
    </>
  );
}

export default Posts;