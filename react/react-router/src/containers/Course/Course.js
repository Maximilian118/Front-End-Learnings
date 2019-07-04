import React from 'react';

const Course = props => {
    console.log(props)

    return ( 
    <div>
        <h1>{props.match.params.title}</h1>
        <p>You selected the Course with ID: {props.match.params.id}</p>
    </div>)
}
export default Course;