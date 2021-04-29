const fs = require('fs');

const Update = (fileName, fileFormat, entryIndex, userTextEntry) => {
  fs.readFile(fileName, fileFormat, (error, data) => {
    if (error) throw error;
    data = JSON.parse(data);
    if (data.notes[entryIndex]) {
      data.notes[entryIndex] = userTextEntry;
    } else {
      console.error(error);
    }
    fs.writeFile(fileName, JSON.stringify(data, null, 2), error => {
      if (error) throw error;
      console.log('success!');
    });
  });
};

module.exports = Update;
