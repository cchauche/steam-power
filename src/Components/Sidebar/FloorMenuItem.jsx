import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, Badge } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import { toFriendlyFloorName } from '../../utils';

function FloorMenuItem({ floor, index, selectedFloor, setSelectedFloor }) {
  let totalErrors =
    floor.errors.tempErr.length + floor.errors.unresponsive.length;
  return (
    <ListItem onClick={() => setSelectedFloor(index)}>
      <ListItemText primary={toFriendlyFloorName(floor.name)} />
      {totalErrors > 0 ? (
        <Badge
          badgeContent={totalErrors}
          color="error"
          overlap="circle"
          max={9}
        >
          <WarningIcon />
        </Badge>
      ) : null}
    </ListItem>
  );
}

FloorMenuItem.propTypes = {
  index: PropTypes.number.isRequired,
  floor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    errors: PropTypes.object.isRequired,
  }),
  selectedFloor: PropTypes.number,
  setSelectedFloor: PropTypes.func,
};

export default FloorMenuItem;
