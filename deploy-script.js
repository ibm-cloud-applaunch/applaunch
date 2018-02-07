const fs = require('fs');

console.log('modifying the paths');
fs.readFile('./index.html', 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }
  const result = data.replace(/static/g, 'build/static');

  fs.writeFile('./index.html', result, 'utf8', (error) => {
    if (error) return console.log(error);
  });
});
