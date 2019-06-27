import React from 'react';

import './Post.css';

const post = props => (
    <article className="Post" onClick={props.click}>
        <h6>{props.title}</h6>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

export default post;