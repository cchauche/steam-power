import React from 'react';
import Typography from '@material-ui/core/Typography';

function BuildingDetail() {
  return (
    <div>
      <Typography variant="h6" component="h2">Street Address</Typography>

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
