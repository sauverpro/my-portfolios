// Function to calculate the number of months
function calculateMonths(money) {
    return Math.floor(money / 10000);
}

// Function to add months and time to a date
function addMonthsAndTimeToDate(date, monthsToAdd, hours, minutes, seconds) {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + monthsToAdd);
    newDate.setHours(hours);
    newDate.setMinutes(minutes);
    newDate.setSeconds(seconds);
    return newDate;
}

// Example usage
const today = new Date(); // Get today's date
const money = 50000;      // Input money

const monthsToAdd = calculateMonths(money);

// Set the time you want to add (hours, minutes, seconds)
const hoursToAdd = 2;
const minutesToAdd = 30;
const secondsToAdd = 0;

const updatedDate = addMonthsAndTimeToDate(today, monthsToAdd, hoursToAdd, minutesToAdd, secondsToAdd);

console.log(`Input money: ${money}`);
console.log(`Number of months: ${monthsToAdd}`);
console.log(`Today's date: ${today.toISOString()}`);
console.log(`Updated date: ${updatedDate.toISOString()}`);
