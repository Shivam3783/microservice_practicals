const fs = require('fs');
const csv = require('csv-parser');

const rowToDelete = 'manav';

const filePath = 'students.csv';

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


// const fs = require('fs');
// const csv = require('csv-parser');
// const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// const filePath = 'Students.csv';
// const rowToDelete = 2; // Replace with the row index you want to delete (0-based).

// // Read the CSV file and store its content in the 'rows' array
// const rows = [];

// fs.createReadStream(filePath)
//   .pipe(csv())
//   .on('data', (row) => {
//     rows.push(row);
//   })
//   .on('end', () => {
//     if (rowToDelete >= 0 && rowToDelete < rows.length) {
//       rows.splice(rowToDelete, 1); // Remove the desired row
//       const csvWriter = createCsvWriter({ 
//         path: 'Students.csv', // Replace with the desired output file path
//         header: Object.keys(rows[0]).map(column => ({ id: column, title: column }))
//       });
      
//       csvWriter.writeRecords(rows)
//         .then(() => {
//           console.log('Row deleted successfully');
//         })
//         .catch((error) => {
//           console.error('Error deleting row:', error);
//         });
//     } else {
//       console.error('Invalid row index');
//     }
//   });