const fs = require('fs');
const path = require('path');

let writeToFile = (filename, data) => {
    fs.writeFile(filename, data, 'utf-8', (err) => {
        if (err) throw err;
        console.log('Data Store to a file');
    });
};

module.exports = {
  writeToFile
};