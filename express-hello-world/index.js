const express = require('express');
const app = express();

app.use((request, response) => {
  response.send('Success! Yigshamesh!');
});

app.listen(3000, () => {
});
