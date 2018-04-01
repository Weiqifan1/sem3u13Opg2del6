import React, { Component } from 'react';


function PersonAttributes(props) {
  return <tr><td>{props.myKey}</td><td>{props.firstName}</td><td>{props.lastName}</td><td>{props.email}</td></tr>;
}

function PersonTable(props) {
  const persons = props.persons;

  const personRows = persons.map((eachItem, i) => 
      <PersonAttributes key = {i} myKey = {i} firstName = {eachItem.firstName} lastName = {eachItem.lastName} email = {eachItem.email} />    
  );
  return (
      <table><tbody><tr>
        <th>key</th>
      <th>firstName</th>
      <th>lastName</th> 
      <th>email</th>
      </tr>
      {personRows}</tbody></table>
  );
}


class AllPersons extends React.Component { 
    constructor(props) {
      super(props);
    }

    render() {
      const lis = this.props.persons.map((j, i) => 
      (<li key={i}>{j.firstName + " " + j.lastName + " " + j.email}</li>))
      
      return (
        
        < PersonTable persons = {this.props.persons} />
      );
    }
  }

  export default AllPersons;
