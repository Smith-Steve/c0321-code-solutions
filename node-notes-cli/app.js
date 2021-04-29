const fs = require('fs');
const [, , ...userEntry] = process.argv;
const userCommand = userEntry[0];
const userTextEntry = userEntry[1];
const file = 'data.json';

if (userCommand === 'create') {
  fs.readFile(file, 'utf8', (error, data) => {
    if (error) throw error;
    data = JSON.parse(data);
    var nextId = data.nextId++;
    data.notes[nextId] = userTextEntry;

    fs.writeFile(file, JSON.stringify(data, null, 2), error => {
      if (error) throw error;
      console.log('success!');
    });
  });

} else if (userCommand === 'read') {
  fs.readFile(file, 'utf8', (error, data) => {
    if (error) throw error;
    data = JSON.parse(data);
    for (const number in data.notes) {
      console.log(number + ': ' + data.notes[number]);
    }
    process.exit(0);
  });
} else if (userCommand === 'update' && userTextEntry) {
  fs.readFile(file, 'utf8', (error, data) => {
    if (error) throw error;
    data = JSON.parse(data);
    if (data.notes[userTextEntry]) {
      data.notes[userTextEntry] = userEntry[2];
    } else {
      console.error(error);
    }
    fs.writeFile(file, JSON.stringify(data, null, 2), error => {
      if (error) throw error;
      console.log('success!');
    });
  });
} else if (userCommand === 'delete' && userTextEntry) {
  fs.readFile(file, 'utf8', (error, data) => {
    if (error) throw error;
    data = JSON.parse(data);
    if (data.notes[userTextEntry]) {
      delete data.notes[userTextEntry];
      data.nextId--;
      fs.writeFile(file, JSON.stringify(data, null, 2), error => {
        if (error) throw error;
        console.log('success');
      });
    } else {
      console.error(error);
    }
  });
} else {
  console.log('Invalid entry.');
  process.exit(1);
}
