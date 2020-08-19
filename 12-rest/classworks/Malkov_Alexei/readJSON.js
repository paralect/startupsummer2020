const fs = require('fs');

function readJSON(filename) {
  let db;
  // read JSON object from file
  try {
    const json = fs.readFileSync(filename, 'utf8');
    return JSON.parse(json);
  } catch (err) {
    console.error(err)
    return false
  }
}

module.exports = readJSON;