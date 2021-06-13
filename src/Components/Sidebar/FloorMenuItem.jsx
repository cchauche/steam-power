import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText } from '@material-ui/core';
import { toFriendlyFloorName } from '../../utils';

function FloorMenuItem({ floor, index, selectedFloor, setSelectedFloor }) {
  let totalErrors =
    floor.errors.tempErr.length + floor.errors.unresponsive.length;
  return (
    <ListItem
      onClick={() => {
        console.log(
          `Clicked on floor: ${index} which has ${totalErrors} errors.`
        );
        setSelectedFloor(index);
      }}
    >
      <ListItemText primary={toFriendlyFloorName(floor.name)} />
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
