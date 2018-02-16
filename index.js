var fs = require('fs');
var tableToCsv = require('node-table-to-csv');

fs.readFile('./tableHtml.txt', function read(err, data) {
    if (err) {
        throw err;
    }
    csv = tableToCsv(data);
    fs.writeFile('outputTable.csv', csv, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;
    // success case, the file was saved
      console.log('Lyric saved!');
    });
});
