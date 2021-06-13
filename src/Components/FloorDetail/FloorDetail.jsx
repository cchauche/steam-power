import React from 'react';
import Paper from '@material-ui/core/Paper';
import FloorDivider from './FloorDivider';
import { toFriendlyFloorName } from '../../utils';

function FloorDetail({ floor }) {
  if (floor) {
    return (
      <Paper square variant="outlined">
        {/* Conditionally Add Spaces */}
        <FloorDivider
          spaces={floor.spaces}
          title={toFriendlyFloorName(floor.name)}
        />
        {/* Conditionally Add Units */}
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

export default FloorDetail;
