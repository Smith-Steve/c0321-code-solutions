const fs = require('fs');
const [, , ...array] = process.argv;
const data = new Uint8Array(Buffer.from(array[0] + ' \n '));

fs.writeFile('note.txt', data, 'utf8', error => {
  if (error) throw error;
});
