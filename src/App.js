import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      { name: "HimG", age: 26 },
      { name: "Goyal", age: 27 },
      { name: "NoOne", age: 28 }
    ],
    otherState : 'Some Other value'
  };

  switchNameHandler = (newName) => {
    // DOn't do this ------>  this.state.persons[0].name = 'Himanshu';
    this.setState({persons : [
      { name: newName, age: 26 },
      { name: "Goyal", age: 27 },
      { name: "NoOne", age: 29 },
    ]})
  };

  changedNameHandler = (event) => {
    this.setState({persons : [
      { name: "HimG", age: 26 },
      { name: event.target.value, age: 27 },
      { name: "NoOne", age: 29 },
    ]})
  }

  render() {
    const style = {
      backgroundColor : 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi I'm React APP</h1>
        <button 
        style={style}
        onClick={() => this.switchNameHandler('Himanshu!!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Himanshu Goyal')}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.changedNameHandler}
        >
          I like to play games :-).
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return(
    //   React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is low level React'))
    // );
  }
}

export default App;
