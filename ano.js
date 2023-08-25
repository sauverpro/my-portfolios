// Get the current date
const currentDate = new Date();

// Number of days to add
const daysToAdd = 135; // Change this to the number of days you want to add

// Calculate the new date by adding days
currentDate.setDate(currentDate.getDate() + daysToAdd);

console.log(currentDate);
