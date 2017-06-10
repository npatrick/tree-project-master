import React, { Component } from 'react';
import { render } from 'react-dom';
import FolderList from './folderList.jsx'
import FolderItem from './folderItem.jsx';

export default class App extends Component {
  render() {
    return (
      <FolderList />
    );
  }
};
