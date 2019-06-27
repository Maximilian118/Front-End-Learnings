import React, { Component } from 'react';
import axiosInstance from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        clickedPostId: null
    }

    componentDidMount () {
        axiosInstance.get('/posts')
            .then(res => {
                const posts = res.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                })
                this.setState({posts: updatedPosts});
            })
            .catch(err => this.setState({error: true}))
    };

    postClicked = id => {
        this.setState({clickedPostId: id})
    };

    render () {
        let posts = <p className={'Center'}>Something went wrong!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post 
                    key={post.id} 
                    title={post.title} 
                    author={post.author}
                    click={() => this.postClicked(post.id)}/>
            });
        };

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost 
                        id={this.state.clickedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    };
};

export default Blog;