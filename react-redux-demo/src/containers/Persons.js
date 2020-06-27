import React, { Component } from 'react';
import Person from '../components/Person/Person';
import classes from './persons.module.css';
class Persons extends Component {
    state = { 
        persons:[]
     }
    render() { 
        return (  <div className={classes.Persons}>
             <Person/>
             <Person/>
             <Person/><Person/>
             <Person/>
             <Person/>
        </div>);
    }
}
 
export default Persons;