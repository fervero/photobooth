import React from 'react';
import './App.css';
import { ImageTile } from './ImageTile';
import Grid from '@material-ui/core/Grid';

class App extends React.Component {
  constructor() {
    super();
    this.state = { files: [] };
    fetch('assets/dir.txt')
      .then(response => response.text())
      .then(textFile => textFile.split(/\n/))
      .then(files => files.filter(file => file.includes('.jpg')))
      .then(files => this.setState({ files }));
  }

  render() {
    return (
      <div className="App">
        <Grid container spacing={3}>
          {this.state.files.map(file => (
            <ImageTile src={file} />
          ))}
        </Grid>
      </div>
    );
  }
}

export default App;
