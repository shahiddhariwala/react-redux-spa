import React, { Component } from "react";
import Person from "../components/Person/Person";
import classes from "./persons.module.css";
import AddPerson from "../components/AddPerson/AddPerson";
import { connect } from "react-redux";

class Persons extends Component {
  render() {
    return (
      <div className={classes.Persons}>
        <AddPerson clicked={this.props.onPersonAddHandler} />
        {this.props.persons.map((person) => {
          return (
            <Person
              key={person.id}
              id={person.id}
              name={person.name}
              age={person.age}
              clicked={() => this.props.onPersonDeleteHandler(person.id)}
            />
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    persons: state.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPersonAddHandler: () => dispatch({ type: "ADD_PERSON" }),
    onPersonDeleteHandler: (id) =>
      dispatch({ type: "DELETE_PERSON", personId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
