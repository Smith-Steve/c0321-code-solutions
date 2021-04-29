const fs = require('fs');

const Read = (fileName, fileFormat) => {
  fs.readFile(fileName, fileFormat, (error, data) => {
    if (error) throw error;
    data = JSON.parse(data);
    for (const number in data.notes) {
      console.log(number + ': ' + data.notes[number]);
    }
    process.exit(0);
  });
};
module.exports = Read;
