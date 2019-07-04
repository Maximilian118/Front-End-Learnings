import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';             
import './Courses.css';

import Course from '../Course/Course';

const Courses = props => {
    const [state, setState] = useState({
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    });

    return (
        <div>
            <h1>Amazing Udemy Courses</h1>
            <section className="Courses">
                {
                    state.courses.map( course => {
                        return (
                            <Link to={`${props.match.url}/${course.id}/${course.title}`} key={course.id}>
                                <article className="Course">{course.title}</article>
                            </Link>);
                    } )
                }
            </section>
            <Route path={`${props.match.url}/:id/:title`} component={Course}/>
        </div>
    );
}

export default Courses;