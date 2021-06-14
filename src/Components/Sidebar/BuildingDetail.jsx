import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, ListItem, List } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.contrastText,
  },
  cover: {
    height: 250,
  },
  coverImage: {
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));

function BuildingDetail({ buildingName }) {
  const classes = useStyles();

  return (
    <List disablePadding={true}>
      <ListItem className={classes.root}>
        <Typography variant="h6" component="h2" color="inherit">
          {buildingName}
        </Typography>
      </ListItem>

      <div className={classes.cover}>
        <div
          style={{ backgroundImage: 'url(/img/1234_test_street.jpeg)' }}
          className={classes.coverImage}
        ></div>
      </div>
      <ListItem>
        <Typography variant="body2" component="p">
          1234 Test Street
          <br />
          Brooklyn, NY 12345
        </Typography>
      </ListItem>
    </List>
  );
}

BuildingDetail.propTypes = {
  buildingName: PropTypes.string,
};

export default BuildingDetail;
