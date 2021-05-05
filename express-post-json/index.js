const express = require('express');
const app = express();
const port = 3000;
let id = 1;

const grades = {};

app.get('/api/grades', (request, response) => {
  const gradesArray = [];
  for (const id in grades) {
    gradesArray.push(grades[id]);
  }
  response.json(gradesArray);
});

app.use(express.json());

app.post('/api/grades', (request, response) => {
  const grade = request.body;
  grades[id] = grade;
  grades[id].id = id;
  response.status(201);
  response.json(grade);
  id++;
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
