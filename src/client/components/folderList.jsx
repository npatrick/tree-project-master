import React, { Component } from 'react';
import { render } from 'react-dom';
import $ from 'jquery'; // for the sole purpose of api req on this exercise
import FolderItem from './folderItem';
import Folder from '../controllers/traverseFolders';

export default class FolderList extends Component {
  constructor(props) {
    super(props);
    this.state = {children: []};
  }

  componentDidMount() {
    this.getFolders();
  }

  getFolders() {
    return $.get({url: 'http://localhost:3000/folders'})
      .done((data) => {
        data.children.map((child) => {
          return this.setState({children: [...this.state.children, child]});
        })
      });
  }


// passing the state values to the component FolderItem
  renderFolderItem() {
    let currentData = new Folder(this.state);
    return currentData.DFTraverse(FolderItem);
  }

  openFolders() {

  }

  render() {
    // console.log('Status on state children:', this.state.children);
    return (
      <div>
        <button onClick={this.openFolders}>
          Open Explorer
        </button>
        <break />
        <div className="container">
          {this.renderFolderItem.bind(this)()}
        </div>
      </div>
    )
  }
};
