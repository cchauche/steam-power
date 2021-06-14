import { CardContent, Divider, Grid, Typography, Box } from '@material-ui/core';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';
import RadiatorTempDisplay from './RadiatorTempDisplay';
import { toLocalTimeDateString } from '../../utils';
import RoomTempDisplay from './RoomTempDisplay';

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: theme.spacing(0, 1),
  },
  unresponsiveTime: {
    color: (node) => {
      return node.isUnresponsive
        ? theme.palette.error.main
        : theme.palette.text.secondary;
    },
    fontWeight: 700,
  },
  errIcon: {
    color: theme.palette.error.main,
    position: 'absolute',
    right: 0,
    top: '5px',
  },
}));

function NodeCardContent({ node }) {
  const classes = useStyles(node);

  return (
    <>
      <Divider />
      <CardContent>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-evenly"
        >
          <RadiatorTempDisplay
            temp={node.radiator_temperature}
            hasTempErr={node.hasTempErr}
            isUnresponsive={node.isUnresponsive}
          />

          <Divider
            orientation="vertical"
            flexItem
            className={classes.divider}
          />
          <RoomTempDisplay
            temp={node.room_temperature}
            roomFeel={node.room_feel}
            isUnresponsive={node.isUnresponsive}
          />
        </Grid>
        <Divider />
        <Box textAlign="center" pt={0.5} position="relative">
          <Typography variant="subtitle2" className={classes.unresponsiveTime}>
            {toLocalTimeDateString(node.last_message)}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {node.lora_euid}
          </Typography>
          {node.isUnresponsive ? (
            <ErrorOutlineIcon className={classes.errIcon} />
          ) : null}
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
