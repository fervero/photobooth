import React from 'react';
import './App.css';
import { ImageTile } from './ImageTile';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class App extends React.Component {
  constructor() {
    super();
    this.state = { files: [] };
    fetch('assets/dir.txt')
      .then(response => response.text())
      .then(textFile => textFile.split(/\n/))
      .then(files => files.filter(file => file.includes('.jp')))
      .then(files => this.setState({ files }));
  }

  render() {
    return (
      <div className="App">
        <Paper>
          <Grid container spacing={3}>
            {this.state.files.map(file => (
              <ImageTile src={file} key={file} />
            ))}
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default App;
