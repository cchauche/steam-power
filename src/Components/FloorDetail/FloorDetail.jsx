import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FloorDivider from './FloorDivider';
import { toFriendlyFloorName } from '../../utils';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1, 3),
  },
}));

function FloorDetail({ floor }) {
  const classes = useStyles();
  if (floor) {
    return (
      <Paper square variant="outlined" className={classes.paper}>
        <FloorDivider
          spaces={floor.spaces}
          title={toFriendlyFloorName(floor.name)}
        />
        {floor.units.map((unit, i) => {
          return (
            <FloorDivider spaces={unit.spaces} title={unit.name} key={i} />
          );
        })}
      </Paper>
    );
  } else {
    return null;
  }
}

FloorDetail.propTypes = {
  floor: PropTypes.object,
};

export default FloorDetail;
