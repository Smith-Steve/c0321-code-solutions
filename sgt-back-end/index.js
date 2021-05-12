const pg = require('pg');
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = 'select * from "grades" where "gradeId" = $1';
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `Cannot find grade with "gradeId" ${params}` });
      } else {
        res.json(grade);
      }
    }).catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An unexpectred error occurred.' });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: ' "gradeId" must be a postive integer' });
    return;
  }

  const sqlDeleteQuery = 'delete from grades where "gradeId" = $1 returning*;';
  const paramaters = [gradeId];
  db.query(sqlDeleteQuery, paramaters)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `Cannot find gradeId: ${gradeId}` });
      } else {
        res.status(204).send();
      }
    }).catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.post('/api/grades', (req, res, next) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = parseInt(req.body.grade, 10);

  if (!Number.isInteger(score) || score <= -1 || score >= 100) {
    res.status(400).json({ error: `please see the score you entered. ${score}` });
    return;
  }

  if (!course) {
    res.status(400).json({ error: 'Course name must be entered as a string.' });
    return;
  }

  if (!name) {
    res.status(400).json({ error: 'Student name must be entered as a string.' });
    return;
  }

  const sqlPostQuery = 'insert into "grades" ("name", "course", "score") values ($1, $2, $3 ) returning*;';
  const sqlParametersPost = [name, course, score];

  db.query(sqlPostQuery, sqlParametersPost)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    }).catch(error => {
      console.error(error);
      res.status(500).json({ error: 'please see entered parameters' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  const score = parseInt(req.body.grade, 10);

  if (!Number.isInteger(gradeId) && gradeId) {
    res.status(400).json({ error: 'please see the id you entered.' });
    return;
  }

  const sqlUpdateQuery = 'update "grades" set "score" = $1 where "gradeId" = $2 returning*';
  const sqlParametersUpdate = [score, gradeId];
  db.query(sqlUpdateQuery, sqlParametersUpdate)
    .then(result => {
      const update = result.rows[0];
      res.status(200).json(update);
    }).catch(error => {
      console.error(error);
      res.status(500).json({ error: 'please see entered parameters' });
    });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('port 3000 enabled!');
});
