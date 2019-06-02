import React from 'react';
import { render } from 'react-dom';
import Person from './listofpeople';


class App extends React.Component {
    state = {     
        allPeople: [],        
            firstName: '',
            lastName: '',
            age: 0
        
        
    }
    addPerson = () => {       
        const copy = [...this.state.allPeople];
        const person = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            age : this.state.age
        }
        copy.push(person);
        this.setState({ allPeople: copy });
    }
    clearTable = () => {
        this.setState({ allPeople: [] });
    }
    onFirstNameChange = e => {
        this.setState({ firstName: e.target.value });
    }
    onLastNameChange = e => {
        this.setState({ lastName: e.target.value });
    }
    onAgeChange = e => {
        this.setState({ age: e.target.value });
    }



    render() {
        return (
            <div className="container" style={{ marginTop: 40 }}>
                <Person
                    allPeople={this.state.allPeople}
                    clearTable={this.clearTable}
                    addPerson={this.addPerson}
                    onFirstNameChange={this.onFirstNameChange}
                    onLastNameChange={this.onLastNameChange}
                    onAgeChange={this.onAgeChange} />
                
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));

//Create a react application that has three textboxes and two buttons(Add and Clear).
//Beneath that, there should be a table.When the Add button is clicked, the texboxes should clear out,
//    and the person should be added to the table.When the clear button is clicked, the table should be cleared.

//As an added bonus, see if you can add a delete button on each row, so that when that button is clicked,
//    only THAT person gets deleted.Good luck!