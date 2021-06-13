import {
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles,
  Box,
} from '@material-ui/core';
import React from 'react';
import TempDisplay from './TempDisplay';
import { toLocalTimeDateString } from '../../../utils';

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: theme.spacing(0, 1),
  },
}));

function NodeCardContent({ node }) {
  const classes = useStyles();

  return (
    <>
      <Divider />
      <CardContent>
        {/* <Box textAlign="center">
          <Typography variant="subtitle2" color="textSecondary">
            {node.lora_euid}
          </Typography>
        </Box> */}
        <Grid container direction="row" alignItems="center">
          <TempDisplay />
          <Divider
            orientation="vertical"
            flexItem
            className={classes.divider}
          />
          <TempDisplay />
        </Grid>
        <Divider />
        <Box textAlign="center" pt={0.5}>
          <Typography variant="subtitle2" color="textSecondary">
            {toLocalTimeDateString(node.last_message)}
            <br/>
            {node.lora_euid}
          </Typography>
        </Box>
      </CardContent>
    </>
  );
}

export default NodeCardContent;
