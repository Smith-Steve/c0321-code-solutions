const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.json());
const route = 3000;

const data = require('./data.json');
const notes = data.notes;

app.get('/api/notes', (request, response) => {
  const notesArray = [];
  for (const item in notes) {
    notesArray.push(notes[item]);
  }
  response.send(notesArray);
});

app.post('/api/notes', (request, response) => {
  if (request.body.content) {
    const nextNote = {
      id: data.nextId,
      content: request.body.content
    };
    notes[data.nextId] = nextNote; data.nextId++; var dataContent = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', dataContent, 'utf8', error => {
      if (error) {
        return response.status(500).send('No Entry');
      } else {
        return response.status(201).send('Entry Successful.').json(nextNote);
      }
    });
  } else if (!request.body.content) {
    response.send(400).send({ error: 'No message was sent.' });
  }
});

app.put('/api/notes/:id', (request, response) => {
  const noteId = parseInt(request.params.id, 10);
  if (noteId < 0 && noteId) {
    response.status(400).send({ error: 'bad data provided.' });
  } else if (!request.body.content) {
    response.status(500).json({ error: 'Content is a required field.' });
  } else {
    const updatedNote = request.body.content;
    data.notes[noteId].content = updatedNote;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), error => {
      if (error) {
        return response.status(500).json({ error: 'an unexpected error occurred' });
      } else {
        return response.status(200).json(data.notes[noteId]);
      }
    });
  }
});

app.get('/api/notes/:id', (request, response) => {
  const noteId = parseInt(request.params.id, 10);
  if (noteId < 0) {
    response.status(400).send({ error: 'id must be a positive integer' });
  } else if (data.notes[noteId]) {
    const broadCastValue = JSON.stringify(data.notes[noteId]);
    response.status(200).send(broadCastValue);
  } else {
    response.status(404).send({ error: 'there is no note with that id' });
  }
});

app.delete('/api/notes/:id', (request, response) => {
  const deleteId = parseInt(request.params.id, 10);
  if (deleteId < 0) {
    response.status(400).send({ error: 'id must be a positive integer' });
  } else if (!data.notes[deleteId]) {
    response.status(404).send({ error: 'This id does not exist.' });
  } else if (data.notes[deleteId]) {
    delete data.notes[deleteId];
    fs.writeFile('data.json', JSON.stringify(data, null, 2), error => {
      if (error) {
        return response.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        return response.status(204).send({ success: 'deleted' });
      }
    });
  }
});

app.listen(route, () => {
  // eslint-disable-next-line no-console
  console.log('listening on express port 3000');
});
