import React, { Component } from 'react';
import Button from './Button.js';
import List from './List.js';

class Form extends Component {
  
  state = {
    value: '',
    items: [],
  };

  handleUsernameChange = event => {
    // this.setState({ value: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    const newUser = {
      userName: event.target['username'].value,
      firstName: event.target['firstname'].value,
	  lastName: event.target['lastname'].value
    };
    
    this.setState(oldState => ({
      items: [...oldState.items, newUser],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
  	return(
      <div>
      	<h2>Users List</h2>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Enter first name"
			name="firstname"
          />
		  <input
            type="text"
            placeholder="Enter last name"
			name="lastname"
          />
	      <input
            type="text"
            placeholder="Enter user name"

            onChange={this.handleUsernameChange}
			name="username"
          />
          <Button disabled={this.inputIsEmpty()} text="Add"/>
        </form>

        <Button handleClick={this.deleteLastItem} handleDisabled={this.noItemsFound()} text="Delete Last Item" />

        <List items={this.state.items}/>
      </div>
    )
  }
}

export default Form;