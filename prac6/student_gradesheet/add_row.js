const fs = require('fs');

const newItem = {
  Name: 'latest',
  Quiz_Marks: 9,
  Midterm_Marks: 9,
  Assignment_Marks: 9,
  final_exam_marks: 9,
  Total_marks: 36
};

const newRow = `${newItem.Name},${newItem.Quiz_Marks},${newItem.Midterm_Marks},${newItem.Assignment_Marks},${newItem.final_exam_marks},${newItem.Total_marks}`;

fs.appendFile('students.csv', '\n' + newRow, (err) => {
  if (err) throw err;
  console.log('Item added to CSV file.');
});

// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const csvWriter = createCsvWriter({
//   path: 'Students.csv',
//   header: [
//     { id: 'name', title: 'Name' },
//     { id: 'age', title: 'Age' },
//     { id: 'gender', title: 'Gender' },
//     { id: 'subject', title: 'Subject' },
//   ]
// }
// );
// const data =
//   [
//     {
//       name: 'raman',
//       age: '28',
//       gender: 'female',
//       subject: 'microservices'
//     },
//     {
//       name: 'harleen',
//       age: '26',
//       gender: 'female',
//       subject: 'EADC'
//     },
//     {
//       name: 'Gurpreet',
//       age: '24',
//       gender: 'male',
//       subject: 'ESFP'
//     },
//     {
//       name: 'Narveen',
//       age: '32',
//       gender: 'female',
//       subject: 'Mathematics'
//     }
//   ]
// csvWriter
//   .writeRecords(data)
//   .then(() => console.log('csv writen'));