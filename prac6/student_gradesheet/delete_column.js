const fs = require('fs');
const csv = require('csv-parser');

const columnToDelete = 'Midterm_Marks'; 
const filePath = 'students.csv';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading CSV file:', err);
    return;
  }

  const rows = data.split('\n');
  let newData = [];
  let header = rows[0];

  const columns = header.split(',');
  const columnIndexToDelete = columns.indexOf(columnToDelete);

  if (columnIndexToDelete === -1) {
    console.error('Column not found in CSV file.');
    return;
  }

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i].split(',');
    
    row.splice(columnIndexToDelete, 1);
    
    newData.push(row.join(','));
  }

  newData = [header.split(',').filter((_, idx) => idx !== columnIndexToDelete).join(','), ...newData].join('\n');

  fs.writeFile(filePath, newData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing CSV file:', err);
    } else {
      console.log(`Column '${columnToDelete}' deleted from CSV file.`);
    }
  });
});
