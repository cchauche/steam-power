import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RadiatorCard from '../Cards/RadiatorCard';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
  divider: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  title: {
    display: 'inline-block',
  },
  line: {
    display: 'inline-block',
    marginLeft: theme.spacing(1),
    width: '100%',
  },
  cardGrid: {
    padding: theme.spacing(1, 2)
  }
}));

function FloorDivider({ spaces, title }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.divider}>
        <Typography variant="h4" className={classes.title}>
          {title}
        </Typography>
        {''}
        <hr className={classes.line} />
      </div>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        wrap="wrap"
        spacing={2}
        className={classes.cardGrid}
      >
        {(() => {
          let cards = [];
          for (const space of spaces) {
            if (space.radiators.length === 0) {
              cards.push(
                <RadiatorCard
                  radiator={null}
                  spaceName={space.name}
                  key={title + '-' + space.name + '0'}
                />
              );
            } else {
              let radiatorCards = space.radiators.map((radiator) => {
                return (
                  <RadiatorCard
                    radiator={radiator}
                    spaceName={space.name}
                    key={title + '-' + space.name + radiator.number}
                  />
                );
              });
              cards = cards.concat(radiatorCards);
            }
          }
          return cards;
        })()}
      </Grid>
    </div>
  );
}

FloorDivider.propTypes = {
  spaces: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default FloorDivider;
