const express = require('express');
const path = require('path');

const app = express();

const publicFile = path.join(__dirname, '/public');

const expressMiddleWare = express.static(publicFile);

app.use(expressMiddleWare);

app.listen(3000, () => {
  console.log('express server listening on port 3000');
});
