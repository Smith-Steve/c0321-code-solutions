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
  const gradesArray = [];
  for (const id in grades) {
    gradesArray.push(grades[id]);
  }
  response.json(gradesArray);
});

app.delete('/api/grades/:id', (request, response) => {
  delete grades[request.params.id];
  response.sendStatus(204);
  // eslint-disable-next-line no-console
  console.log(request.params.id);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('port 3000 enabled!');
});
