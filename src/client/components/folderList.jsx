import React, { Component } from 'react';
import { render } from 'react-dom';
import $ from 'jquery'; // for the sole purpose of api req on this exercise
import FolderItem from './folderItem.jsx';

export default class FolderList extends Component {
  constructor(props) {
    super(props);
    this.state = {children: []};
  }

  componentDidMount() {
    this.getFolders()
  }

  getFolders() {
    return $.get({url: 'http://localhost:3000/folders'})
      .done((data) => {
        data.children.map((child) => {
          return this.setState({children: [...this.state.children, child]});
        })
      });
  }

  renderFolderItem() {
    return this.state.children.map(child => {
      return (
        <FolderItem
          name={child.name}
          type={child.type}
          private={child.private}
          children={child.children} />
      )
    })
  }

  openFolders() {

  }

  render() {
    console.log('Status on state children:', this.state.children);
    return (
      <div>
        <button onClick={this.openFolders}>
          Open Explorer
        </button>
        <div className="container">
          <ul>
            {this.renderFolderItem.bind(this)()}
          </ul>
        </div>
      </div>
    )
  }
};
