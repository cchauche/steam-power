import React from 'react';
import {
  Card,
  CardHeader,
  Grid,
  Typography,
  CardContent,
  Box,
  Divider,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NodeCardContent from './NodeCardContent';

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 200,
  },
}));

function RadiatorCard({ radiator, spaceName }) {
  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.card}>
        <CardHeader
          title={spaceName}
          subheader={radiator === null ? '' : 'Radiator ' + radiator.number}
        ></CardHeader>
        {radiator === null ? (
          <>
            <Divider />
            <CardContent>
              <Box textAlign="center">
                <Typography variant="h4" component="p">
                  No Nodes
                </Typography>
              </Box>
            </CardContent>
          </>
        ) : (
          radiator.nodes.map((node, i) => {
            return <NodeCardContent node={node} key={i} />;
          })
        )}
      </Card>
    </Grid>
  );
}

export default RadiatorCard;
