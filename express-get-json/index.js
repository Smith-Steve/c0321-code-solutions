const express = require('express');
const app = express();
const port = 3000;

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', (request, response) => {
  response.json(grades);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Yigshamesh!');
});
