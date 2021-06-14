import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  temp: {
    color: (props) =>
      props.hasTempErr ? theme.palette.info.main : theme.palette.text.primary,
  },
  unresponsive: {
    color: theme.palette.text.disabled,
  },
}));

function RadiatorTempDisplay({ temp, hasTempErr, isUnresponsive }) {
  const classes = useStyles({ hasTempErr });
  return (
    <Grid item>
      <Box textAlign="center">
        <strong className={isUnresponsive ? classes.unresponsive : null}>
          Radiator Temp
        </strong>
        <Typography
          variant="h3"
          component="h6"
          className={isUnresponsive ? classes.unresponsive : classes.temp}
        >
          {temp}
        </Typography>
      </Box>
    </Grid>
  );
}

RadiatorTempDisplay.propTypes = {
  temp: PropTypes.number,
  hasTempErr: PropTypes.bool,
  isUnresponsive: PropTypes.bool,
};

export default RadiatorTempDisplay;
