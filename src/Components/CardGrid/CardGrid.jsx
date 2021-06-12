import { Grid } from '@material-ui/core';
import React from 'react';

function CardGrid({ children }) {
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      wrap="wrap"
      spacing="2"
    >
      {children}
    </Grid>
  );
}

export default CardGrid;
