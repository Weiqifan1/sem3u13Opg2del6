import React, { Component } from 'react';

class PersonStore {
    constructor(persons) {
       this._persons = persons;
    }

    deletePerson(persIndex) {

        this._persons.splice(persIndex,1);
    }

    editPerson(personStringMedId) {

        let personString = personStringMedId;
        let personArr = personString.split(" ");
        let myNewPerson = 
        {
            firstName: personArr[1], 
            lastName: personArr[2], 
            email: personArr[3]
        };

        this._persons[personArr[0]] = myNewPerson;
    }

    addPerson(person) {
      this._persons.push(person);
    }
    getRandomPerson() {
      return this._persons[Math.floor(Math.random() * this._persons.length)];
    }
    get persons() {
      return this._persons;
    }
  }
  let personsList = [
    { 
        firstName: "Kurt", 
        lastName: "Wonnegut", 
        email: "kw@gmail.com"
     },
     { 
        firstName: "Christian", 
        lastName: "Lykke", 
        email: "cmlykke@hotmail.com"
     },
     { 
        firstName: "Anders", 
        lastName: "And", 
        email: "AAnd@gmail.com"
     },
     
     
     
  ]
  
  export default new PersonStore(personsList);
