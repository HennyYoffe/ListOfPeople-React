import React from 'react';


export default class Person extends React.Component {  

    

    render() {
        const { allPeople } = this.props;
        return (
            <div className = "row">
                <input value={this.props.firstName}
                    type="text"
                    onChange={this.props.onFirstNameChange} 
                />
                <input value={this.props.lastName}
                    type="text"
                    onChange={this.props.onLastNameChange}
                />
                <input value={this.props.age}
                    type="text"
                onChange={this.props.onAgeChange}
                />
                <button onClick={this.props.addPerson}>Add</button>
                <button onClick={this.props.clearTable}>Clear</button>
                <table className="table table-bordered table-striped">
                    <th>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Age</td>
                    </th>
                    {allPeople.map((i, idx) => <tr key={idx} >
                        <td>{i.firstName}</td>
                        <td>{i.lastName}</td>
                        <td>{i.age}</td>
                    </tr>
)}
                </table>
            </div>
        )
    }
}
