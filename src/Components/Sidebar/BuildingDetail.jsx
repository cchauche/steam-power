import React from 'react';
import Paper from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function BuildingDetail() {
  return (
    <div>
      <Typography variant="h6">Street Address</Typography>

      <div className="cover">
        <div
          style={{ backgroundImage: 'url(/img/1234_test_street.jpeg)' }}
          className="cover-image"
        ></div>
      </div>
      <Typography variant="body2" component="p">
        1234 Test Street
        <br/>
        Brooklyn, NY 12345
      </Typography>
    </div>
  );
}

export default BuildingDetail;
