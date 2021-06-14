import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from '../config/layoutConfig';
import BuildingDetail from './BuildingDetail';
import FloorMenuItem from './FloorMenuItem';

const useStyles = makeStyles(() => ({
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
}));

function Sidebar({ floors, selectedFloor, setSelectedFloor, buildingName }) {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      anchor="left"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <BuildingDetail buildingName={buildingName} />
      <Divider />
      <List>
        {floors.map((floor, i) => {
          return (
            <FloorMenuItem
              floor={floor}
              key={i}
              index={i}
              setSelectedFloor={setSelectedFloor}
              selectedFloor={selectedFloor}
            />
          );
        })}
      </List>
    </Drawer>
  );
}

Sidebar.propTypes = {
  floors: PropTypes.array.isRequired,
  selectedFloor: PropTypes.number,
  setSelectedFloor: PropTypes.func,
  buildingName: PropTypes.string,
};

export default Sidebar;
