import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import './ImageTile.css';

export function ImageTile(props) {
  console.log(props.url);
  const url = `assets/${props.src}`;
  return (
    <Grid item xs={4}>
      <Card className="img-tile" raised={true}>
        <CardContent className="card-content">
          <img src={url} alt="lolcat" />
        </CardContent>
      </Card>
    </Grid>
  );
}
