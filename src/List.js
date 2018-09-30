import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem.js';

const List = props => {
  if (props.items) {
    return(
      <div>
        <p className="items">Items</p>
        <ol className="item-list">
          {props.items.map((item, index) => <ListItem key={index} item={item}/>)}
        </ol>
      </div>
  	)
  } else {
    return(
      <div>
       <span>Any user registred yet</span>
	  </div>
    )
  }
}

List.propTypes = {
  items: PropTypes.array.isRequired
}

export default List;