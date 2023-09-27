const getDayOfWeek = require('./DayOfWeekConverter');

const dayNumber = 1; 
const dayOfWeek = getDayOfWeek(dayNumber);
console.log(`Day ${dayNumber} is ${dayOfWeek}.`);

