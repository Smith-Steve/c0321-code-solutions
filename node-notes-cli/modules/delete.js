const fs = require('fs');

const Delete = (fileName, fileFormat, entryIndex) => {
  fs.readFile(fileName, fileFormat, (error, data) => {
    if (error) throw error;
    data = JSON.parse(data);
    if (data.notes[entryIndex]) {
      delete data.notes[entryIndex];
      data.nextId--;
      fs.writeFile(fileName, JSON.stringify(data, null, 2), error => {
        if (error) throw error;
        console.log('success');
      });
    } else {
      console.error(error);
    }
  });
};

module.exports = Delete;
