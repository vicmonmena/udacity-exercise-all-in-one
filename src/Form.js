import React, { Component } from 'react';
import Button from './Button.js';
import List from './List.js';

class Form extends Component {
  
  state = {
    userName: '',
    firstName: '',
    lastName: '',
    items: [],
    error: false
  };
  
  handleChange = event => {
    const iFieldName = event.target.name;
    this.setState({ 
	  [iFieldName]: event.target.value
    })
    if (event.target.name === 'userName' && this.state.items.length > 0 && this.state.items.find(item => (item.userName === event.target.value))) {
      this.setState({error: true})
    } else {
      this.setState({error: false})
    }
  }
    
  addItem = event => {
    event.preventDefault();
    const newUser = {
      userName: event.target['userName'].value,
      firstName: event.target['firstName'].value,
	  lastName: event.target['lastName'].value,
      numberOfGames: 0,
    };
    
    this.setState(oldState => ({
      items: [...oldState.items, newUser],
      userName: '',
	  firstName: '',
	  lastName: ''
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  inputsAreEmpty = () => {
    return (this.state.userName === '' || this.state.firtName === '' || this.state.lastName === '' || this.state.error);
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
  	return(
      <div>
      	<h2>Users List</h2>
        {
       	  this.state.error &&
      	  <span className="error">User already exists! Please, try with different user name</span>  
        }
        <form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Enter first name"
    		value={this.state.firstName}
			onChange={this.handleChange}
			name="firstName"
          />
		  <input
            type="text"
            placeholder="Enter last name"
    		value={this.state.lastName}
			onChange={this.handleChange}
			name="lastName"
          />
	      <input
            type="text"
            placeholder="Enter user name"
    		value={this.state.userName}
            onChange={this.handleChange}
			name="userName"
          />
          <Button handleDisabled={this.inputsAreEmpty()} text="+"/>
        </form>

        <List items={this.state.items}/>
      </div>
    )
  }
}

export default Form;