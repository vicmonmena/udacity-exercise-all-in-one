import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button.js';

class ListItem extends Component {
  
  state = {
    visible: true,
  };

  handleClick = event => {
  	this.setState(prevState => ({
  	  visible: !prevState.visible,
  	}))
  }

  render() {
    const numberOfGames = this.state.visible ? (this.props.item.numberOfGames + ' games') : ('* games');
	const text = this.state.visible ? "Hide the Number of Games Played" : "Show the Number of Games Played"
  	return(
    	<li>
     		{this.props.item.firstName + ' ' + this.props.item.lastName + ' (' + this.props.item.userName + `) - played ${numberOfGames}`}
			<Button className="smallButton" handleClick={this.handleClick} text={text}/>
		</li>
	)
  }
}

export default ListItem;