import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, Badge } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import { toFriendlyFloorName } from '../../utils';

const useStyles = makeStyles((theme) => ({
  selected: {
    backgroundColor: theme.palette.secondary.light,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  }
}));

function FloorMenuItem({ floor, index, selectedFloor, setSelectedFloor }) {
  let totalErrors =
  floor.errors.tempErr.length + floor.errors.unresponsive.length;
  let isSelected = selectedFloor === index;
  const classes = useStyles({isSelected});
  return (
    <ListItem
      button
      onClick={() => setSelectedFloor(index)}
      className={isSelected ? classes.selected : null}
    >
      <ListItemText primary={toFriendlyFloorName(floor.name)} />
      {totalErrors > 0 ? (
        <Badge
          badgeContent={totalErrors}
          color="error"
          overlap="circle"
          max={9}
        >
          <WarningRoundedIcon color="action" />
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
