import React from 'react';
import classes from './person.module.css';

const person = (props) => {
    return (  <div className={classes.Person}>
        <p className={classes.name}>{props.name}</p>
    <p className={classes.age}>Age: {props.age}</p>
    </div>);
}
 
export default person;