import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cover: {
    height: 250,
  },
  coverImage: {
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));

function BuildingDetail() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h6" component="h2">
        Street Address
      </Typography>

      <div className={classes.cover}>
        <div
          style={{ backgroundImage: 'url(/img/1234_test_street.jpeg)' }}
          className={classes.coverImage}
        ></div>
      </div>
      <Typography variant="body2" component="p">
        1234 Test Street
        <br />
        Brooklyn, NY 12345
      </Typography>
    </div>
  );
}

export default BuildingDetail;
