import React, { Component } from 'react';
import { render } from 'react-dom';

export default class FolderList extends Component {
  constructor(props) {
    super(props);
    this.state = {folder: []};
  }

  componentDidMount() {
    this.openFolder()
  }

  openFolder() {
    return $.getJSON('http://localhost:3000/folders')
      .then((data) => {
        this.setState({ folder: data.results });
      });
  }

  render() {
    const showFolder = this.state.folder;

    return (
      <div>
        <button onClick={this.openFolder}>
          Open Explorer
        </button>
        <div className="container">
          { showFolder }
        </div>
      </div>
    )
  }
};
