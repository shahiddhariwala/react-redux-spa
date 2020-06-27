import React, { Component } from "react";
import Person from "../components/Person/Person";
import classes from "./persons.module.css";
import { randomName } from "./randomNames/randomName";
import AddPerson from "../components/AddPerson/AddPerson";

class Persons extends Component {
  state = {
    persons: [{ id: 12121, name: "Shahid", age: 23 }],
  };

  /*     componentDidMount()
    {
      console.log(randomName[Math.floor(Math.random() *Math.floor(4946))]);
    } */

  personAddHandler = () => {
    const newPerson = {
      id: Math.floor(Math.random() * Math.floor(100000)),
      name: randomName[Math.floor(Math.random() * Math.floor(4946))],
      age: Math.floor(Math.random() * Math.floor(100)),
    };

    this.setState((prevState) => {
      return { persons: prevState.persons.concat(newPerson) };
    });
  };

  personDeleteHandler = (personId) => {
    this.setState((prevState) => {
      return { persons: prevState.persons.filter((per) => per.id != personId) };
    });
  };
  render() {
    return (
      <div className={classes.Persons}>
        <AddPerson clicked={this.personAddHandler} />
        {this.state.persons.map((person) => {
          return (
            <Person
              key={person.id}
              id={person.id}
              name={person.name}
              age={person.age}
              clicked={() => this.personDeleteHandler(person.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default Persons;
