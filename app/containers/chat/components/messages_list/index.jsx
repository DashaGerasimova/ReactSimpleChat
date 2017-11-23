// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import styles from './index.css';

const MessagesList = ({ messages }) => (
  <ul>
	{messages.map(message => (
	  <li key={message.id}>{message.text}</li>
	))}
  </ul>
);

export default MessagesList;