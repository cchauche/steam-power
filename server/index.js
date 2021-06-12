const path = require('path');
const morgan = require('morgan');
const fs = require('fs/promises');

const express = require('express');
const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(express.json());

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.get('/api/1234_test_street', async (req, res) => {
  try {
    let data = await fs.readFile(
      path.resolve(__dirname, '..', 'db', '1234_Test_Street.json')
    );
    res.status(200).json(JSON.parse(data));
  } catch (err) {
    console.error('There was an error reading the file: ', err);
    res.sendStatus(501);
  }
});

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
