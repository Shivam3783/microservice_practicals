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
