const fs = require('fs');

const file = process.argv[2];

fs.readFile(file, 'utf8', (error, data) => {
  if (error) throw error;
  console.log(data);
});
