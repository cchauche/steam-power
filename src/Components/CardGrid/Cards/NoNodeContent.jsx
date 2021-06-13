import React from 'react';
import { Divider, CardContent, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

export default function NoNodeContent({ text }) {
  return (
    <>
      <Divider />
      <CardContent>
        <Typography variant="overline" component="p" align="center">
          {text}
        </Typography>
      </CardContent>
    </>
  );
}

NoNodeContent.propTypes = {
  text: PropTypes.string.isRequired
};
