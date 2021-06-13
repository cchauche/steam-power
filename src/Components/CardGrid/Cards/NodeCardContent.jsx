import {
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles,
  Box,
} from '@material-ui/core';
import React from 'react';
import TempDisplay from './TempDisplay';

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: theme.spacing(0, 1),
  },
}));

function NodeCardContent() {
  const classes = useStyles();

  return (
    <>
      <Divider />
      <CardContent>
        <Box textAlign="center">
          <Typography variant="subtitle2" color="textSecondary">F6965BF0B621748E</Typography>
        </Box>
        <Grid container direction="row" alignItems="center">
          <TempDisplay />
          <Divider
            orientation="vertical"
            flexItem
            className={classes.divider}
          />
          <TempDisplay />
        </Grid>
        <Divider />
        <Box textAlign="center" pt={0.5}>
          <Typography variant="subtitle2" color="textSecondary">10:00am Fri June 10 2021</Typography>
        </Box>
      </CardContent>
    </>
  );
}

export default NodeCardContent;
