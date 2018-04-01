import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PersonStore from "./PersonStore";
import AllPersons from "./AllPersons";
import AddPerson from "./AddPerson";
import DeletePerson from "./DeletePerson";
import EditPerson from "./EditPerson";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { persons: PersonStore._persons };
  }

  savePerson = (person) => {
    PersonStore.addPerson(person);
    this.setState({ persons: PersonStore._persons });
  }

  editPerson = (personStringMedId) => {
    PersonStore.editPerson(personStringMedId);
    this.setState({ persons: PersonStore._persons });
  }

  deletePerson = (persIndex) => {
    PersonStore.deletePerson(persIndex);
    this.setState({ persons: PersonStore._persons });
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          react opg 2.6 Christian Lykke cph-cl235
        </p>

        <div className="col1">
          <p className="head">Add Person</p>
          <AddPerson savePerson={this.savePerson} />
        </div>

        <div className="col1">
          <p className="head">Edit Person</p>
          <EditPerson editPerson={this.editPerson} />
        </div>

        <div className="col1">
          <p className="head">chose id to delete</p>
          <DeletePerson deletePerson={this.deletePerson} />
        </div>

        <div className="col2">
          <p className="head">All Persons's</p>
          <AllPersons persons={this.state.persons} />
        </div>
      </div>
    );
  }
}

export default App;

/*
<p>{PersonStore._persons}</p>

<p>{this.state.persons}</p>

*/