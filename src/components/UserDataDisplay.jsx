import React, { Component } from 'react';
import './UserDataDisplay.css';

class UserDataDisplay extends Component {
    constructor() {
        super();
        this.state = {
            users: [
                { id: '1', name: 'Joe', role: 'Developer', age: 31, experience: 11 },
                { id: '2', name: 'Hill', role: 'Designer', age: 26, experience: 4 },
                { id: '3', name: 'John', role: 'Teacher', age: 24, experience: 2 },
                { id: '4', name: 'Sam', role: 'Entrepreneur', age: 58, experience: 25 },
                { id: '5', name: 'Jack', role: 'Designer', age: 43, experience: 18 }
            ]
        };
    }

    render() {
        return (
            <React.Fragment>
                <h2>Display All Users</h2>
                <div className="container">
                    <div className="user-data">
                        {this.state.users.map(user => (
                            <React.Fragment key={user.id}>
                                <ul>
                                    <li className="single-line"><span>ID: </span>{user.id}</li>
                                    <li className="single-line"><span>Name: </span>{user.name}</li>
                                    <li className="single-line"><span>Role: </span>{user.role}</li>
                                </ul>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <h2>Display Users by Role</h2>
                <div className="filterByRole">
                    {this.state.users
                        .filter(user => user.role === 'Designer')
                        .map(user => (
                            <ul key={user.id}>
                                <li><span>ID: </span>{user.id}</li>
                                <li><span>Name: </span>{user.name}</li>
                                <li><span>Role: </span>{user.role}</li>
                            </ul>
                        ))}
                </div>

                <h3>Filter Users Starting with 'J'</h3>
                <div className="filterByName">
                    {this.state.users
                        .filter(user => user.name.startsWith('J'))
                        .map(user => (
                            <ul key={user.id}>
                                <li><span>ID: </span>{user.id}</li>
                                <li><span>Name: </span>{user.name}</li>
                                <li><span>Role: </span>{user.role}</li>
                            </ul>
                        ))}
                </div>

                <h3>Filter Users by Age (Greater than 28 and lessthen = 50)</h3>
                <div className="filterByAge">
                    {this.state.users
                        .filter(user => user.age > 28 && user.age <= 50)
                        .map(user => (
                            <ul key={user.id}>
                                <li><span>ID: </span>{user.id}</li>
                                <li><span>Name: </span>{user.name}</li>
                                <li><span>Role: </span>{user.role}</li>
                            </ul>
                        ))}
                </div>

                <h3>Total Experience of Designers</h3>
                <div className="totalExperience">
                    {this.state.users
                        .filter(user => user.role === 'Designer')
                        .reduce((totalExperience, user) => totalExperience + user.experience, 0)}
                </div>
            </React.Fragment>
        );
    }
}

export default UserDataDisplay;
