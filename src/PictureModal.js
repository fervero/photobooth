import React from 'react';
import './App.css';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './PictureModal.css';

export function PictureModal(props) {
  const { onClose, url, ...other } = props;

  function handleClose() {
    onClose();
  }

  return (
    <Dialog
      onClose={handleClose}
      className="picture-modal"
      fullScreen={true}
      {...other}
    >
      <DialogTitle className="modal-title">{url}</DialogTitle>
      <div className="modal-img-container">
        <img src={url} alt="lolcat" />
      </div>
      <div className="email-container">
        <TextField
          required
          id="standard-required"
          label="e-mail"
          margin="normal"
          variant="outlined"
          className="email-input"
        />
        <Button variant="contained" color="primary" className="button">
          Send
        </Button>
        <Button variant="contained" className="button" onClick={handleClose}>
          Cancel
        </Button>
      </div>
    </Dialog>
  );
}
