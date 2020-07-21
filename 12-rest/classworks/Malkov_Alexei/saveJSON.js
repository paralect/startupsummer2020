const fs = require('fs');

function saveJSON(filename, data) {
  const dataSave = JSON.stringify(data);
  try {
    fs.writeFileSync(filename, dataSave)
  } catch (err) {
    console.error(err)
  }
}

module.exports = saveJSON;