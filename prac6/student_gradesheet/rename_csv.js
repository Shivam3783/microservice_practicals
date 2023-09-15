
const fs = require('fs');

const oldFilePath = 'students.csv';
const newFilePath = 'students_result.csv';

// const newFilePath = 'students.csv';
// const oldFilePath = 'students_result.csv';


fs.rename(oldFilePath, newFilePath, (error) => {
    if (error) {
        console.error('Error renaming file:', error);
    } else {
        console.log('File renamed successfully');
    }
});