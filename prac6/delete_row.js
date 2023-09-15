const fs = require('fs');
const csv = require('csv-parser');

const rowToDelete = 'Apples';

const filePath = 'shop_items.csv';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading CSV file:', err);
    return;
  }

  const rows = data.split('\n');
  let newData = [];
  let header = rows[0];

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i].split(',');

    if (row[0] !== rowToDelete) {
      newData.push(row.join(','));
    }
  }

  newData = [header, ...newData].join('\n');

  fs.writeFile(filePath, newData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing CSV file:', err);
    } else {
      console.log('Row deleted from CSV file.');
    }
  });
});
