import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';

function TempDisplay() {
  return (
    <Grid item>
      <Box textAlign="center">
        <strong>Radiator Temp</strong>
        <Typography variant="h3" component="h6">
          215
        </Typography>
      </Box>
    </Grid>
  );
}

export default TempDisplay;
