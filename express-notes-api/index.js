const express = require('express');
const app = express();
const route = 3000;
const file = 'data.json';
const fs = require('fs');

app.listen(route, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
