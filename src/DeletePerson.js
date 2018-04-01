

import React, { Component } from 'react';

class DeletePerson extends React.Component { 

    constructor() {
        super();
        this.state = { newPerson: "skriv et index'" }
      }
      handleChange = (evt) => {
        this.setState({ newPerson: evt.target.value })
      }
      handleSubmit = (evt) => {
        evt.preventDefault();
        let personString = this.state.newPerson;
        this.props.deletePerson(personString);
      }

    render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <input value={this.state.newPerson} onChange={this.handleChange} /><br />
              <button>deleteById</button>
            </form>
          </div>
        );
      }
}

export default DeletePerson;
