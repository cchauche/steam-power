import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
  detailContainer: {
    flex: '1 1 0',
    textAlign: 'center'
  },
  divider: {
    borderWidth: '0 2px',
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
  },
}));

function BuildingOverview() {
  const classes = useStyles();
  return (
    <Paper variant="outlined" square className={classes.root}>
      <Toolbar>
        <div className={classes.detailContainer}>
          <Typography variant="h6">Last Reading</Typography>
          <Typography variant="subtitle2" component="p">
            1:00pm Sat June 12th 2021
          </Typography>
        </div>
        <div className={classes.detailContainer + ' ' + classes.divider}>
          <Typography variant="h6">Radiator Temp Err</Typography>
          <Typography variant="h6" component="p">
            3 / 50
          </Typography>
        </div>
        <div className={classes.detailContainer}>
          <Typography variant="h6">Unresponsive Nodes</Typography>
          <Typography variant="h6" component="p">
            2 / 50
          </Typography>
        </div>
      </Toolbar>
    </Paper>
  );
}

export default BuildingOverview;
