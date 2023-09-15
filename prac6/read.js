const fs = require('fs');
const csv = require('csv-parser');

const results = [];

fs.createReadStream('shop_items.csv')
  .pipe(csv())
  .on('data', (data) => {
    results.push(data);
  })
  .on('end', () => {
    console.log(results);
  });
