const fs = require('fs');
const data = new Uint8Array(Buffer.from(Math.random().toString() + ' \n '));

fs.writeFile('newFile.txt', data, error => {
  if (error) throw error;
});
