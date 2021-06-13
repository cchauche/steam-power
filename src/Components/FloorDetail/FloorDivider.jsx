import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardGrid from '../CardGrid/CardGrid';
import RadiatorCard from '../CardGrid/Cards/RadiatorCard';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
  container: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  title: {
    display: 'inline-block',
  },
  divider: {
    display: 'inline-block',
    marginLeft: theme.spacing(1),
    width: '100%',
  },
}));

function FloorDivider({ spaces, title }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          {title}
        </Typography>
        {''}
        <hr className={classes.divider} />
      </div>
      <CardGrid>
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
      </CardGrid>
    </div>
  );
}

export default FloorDivider;
