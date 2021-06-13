import React from 'react';
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
}));

function RoomTempDisplay({ temp, roomFeel }) {
  const classes = useStyles({ roomFeel });
  return (
    <Grid item>
      <Box textAlign="center">
        <strong>Room Temp</strong>
        <Typography variant="h5" component="p" className={classes.roomFeel}>
          {temp}
        </Typography>
        <Typography variant="button" component="p" className={classes.roomFeel}>
          {roomFeel}
        </Typography>
      </Box>
    </Grid>
  );
}

export default RoomTempDisplay;
