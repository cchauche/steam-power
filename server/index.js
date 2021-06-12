const path = require('path');
const morgan = require('morgan');

const express = require('express');
const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(express.json());

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
