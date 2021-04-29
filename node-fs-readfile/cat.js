const fs = require('fs');

const [...file] = process.argv;

for (var i = 2; i < file.length; i++) {
  fs.readFile(file[i], 'utf8', (error, data) => {
    if (error) throw error;
    console.log(data);
  });
}
