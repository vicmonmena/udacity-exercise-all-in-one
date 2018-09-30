import React from 'react';
import PropTypes from 'prop-types';

const ListItem = props => (
  <li>{props.item.firstName + ' ' + props.item.lastName + ' (' + props.item.userName + ')'} </li>
)

export default ListItem;