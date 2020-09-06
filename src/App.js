import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      { id: "Sdg1", name: "HimG", age: 26 },
      { id: "drgrb2", name: "Goyal", age: 27 },
      { id: "liji3", name: "NoOne", age: 28 },
    ],
    otherState: "Some Other value",
    isPersonVisible: false,
  };

  // switchNameHandler = (newName) => {
  //   // DOn't do this ------>  this.state.persons[0].name = 'Himanshu';
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 26 },
  //       { name: "Goyal", age: 27 },
  //       { name: "NoOne", age: 29 },
  //     ],
  //   });
  // };

  changedNameHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex((p) => p.id === personId);
    const personJS = this.state.persons[personIndex];

    const person = { ...personJS };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  togglePersonHandler = () => {
    const personVisibility = this.state.isPersonVisible;
    this.setState({
      isPersonVisible: !personVisibility,
    });
  };

  deletePersonHandler = (personIndex) => {
    // const personsArray = this.state.persons.slice();
    const personsArray = [...this.state.persons];
    personsArray.splice(personIndex, 1);
    this.setState({
      persons: personsArray,
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.isPersonVisible) {
      persons = (
        <div>
          {this.state.persons.map((person, personIndex) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(personIndex)}
                key={person.id}
                changed={(event) => this.changedNameHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi I'm React APP</h1>
        {/* <button 
        style={style}
        onClick={() => this.switchNameHandler('Himanshu!!')}>Switch Name</button> */}
        <button style={style} onClick={this.togglePersonHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return(
    //   React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is low level React'))
    // );
  }
}

export default App;
