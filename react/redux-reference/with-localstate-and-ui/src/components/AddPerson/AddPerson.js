import React, { useState } from 'react';
import './AddPerson.css';

const AddPerson = props => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const nameChangeHandler = event => {
        setName(event.target.value)
    }

    const ageChangeHandler = event => {
        setAge(event.target.value)
    }
    
    return (
        <div className="AddPerson">
            <input type='text' placeholder='Name' onChange={nameChangeHandler} value={name}/>
            <input type='number' placeholder='Age' onChange={ageChangeHandler} value={age}/>
            <button onClick={() => props.personAdded(name, age)}>Add Person</button>
        </div>
    )
}
export default AddPerson;