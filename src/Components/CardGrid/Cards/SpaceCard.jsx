import React from 'react';
import { Card, CardHeader, Grid, makeStyles } from '@material-ui/core';
import NodeCardContent from './NodeCardContent';

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 200,
  },
}));

function SpaceCard() {
  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.card}>
        <CardHeader title={'Living Room'}></CardHeader>
        <NodeCardContent />
        <NodeCardContent />
      </Card>
    </Grid>
  );
}

export default SpaceCard;
