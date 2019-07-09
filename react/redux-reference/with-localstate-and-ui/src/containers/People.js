import React from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import * as actionType from '../store/actions'

const People = props => 
    <div>
        <AddPerson personAdded={(name, age) => props.personAddedHandler(Math.random(), name, age)}/>
        {props.people.map(person => (
            <Person 
                key={person.id}
                name={person.name} 
                age={person.age} 
                clicked={() => props.personDeletedHandler(person.id)}/>
        ))}
    </div>

const mapStateToProps = state => {
    return {
        people: state.people
    }
}

const mapDispatchToProps = dispatch => {
    return {
        personAddedHandler: (id, name, age) => dispatch({type: actionType.ADD, id: id, name: name, age: age}),
        personDeletedHandler: id => dispatch({type: actionType.DELETE, id: id})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(People);