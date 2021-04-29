const fs = require('fs');
const [, , ...userEntry] = process.argv;
const userCommand = userEntry[0];
let userTextEntry = userEntry[1];
const file = 'data.json';

if (userCommand === 'create') {
  userTextEntry = new Uint8Array(Buffer.from(userTextEntry));
  fs.readFile(file, 'utf8', (error, data) => {
    if (error) {
      console.log(error);
      process.exit(1);
    } else {
      fs.writeFile(file, userTextEntry, 'utf8', error => {
        if (error) throw error;
        data = JSON.parse(data);
        data.nextId = '1';
        data.notes.nexId = userTextEntry;
      });
    }
  });
  fs.writeFile(file, userTextEntry, 'utf8', error => {
    if (error) throw error;
  });
} else if (userCommand === 'read') {
  fs.readFile(file, 'utf8', (error, data) => {
    if (error) throw error;
    data = JSON.parse(data);
    console.log(data);
    process.exit(0);
  });
}
