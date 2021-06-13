import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  temp: {
    color: (props) =>
      props.hasTempErr ? theme.palette.info.main : theme.palette.text.secondary,
  },
}));

function RadiatorTempDisplay({ temp, hasTempErr }) {
  const classes = useStyles({ hasTempErr });
  return (
    <Grid item>
      <Box textAlign="center">
        <strong>Radiator Temp</strong>
        <Typography variant="h3" component="h6" className={classes.temp}>
          {temp}
        </Typography>
      </Box>
    </Grid>
  );
}

RadiatorTempDisplay.propTypes = {
  temp: PropTypes.number,
  hasTempErr: PropTypes.bool,
};

export default RadiatorTempDisplay;
