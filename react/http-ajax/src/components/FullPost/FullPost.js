import React, { Component } from 'react';
import axios from "axios";

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    };

    componentDidUpdate () {
        if (this.props.id) {
            if (!this.state.loadedPost || this.state.loadedPost && this.state.loadedPost.id !== this.props.id) {
                axios.get(`/posts/${this.props.id}`)
                .then(res => this.setState({loadedPost: res.data}))
                .catch(err => console.log(err))
            };
        };
    };

    deleteHandler = () => {
        axios.delete(`/posts/${this.props.id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    };
    
    render () {
        let post = <p className={'selectAPost'}>Please select a Post!</p>;
        if (this.props.id) {
            post = <p className={'selectAPost'}>Loading...</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deleteHandler}className="Delete">Delete</button>
                    </div>
                </div>
            );
        };
        return post;
    };
}

export default FullPost;