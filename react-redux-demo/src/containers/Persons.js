import React, { Component } from "react";
import Person from "../components/Person/Person";
import classes from "./persons.module.css";
import {randomName} from "./randomNames/randomName";

class Persons extends Component {
  state = {
    persons: [
      { id: 12121, name: "Shahid", age: 23 },
      { id: 1223, name: "Zain", age: 18 },
      { id: 23123423, name: "Luffy", age: 19 },
    ],
  };

    componentDidMount()
    {
      console.log(randomName[Math.floor(Math.random() *Math.floor(4946))]);
    }

  personAddHandler = () => {
    const newPerson = {
      id: Math.floor(Math.random() * Math.floor(100000)),
      name: randomName[Math.floor(Math.random() *Math.floor(4946))],
      age: Math.floor(Math.random() * Math.floor(100)),
    };

    this.setState((prevState) => {
      return { persons: prevState.persons.concat(newPerson) };
    });
  };
  personDeleteHandler = () => {};
  render() {
    return (
      <div className={classes.Persons}>
        {this.state.persons.map((person) => {
          return <Person key={person.id} name={person.name} age={person.age} />;
        })}
      </div>
    );
  }
}

export default Persons;
