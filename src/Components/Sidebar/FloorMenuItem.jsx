import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText } from '@material-ui/core';

function FloorMenuItem({ floor }) {
  let totalErrors =
    floor.errors.tempErr.length + floor.errors.unresponsive.length;
  return (
    <ListItem
      onClick={() => {
        console.log(
          `Clicked on floor: ${floor.name} which has ${totalErrors} errors.`
        );
      }}
    >
      <ListItemText
        primary={
          isNaN(parseInt(floor.name)) ? floor.name : 'Floor ' + floor.name
        }
      />
    </ListItem>
  );
}

FloorMenuItem.propTypes = {
  floor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    errors: PropTypes.object.isRequired,
  }),
};

export default FloorMenuItem;
