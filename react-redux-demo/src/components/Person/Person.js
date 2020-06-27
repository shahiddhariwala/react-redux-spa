import React from 'react';
import classes from './person.module.css';

const person = (props) => {
    return (  <div className={classes.Person}>
        <p className={classes.name}>Shahid</p>
        <p className={classes.age}>Age: 23</p>
    </div>);
}
 
export default person;