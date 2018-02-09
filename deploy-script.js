const fs = require('fs');

console.log('modifying the paths');
fs.readFile('./index.html', 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }
  const result = data.replace(/static/g, 'build/static');
  const finalResult = result.replace(/favicon.ico/g, 'build/favicon.ico');

  fs.writeFile('./index.html', finalResult, 'utf8', (error) => {
    if (error) return console.log(error);
  });
});
