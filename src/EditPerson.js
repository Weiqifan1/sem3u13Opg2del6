

import React, { Component } from 'react';

class EditPerson extends React.Component { 

    constructor() {
        super();
        this.state = { newPerson: "format: 'id fName lName email'" }
      }
      handleChange = (evt) => {
        this.setState({ newPerson: evt.target.value })
      }
      handleSubmit = (evt) => {
        evt.preventDefault();
        let personString = this.state.newPerson;
        this.props.editPerson(personString);
      }

    render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <input value={this.state.newPerson} onChange={this.handleChange} /><br />
              <button>editById</button>
            </form>
          </div>
        );
      }
}

export default EditPerson;
