import React, { Component } from 'react';
import { render } from 'react-dom';

export default class FolderItem extends Component {
  render() {
    console.log('Val of props name', this.props.name);
    return (
      <ul>
        <li>{this.props.name}</li>
      </ul>
    )
  }
};
