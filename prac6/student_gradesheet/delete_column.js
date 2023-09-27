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


// const fs = require('fs');
// const csv = require('csv-parser');
// const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// const filePath = 'Students.csv';
// const columnToDelete = 'Name'; // Replace with the column name you want to delete.

// // Read the CSV file and store its content in the 'rows' array
// const rows = [];

// fs.createReadStream(filePath)
//   .pipe(csv())
//   .on('data', (row) => {
//     delete row[columnToDelete]; // Delete the specified column from each row
//     rows.push(row);
//   })
//   .on('end', () => {
//     const csvWriter = createCsvWriter({ 
//       path: 'Students.csv', // Replace with the desired output file path
//       header: Object.keys(rows[0]).map(column => ({ id: column, title: column }))
//     });

//     csvWriter.writeRecords(rows)
//       .then(() => {
//         console.log('Column deleted successfully');
//       })
//       .catch((error) => {
//         console.error('Error deleting column:', error);
//       });
//   });