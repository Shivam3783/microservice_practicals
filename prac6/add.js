const fs = require('fs');
const csv = require('csv-parser');

const newItem = {
  name: 'latest',
  price: 555,
  quantity: 5555,
};

const newRow = `${newItem.name},${newItem.price},${newItem.quantity}`;

fs.appendFile('shop_items.csv', '\n' + newRow, (err) => {
  if (err) throw err;
  console.log('Item added to CSV file.');
});
