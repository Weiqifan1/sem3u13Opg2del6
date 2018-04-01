import React, { Component } from 'react';

class AddPerson extends React.Component { 
    constructor() {
      super();
      this.state = { newPerson: "format: 'fName lName email'" }
    }
    handleChange = (evt) => {
      this.setState({ newPerson: evt.target.value })
    }
    handleSubmit = (evt) => {
      evt.preventDefault();
      let personString = this.state.newPerson;
      let personArr = personString.split(" ");
      let myNewPerson = 
      {
        firstName: personArr[0], 
        lastName: personArr[1], 
        email: personArr[2]
      };
      this.props.savePerson(myNewPerson);
    }

    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.newPerson} onChange={this.handleChange} /><br />
            <button>Save</button>
          </form>
        </div>
      );
    }
  }

  export default AddPerson;