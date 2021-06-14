import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  roomFeel: {
    color: (props) => {
      const feelToColor = {
        // Key values must match ROOM_TEMP_SCALE names
        Cold: theme.palette.info.main,
        Cozy: theme.palette.secondary.main,
        'Rather Warm': theme.palette.warning.dark,
        Hot: theme.palette.error.dark,
      };
      return feelToColor[props.roomFeel];
    },
  },
  unresponsive: {
    color: theme.palette.text.disabled,
  },
}));

function RoomTempDisplay({ temp, roomFeel, isUnresponsive }) {
  const classes = useStyles({ roomFeel });
  return (
    <Grid item>
      <Box textAlign="center">
        <strong className={isUnresponsive ? classes.unresponsive : null}>
          Room Temp
        </strong>
        <Typography
          variant="h5"
          component="p"
          className={isUnresponsive ? classes.unresponsive : classes.roomFeel}
        >
          {temp}
        </Typography>
        <Typography
          variant="button"
          component="p"
          className={isUnresponsive ? classes.unresponsive : classes.roomFeel}
        >
          {roomFeel}
        </Typography>
      </Box>
    </Grid>
  );
}

RoomTempDisplay.propTypes = {
  temp: PropTypes.number,
  roomFeel: PropTypes.string,
  isUnresponsive: PropTypes.bool,
};

export default RoomTempDisplay;
