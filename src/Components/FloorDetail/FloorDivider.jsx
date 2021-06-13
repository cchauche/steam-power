import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardGrid from '../CardGrid/CardGrid';
import SpaceCard from '../CardGrid/Cards/SpaceCard';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
  container: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  title: {
    display: 'inline-block',
  },
  divider: {
    display: 'inline-block',
    marginLeft: theme.spacing(1),
    width: '100%',
  },
}));

function FloorDivider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          1st Floor
        </Typography>
        {''}
        <hr className={classes.divider} />
      </div>
      <CardGrid>
        <SpaceCard />
        <SpaceCard />
        <SpaceCard />
        <SpaceCard />
        <SpaceCard />
      </CardGrid>
    </div>
  );
}

export default FloorDivider;
