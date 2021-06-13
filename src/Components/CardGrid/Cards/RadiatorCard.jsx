import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NodeCardContent from './NodeCardContent';
import NoNodeContent from './NoNodeContent';

const useStyles = makeStyles(() => ({
  card: {
    minWidth: 200,
  },
}));

function RadiatorCard({ radiator, spaceName }) {
  const classes = useStyles();
  let content = null;

  if (radiator) {
    content =
      radiator.nodes.length > 0 ? (
        radiator.nodes.map((node, i) => {
          return <NodeCardContent node={node} key={i} />;
        })
      ) : (
        <NoNodeContent text={'NO COZY'} />
      );
  } else {
    content = <NoNodeContent text={'NO RADIATOR'} />;
  }

  return (
    <Grid item>
      <Card className={classes.card}>
        <CardHeader
          title={spaceName}
          subheader={radiator === null ? '' : 'Radiator ' + radiator.number}
        ></CardHeader>
        {content}
      </Card>
    </Grid>
  );
}

RadiatorCard.propTypes = {
  radiator: PropTypes.shape({
    nodes: PropTypes.array,
    number: PropTypes.number,
  }),
  spaceName: PropTypes.string,
};

export default RadiatorCard;
