import React from 'react';
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import FloorDivider from './FloorDivider';

function FloorDetail({ floor }) {
  if (floor) {
    return (
      <Paper square variant="outlined">
        {/* Conditionally Add Spaces */}
        {/* Conditionally Add Units */}
        <FloorDivider />
      </Paper>
    );
  } else {
    return null;
  }
}

export default FloorDetail;
