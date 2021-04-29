const fs = require('fs');

const Create = (fileName, fileFormat, userTextEntry) => {
  fs.readFile(fileName, fileFormat, (error, data) => {
    if (error) throw error;
    data = JSON.parse(data);
    const nextId = data.nextId++;
    data.notes[nextId] = userTextEntry;

    fs.writeFile(fileName, JSON.stringify(data, null, 2), error => {
      if (error) throw error;
      console.log('Success!');
    });
  });
};

module.exports = Create;
