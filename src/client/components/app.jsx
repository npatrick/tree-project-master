import React, { Component } from 'react';
import { render } from 'react-dom';
import FolderList from './folderList'
import FolderItem from './folderItem';

export default class App extends Component {
  render() {
    return (
      <FolderList />
    );
  }
};
