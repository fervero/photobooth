import React from 'react';
import './App.css';
import { ImageTile } from './ImageTile';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { PictureModal } from './PictureModal';

class App extends React.Component {
  constructor() {
    super();
    this.state = { files: [], open: false, currentPicture: '' };
    fetch('assets/dir.txt')
      .then(response => response.text())
      .then(textFile => textFile.split(/\n/))
      .then(files => files.filter(file => file.includes('.jp')))
      .then(files => this.setState({ files }));
  }

  handleClickOpen = currentPicture => {
    this.setState({ open: true, currentPicture });
  };

  onClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="App">
        <Paper>
          <Grid container spacing={3}>
            {this.state.files.map(file => (
              <ImageTile
                src={file}
                key={file}
                handleClickOpen={this.handleClickOpen}
              />
            ))}
          </Grid>
        </Paper>
        <PictureModal
          open={this.state.open}
          url={this.state.currentPicture}
          onClose={this.onClose}
        />
      </div>
    );
  }
}

export default App;
