const Read = require('./modules/read');
const Create = require('./modules/create');
const Update = require('./modules/update');
const Delete = require('./modules/delete');
const [, , ...userEntry] = process.argv;
const userCommand = userEntry[0];
const userTextEntry = userEntry[1];
const file = 'data.json';

if (userCommand === 'create') {
  Create(file, 'utf8', userTextEntry);
} else if (userCommand === 'read') {
  Read(file, 'utf8');
} else if (userCommand === 'update' && userTextEntry) {
  Update(file, 'utf8', userTextEntry, userEntry[2]);
} else if (userCommand === 'delete' && userTextEntry) {
  Delete(file, 'utf8', userTextEntry);
} else {
  console.log('Invalid entry.');
  process.exit(1);
}
