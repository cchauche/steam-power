import { CardContent, Divider, Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';
import RadiatorTempDisplay from './RadiatorTempDisplay';
import { toLocalTimeDateString } from '../../../utils';
import RoomTempDisplay from './RoomTempDisplay';

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: theme.spacing(0, 1),
  },
}));

function NodeCardContent({ node }) {
  const classes = useStyles();

  return (
    <>
      <Divider />
      <CardContent>
        <Grid container direction="row" alignItems="center">
          <RadiatorTempDisplay
            temp={node.radiator_temperature}
            hasTempErr={node.hasTempErr}
          />
          <Divider
            orientation="vertical"
            flexItem
            className={classes.divider}
          />
          <RoomTempDisplay temp={node.room_temperature} roomFeel={node.room_feel}/>
        </Grid>
        <Divider />
        <Box textAlign="center" pt={0.5}>
          <Typography variant="subtitle2" color="textSecondary">
            {toLocalTimeDateString(node.last_message)}
            <br />
            {node.lora_euid}
          </Typography>
        </Box>
      </CardContent>
    </>
  );
}

NodeCardContent.propTypes = {
  node: PropTypes.shape({
    last_message: PropTypes.number,
    lora_euid: PropTypes.string,
    radiator_temperature: PropTypes.number,
    room_temperature: PropTypes.number,
    hasTempErr: PropTypes.bool,
    isUnresponsive: PropTypes.bool,
    room_feel: PropTypes.string,
  }).isRequired,
};

export default NodeCardContent;
