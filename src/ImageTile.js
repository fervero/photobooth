import React from 'react';
import Grid from '@material-ui/core/Grid';
import './ImageTile.css';

export function ImageTile(props) {
  console.log(props.url);
  const url = `assets/${props.src}`;
  return (
    <Grid item xs={4}>
      <img src={url} />
    </Grid>
  );
}
