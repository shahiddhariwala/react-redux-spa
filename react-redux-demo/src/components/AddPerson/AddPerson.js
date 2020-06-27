import React from 'react';
import "./AddPerson.css";
const addPerson = (props) => {
    return ( <div className="AddPerson-btn" onClick={props.clicked}>
    Add Person
</div> );
}
 
export default addPerson;