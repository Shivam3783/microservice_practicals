const DayOfWeekConverter = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

module.exports = function getDayOfWeek(dayNumber) {
    if (dayNumber >= 1 && dayNumber <= 7) {
        return DayOfWeekConverter[dayNumber - 1];
    } else {
        return "Invalid day number. Please enter a number between 1 and 7.";
    }
};
